import { TEducationItem } from "@/types/types";

export const educationData: TEducationItem[] = [
  {
    id: "diploma-cse",
    title: "Diploma in Computer Science & Technology",
    subtitle: "Diploma",
    meta: [
      "2023 – Present",
      "Dhaka Institute of Technology (DIT)",
      "Undergraduate",
    ],
    description:
      "Pursuing a Diploma in Computer Science and Technology with a focus on core engineering concepts, practical technical skills, and academic coursework.",
    type: "degree",
    tags: ["DSA", "OOP", "DBMS", "Software Engineering"],
  },
  {
    id: "next-level-ai-software-engineering",
    title: "Next Level AI-Driven Software Engineering Bootcamp",
    subtitle: "Advanced Software Engineering ",
    meta: ["Running", "Programming Hero", "Advanced Bootcamp"],
    description:
      "Enrolled in an advanced software engineering program specializing in TypeScript, scalable backend architectures with PostgreSQL and Prisma ORM, and modern frontends using Next.js",
    type: "course",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Prisma ORM", "Node.js"],
    link: "https://next.programming-hero.com/",
  },
  {
    id: "cs-fundamentals-phitron",
    title: "CS Fundamentals With Phitron",
    subtitle: "Data Structures, Algorithms & Problem Solving",
    meta: ["Batch 7", "Phitron", "Completed"],
    description:
      "Mastered core Computer Science concepts including C++, Data Structures, Algorithms, OOP. Developed strong analytical skills with 290+ problems solved on Codeforces and achieved a 2-Star rating on CodeChef.",
    type: "course",
    tags: [
      "C++",
      "Data Structures",
      "Algorithms",
      "OOP",
      "CodeChef 2-Star",
      "Codeforces 290+ Solved",
      "Competitive Programming",
    ],
    // link: "https://phitron.io"
  },

  {
    id: "complete-web-dev-programming-hero",
    title: "Complete Web Development Course",
    subtitle: "Full Stack Development",
    meta: ["2024", "Programming Hero", "Professional Course"],
    description:
      "Completed an intensive full-stack web development program covering modern frontend and backend technologies. Built multiple real-world projects using industry best practices.",
    type: "course",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
];
