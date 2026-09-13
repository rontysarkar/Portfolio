import { LucideIcon } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  short: string;
  tags: string[];
  desc: string;
  image: string;
  preview: string;
  repo: string;
  icon: LucideIcon;
};


export type TEducationItem = {
  id: string;
  title: string;
  subtitle: string;
  meta: string[];
  description: string;
  type: "degree" | "course" | "certification";
  link?: string;
  tags?: string[];
};