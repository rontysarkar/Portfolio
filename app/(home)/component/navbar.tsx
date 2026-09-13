
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function NewNavbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  // 🎯 Custom Scroll Function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActive(label);
    setOpen(false);

    // ID selector clean kora (#home string theke home alada kora)
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",  // Screen er vertically majhkane anbe
        inline: "center", // Screen er horizontally majhkane anbe
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-4">
      <nav className="flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0a0a0f]/80 px-3 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-4">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home", "Home")}
          className="flex items-center gap-2 pl-1 text-[15px] font-semibold tracking-tight text-white"
        >
          <span className="relative">
            Ronty Sarkar
            <span className="absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-emerald-400" />
          </span>
          <span className="text-base" aria-hidden>
            🧑‍💻
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {links.map((link) => {
            const isActive = active === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href, link.label)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300",
                  isActive
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="https://www.linkedin.com/in/rontysarkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/15 hover:text-[#0A66C2]"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/rontysarkar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>

          <button
            type="button"
            className="ml-0.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Links */}
      {open && (
        <div className="absolute left-3 right-3 top-[4.25rem] rounded-2xl border border-white/10 bg-[#0a0a0f]/95 p-2 shadow-2xl backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href, link.label)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-medium transition",
                active === link.label
                  ? "bg-white text-zinc-900"
                  : "text-zinc-300 hover:bg-white/5"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}





