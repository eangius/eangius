// Skills & technologies showcased in the Skills section.
import type { IconName } from "../components/ui/Icon.astro";

export type SkillCategoryColor = "purple" | "red" | "green" | "orange";

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
    skills: [
        "Predictive Modeling",
        "Forecasting",
        "Deep Learning",
        "Agentic Systems",
        "Vector Embeddings",
        "Information Retrieval",
        "Model Explainability",
    ],
  },
  {
    title: "Location Intelligence",
    icon: "map-pin",
    color: "orange",
    skills: [
      "Geospatial Mapping",
      "Kernel Density Heatmaps",
      "Search & Routing",
      "Demographic Modeling",
      "Knowledge Graphs",
    ],
  },
  {
    title: "Applied Research",
    icon: "flask-conical",
    color: "green",
    skills: [
        "Exploratory Analysis",
        "Rapid Prototyping",
        "System Design",
        "Simulation",
        "A/B Testing"
    ],
  },
  {
    title: "Leadership",
    icon: "users",
    color: "red",
    skills: [
        "Requirements Specs",
      "Agile Roadmapping",
      "Cross-Functional Collab",
      "Product Demos",
      "Team Mentoring",
    ],
  },
];