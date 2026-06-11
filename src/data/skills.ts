// Placeholder skills/technologies data — refine categories & items later.
import type { IconName } from "../components/ui/Icon.astro";

export type SkillCategoryColor = "purple" | "blue" | "green" | "orange";

export interface SkillCategory {
  title: string;
  icon: IconName;
  color: SkillCategoryColor;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Science & ML",
    icon: "brain",
    color: "purple",
    skills: ["Predictive Modeling", "Forecasting", "Deep Learning", "Model Explainability", "Agentic Systems"],
  },
  {
    title: "Location Intelligence",
    icon: "map-pin",
    color: "orange",
    skills: ["Geospatial Analysis", "Kernel Density Estimation", "Record Linkage", "Routing & O/D Matrices"],
  },
  {
    title: "Programming",
    icon: "code",
    color: "green",
    skills: ["Python", "SQL", "TypeScript", "Scala"],
  },
  {
    title: "Cloud & MLOps",
    icon: "cloud",
    color: "blue",
    skills: ["AWS", "Docker", "CI/CD", "Spark / Databricks"],
  },
];