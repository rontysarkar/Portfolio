import { Project } from "@/types/types";
import {
  ShoppingBag,
  type LucideIcon,
  Home,
  BookOpen,
} from "lucide-react";


export const projects: Project[] = [
  {
    id: 1,
    title: "BashaRent",
    short: "Rental Property Marketplace",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
    ],
    desc: "A full-stack rental property marketplace connecting tenants and landlords with role-based access, property management, rental requests, Stripe payments, and admin oversight.",
    image: "/basharent.png",
    preview: "https://basharent-frontend-nine.vercel.app/",
    repo: "https://github.com/rontysarkar/BashaRent-Frontend",
    icon: Home,
  },
  {
    id: 2,
    title: "ID Bazar",
    short: "Gaming Account Marketplace",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "Mongodb"],
    desc: "Digital gaming account marketplace with account listings, search, filtering, and an escrow-based transaction system.",
    image: "/id-bazar.png",
    preview: "https://id-bazar-two.vercel.app/",
    repo: "https://github.com/rontysarkar/IDBazar-frontend",
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "Boi Bazar",
    short: "Online Book Store",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "A responsive online bookstore with book browsing, wishlist, favorites, filtering, dynamic content, and a user-friendly interface.",
    image: "/projects-5.png",
    preview: "https://dapper-kataifi-cd1e09.netlify.app/",
    repo: "https://github.com/rontysarkar/Boi-Bazar",
    icon: BookOpen,
},
];
