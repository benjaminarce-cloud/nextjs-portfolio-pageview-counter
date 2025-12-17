"use client";

import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
  views: number;
};

export const Header = ({ project, views }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  // Build the little action links (GitHub + optional Website)
  const links: { label: string; href: string }[] = [];

  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }

  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className={`sticky top-0 z-30 mb-10 border-b border-zinc-800 bg-black/70 backdrop-blur
      ${isIntersecting ? "" : "shadow-lg shadow-black/40"}`}
    >
      {/* Top bar: back, views, icons */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-4 pb-3 lg:px-0">
        <div className="flex items-center gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center text-xs font-medium text-zinc-400 hover:text-zinc-100"
          >
            <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to projects
          </Link>

          <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-[11px] font-medium text-zinc-400">
            <Eye className="h-3 w-3" />
            {Intl.NumberFormat("en-US", {
              notation: "compact",
            }).format(views)}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-100"
            >
              {link.label === "GitHub" && <Github className="h-4 w-4" />}
              {link.label === "Website" && (
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              )}
              <span>{link.label}</span>
            </Link>
          ))}

          {/* Personal LinkedIn for this project */}
          <Link
            href="https://www.linkedin.com/in/manuel-antonio-arce-aguirre/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* Big title block */}
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 pb-6 lg:px-0">
        <h1 className="text-3xl font-display font-semibold text-zinc-50 sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>
      </div>
    </header>
  );
};
