# Portfolio

Personal portfolio site built with [Astro](https://astro.build).

## Setup

Requires Node.js >= 22.12.0.

```bash
npm install
```

## Local development

```bash
npm run dev
```

This starts a local dev server (default <http://localhost:4321>) with live reload.

## Adding content

Projects are managed as Markdown files under `src/content/projects/`. To add a new
project, create a new `.md` file in that folder using `placeholder-project.md` as a
template, with the following frontmatter:

| Field      | Required | Description                                  |
| ---------- | -------- | --------------------------------------------- |
| `title`    | yes      | Project title                                  |
| `summary`  | yes      | One or two sentence summary                    |
| `thumbnail`| no       | Path to an image under `public/`               |
| `tags`     | no       | List of tags (e.g. `["Python", "GIS"]`)        |
| `repoUrl`  | no       | Link to the source repository                  |
| `demoUrl`  | no       | Link to a live demo                            |
| `date`     | no       | Project date                                   |
| `order`    | no       | Sort order (lower shows first)                 |
| `draft`    | no       | Set to `true` to hide from the site            |

The body of the file (below the frontmatter) is rendered as the project's case-study
content.

## Other commands

```bash
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
npm run check    # type-check the project
```