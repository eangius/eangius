// ABOUT: internationalized multilingual text string mappings.
// Add language codes here (& to `astro.config.mjs` -> i18n.locales) once translated.
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

    "hero.name": "Elian Angius",
    "hero.title": "Applied Data Science & Machine Learning Lead",
    "hero.cta.contact": "Get in Touch",
    "hero.cta.projects": "View Projects",

    "skills.title": "Expertise",
    "skills.subtitle": "Skills & technologies I specialize in.",

    "projects.title": "Projects",
    "projects.subtitle": "A selection of my works, experiments & prototypes.",
    "projects.viewRepo": "Source",
    "projects.viewDemo": "Live Demo",

    "search.placeholder": "Search the site...",

    "theme.toggle": "Toggle color theme",

    "language.label": "Language",

    "footer.rights": "All rights reserved",

    "404.title": "Page not found",
    "404.message": "The page you're looking for doesn't exist or has moved.",
    "404.cta": "Back to home",
  },
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
