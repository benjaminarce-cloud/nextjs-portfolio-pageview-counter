"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";

type Props = {
  project: {
    title: string;
    description?: string;
    repository?: string;
    url?: string;
  };
  views: number;
};

export const Header: React.FC<Props> = ({ project, views }) => {
  const formattedViews = Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(views ?? 0);

  const githubHref = project.repository
    ? `https://github.com/${project.repository}`
    : "https://github.com/manuelarceaguirre";

  return (
    <header className="sticky top-0 z-20 mb-10 border-b border-zinc-800 bg-black/80 backdrop-blur">
      {/* Top bar: back + meta */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 pt-4 pb-3 lg:px-0">
        {/* Back link */}
        <Link
          href="/projects"
          className="group inline-flex items-center text-xs font-medium text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to projects</span>
        </Link>

        {/* Views + External links */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span className="inline-flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1">
            <Eye className="h-3 w-3" />
            {formattedViews}
          </span>

          {/* GitHub (external) */}
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          {/* LinkedIn (external) */}
          <a
            href="https://www.linkedin.com/in/arcebenjamin/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Title block */}
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 pb-6 lg:px-0">
        <h1 className="text-3xl font-display font-semibold text-zinc-50 sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        {project.description && (
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>
        )}
      </div>
    </header>
  );
};
