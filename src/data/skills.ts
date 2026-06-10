// Placeholder skills/technologies data — refine categories, items & levels later.
export type SkillLevel = 1 | 2 | 3; // low / medium / high

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Science & ML",
    skills: [
      { name: "Predictive Modeling", level: 3 },
      { name: "Forecasting", level: 3 },
      { name: "Deep Learning", level: 2 },
      { name: "Model Explainability", level: 2 },
      { name: "Agentic Systems", level: 2 },
    ],
  },
  {
    title: "Location Intelligence",
    skills: [
      { name: "Geospatial Analysis", level: 3 },
      { name: "Kernel Density Estimation", level: 3 },
      { name: "Record Linkage", level: 2 },
      { name: "Routing & O/D Matrices", level: 1 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 3 },
      { name: "SQL", level: 3 },
      { name: "TypeScript", level: 2 },
      { name: "Scala", level: 1 },
    ],
  },
  {
    title: "Cloud & MLOps",
    skills: [
      { name: "AWS", level: 2 },
      { name: "Docker", level: 2 },
      { name: "CI/CD", level: 2 },
      { name: "Spark / Databricks", level: 2 },
    ],
  },
];