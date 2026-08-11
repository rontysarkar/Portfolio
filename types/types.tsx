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