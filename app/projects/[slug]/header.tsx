"use client";

import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };
  views: number;
};

export const Header: React.FC<Props> = ({ project, views }) => {
  const githubHref = project.repository
    ? `https://github.com/${project.repository}`
    : "https://github.com/benjaminarce-cloud";

  const linkedinHref =
    "www.linkedin.com/in/arcebenjamin"; // change this

  return (
    <header className="relative mb-8 border-b border-zinc-800 pb-6">
      <div className="flex items-center justify-between gap-4">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-xs text-zinc-400 hover:text-zinc-100 transition"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to projects
        </Link>

        {/* Views + icons */}
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="inline-flex items-center gap-1 text-xs">
            <Eye className="h-4 w-4" />
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              views ?? 0,
            )}
          </span>

          <Link
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs hover:text-zinc-100"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>

          <Link
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs hover:text-zinc-100"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
        </div>
      </div>

      {/* Title + description */}
      <div className="mt-6 space-y-2">
        <h1 className="text-3xl font-display font-bold text-zinc-100 sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-sm text-zinc-400">{project.description}</p>
      </div>
    </header>
  );
};
