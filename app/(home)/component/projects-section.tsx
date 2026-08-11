/* eslint-disable react/no-unescaped-entities */
"use client";

import { PreviewPanel } from "@/components/home/preview-panel";
import { projects } from "@/constant/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [animKey, setAnimKey] = useState(0);

  const active = projects.find((p) => p.id === activeId)!;

  const handleSelect = (id: number) => {
    if (id === activeId) return;
    setActiveId(id);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-black py-24 "
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="relative ">
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Projects
          </h2>
          <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500" />
          <p className="mt-4 max-w-xl text-sm text-gray-400">
            A selection of projects I've built. Pick one from the list to see a
            live preview on the right.
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-stretch lg:gap-10">
          <div className="flex h-full flex-col justify-between gap-3">
            {projects.map((p) => {
              const isActive = p.id === activeId;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  aria-pressed={isActive}
                  className={`group relative rounded-xl border px-5 py-4 text-left transition-all duration-300 ease-out ${
                    isActive
                      ? "border-emerald-400/40 bg-white/[0.06]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-full bg-gradient-to-b from-emerald-400 to-violet-500 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                        isActive
                          ? "border-emerald-400/30 bg-emerald-400/5"
                          : "border-white/10 bg-white/[0.03] group-hover:border-white/20"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? "text-emerald-400"
                            : "text-gray-400 group-hover:text-gray-200"
                        }
                      />
                    </span>
                    <div className="flex flex-1 items-center justify-between gap-2">
                      <h3
                        className={`font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className={`shrink-0 transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 text-emerald-400 opacity-100"
                            : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  </div>

                  <p className="mt-1.5 line-clamp-2 text-xs text-gray-500">
                    {p.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div
            key={animKey}
            className="h-full min-h-0 animate-[fadeSlideIn_0.4s_ease-out]"
          >
            <PreviewPanel project={active} />
          </div>
        </div>

        <div className="lg:hidden">
          <div className="grid grid-cols-3 gap-2.5">
            {projects.map((p) => {
              const isActive = p.id === activeId;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  aria-pressed={isActive}
                  className={`flex flex-col items-center gap-2 rounded-xl border px-1.5 py-3 text-center transition-all duration-300 ${
                    isActive
                      ? "border-emerald-400/40 bg-white/[0.06]"
                      : "border-white/[0.06] bg-white/[0.02] active:scale-[0.97]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-300 ${
                      isActive
                        ? "border-emerald-400/30 bg-emerald-400/5"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        isActive ? "text-emerald-400" : "text-gray-400"
                      }
                    />
                  </span>
                  <span
                    className={`text-[11px] font-medium leading-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {p.short}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            key={animKey}
            className="mt-4 animate-[fadeSlideIn_0.4s_ease-out]"
          >
            <PreviewPanel project={active} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
