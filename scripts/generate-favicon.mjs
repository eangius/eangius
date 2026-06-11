#!/usr/bin/env node
// Derives public/favicon.ico from public/favicon.svg so the two never drift apart.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const svgPath = `${root}/public/favicon.svg`;
const icoPath = `${root}/public/favicon.ico`;
const sizes = [16, 32, 48];

const svg = await readFile(svgPath);

const pngs = await Promise.all(
  sizes.map((size) =>
    sharp(svg, { density: 384 })
      .resize(size, size)
      .png()
      .toBuffer()
  )
);

const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(1, 2); // image type: icon
header.writeUInt16LE(sizes.length, 4); // image count

let offset = header.length;
sizes.forEach((size, i) => {
  const entry = 6 + i * 16;
  header.writeUInt8(size, entry); // width
  header.writeUInt8(size, entry + 1); // height
  header.writeUInt16LE(1, entry + 4); // color planes
  header.writeUInt16LE(32, entry + 6); // bits per pixel
  header.writeUInt32LE(pngs[i].length, entry + 8); // image data size
  header.writeUInt32LE(offset, entry + 12); // image data offset
  offset += pngs[i].length;
});

await writeFile(icoPath, Buffer.concat([header, ...pngs]));
console.log(`Generated favicon.ico (${sizes.join('x, ')}x) from favicon.svg`);