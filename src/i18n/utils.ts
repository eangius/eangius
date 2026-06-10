import { ui, defaultLang, type UiKey } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/** Resolve `Astro.currentLocale` (which may be undefined) to a known UI locale. */
export function getLocale(currentLocale: string | undefined): keyof typeof ui {
  return (currentLocale as keyof typeof ui) ?? defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: UiKey): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key];
  };
}