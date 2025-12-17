"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Eye, Github, Linkedin } from "lucide-react";

type Project = {
  title: string;
  description?: string;
  repository?: string;
  url?: string;
  slug?: string;
};

type Props = {
  project: Project;
  views: number;
};

export const Header: React.FC<Props> = ({ project, views }) => {
  // If the project has a repository in the MDX frontmatter, use that.
  // Otherwise fall back to your main GitHub profile.
  const githubHref = project.repository
    ? `https://github.com/${project.repository}`
    : "https://github.com/manuelarceaguirre";

  // Global LinkedIn link – change this to your actual profile.
  const linkedinHref =
    "https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG/"; // <--- update this

  const formattedViews = Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(views ?? 0);

  return (
    <header className="mb-10 space-y-4">
      {/* Back link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-200 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to projects</span>
        </Link>
      </div>

      {/* Title + description */}
      <div className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-zinc-100 sm:text-4xl md:text-5xl">
          {project.title}
        </h1>
        {project.description && (
          <p className="max-w-2xl text-sm text-zinc-400">
            {project.description}
          </p>
        )}
      </div>

      {/* Meta row: views + GitHub + LinkedIn */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
        <span className="inline-flex items-center gap-1">
          <Eye className="h-4 w-4" />
          <span>{formattedViews}</span>
        </span>

        <Link
          href={githubHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-zinc-200 transition"
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </Link>

        <Link
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-zinc-200 transition"
        >
          <Linkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </Link>
      </div>
    </header>
  );
};
