import { Project } from "@/types/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

export function PreviewPanel({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
      <div className="relative aspect-video  min-h-0 overflow-hidden lg:aspect-auto lg:flex-1">
        <Image
          src={project.image}
          alt={project.title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/40 backdrop-blur">
          <Icon size={18} className="text-emerald-400" />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{project.desc}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex flex-col gap-1"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <ExternalLink size={15} />
              Live Preview
            </span>
            <span className="h-[3px] w-full origin-left scale-x-100 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500 transition-transform duration-300 group-hover/btn:scale-x-0" />
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex flex-col gap-1"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <GithubIcon className="h-[15px] w-[15px]" />
              Repository
            </span>
            <span className="h-[3px] w-full origin-left scale-x-100 rounded-full bg-gradient-to-r from-emerald-400 to-violet-500 transition-transform duration-300 group-hover/btn:scale-x-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
