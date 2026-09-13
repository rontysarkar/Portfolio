"use client";

import { useState } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";
import { EducationCard } from "@/components/education-card";
import { TEducationItem } from "@/types/types";
import { educationData } from "@/constant/education";

export function EducationSection({
  items = educationData,
}: {
  items?: TEducationItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="education"
      className="relative scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* soft purple glow behind section */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <header className="mb-8 animate-fade-up sm:mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
            <GraduationCap className="h-3.5 w-3.5 text-emerald-400" />
            Academic Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education
          </h2>
          <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
          <p className="mt-4 max-w-xl text-sm text-gray-400">
            Degrees, courses & continuous learning
          </p>
        </header>

        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <EducationCard
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
