import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Award,
  ChevronDown,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TEducationItem } from "@/types/types";


const typeIcon = {
  degree: GraduationCap,
  course: BookOpen,
  certification: Award,
};


export function EducationCard({
  item,
  isOpen,
  onToggle,
}: {
  item: TEducationItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = typeIcon[item.type];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out",
        isOpen
          ? "border-emerald-500/30 bg-[#0d0d12] shadow-[0_0_40px_-12px_rgba(16,185,129,0.25)]"
          : "border-white/8 bg-[#0a0a0f] hover:border-white/15 hover:bg-[#0d0d14]"
      )}
    >
      {/* subtle left accent when open */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-[3px] rounded-l-2xl transition-all duration-500",
          isOpen
            ? "bg-gradient-to-b from-emerald-400 via-emerald-500 to-purple-500 opacity-100"
            : "bg-white/10 opacity-0 group-hover:opacity-60"
        )}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-4 px-5 py-5 text-left sm:px-6 sm:py-5"
      >
        <div
          className={cn(
            "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-400",
            isOpen
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]"
              : "border-white/10 bg-white/5 text-zinc-400 group-hover:border-white/15 group-hover:text-zinc-300"
          )}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3
                className={cn(
                  "text-[15px] font-semibold leading-snug tracking-tight transition-colors duration-300 sm:text-base",
                  isOpen ? "text-white" : "text-zinc-100 group-hover:text-white"
                )}
              >
                {item.title}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-zinc-500 sm:text-[13px]">
                <span className="font-medium text-zinc-400">{item.subtitle}</span>
                {item.meta.map((m, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="text-zinc-700">|</span>
                    <span className="inline-flex items-center gap-1">
                      {i === 0 && (
                        <Calendar className="h-3 w-3 opacity-60" />
                      )}
                      {i === 1 && <MapPin className="h-3 w-3 opacity-60" />}
                      {m}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 pt-0.5">
              {item.link && (
                <span
                  className="rounded-lg p-1.5 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              )}
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-400",
                  isOpen
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-white/8 bg-white/[0.03] text-zinc-500 group-hover:border-white/12 group-hover:text-zinc-300"
                )}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-400 ease-out",
                    isOpen && "rotate-180"
                  )}
                />
              </span>
            </div>
          </div>
        </div>
      </button>

      {/* Expandable body */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/6 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
            <div className="ml-0 sm:ml-14">
              <p className="text-[13.5px] leading-relaxed text-zinc-400 sm:text-sm">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium tracking-wide text-zinc-400 transition-colors hover:border-emerald-500/30 hover:text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  View certificate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}