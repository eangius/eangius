// Display names for languages with a translation table below.
// Add 'es' / 'fr' here (and to `astro.config.mjs` -> i18n.locales) once translated.
export const languages = {
  en: "English",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.name": "Elian Angius",
    "hero.title": "Data Science & ML Lead",
    "hero.cta.contact": "Get in Touch",
    "hero.cta.projects": "View Projects",

    "skills.title": "Skills & Technologies",
    "skills.subtitle": "Placeholder skill set — to be refined.",

    "projects.title": "Projects",
    "projects.subtitle": "A selection of work — placeholders for now.",
    "projects.viewProject": "View Project",
    "projects.viewRepo": "Source",
    "projects.viewDemo": "Live Demo",

    "search.placeholder": "Search the site...",

    "theme.toggle": "Toggle color theme",

    "language.label": "Language",

    "footer.rights": "All rights reserved.",

    "404.title": "Page not found",
    "404.message": "The page you're looking for doesn't exist or has moved.",
    "404.cta": "Back to home",
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
