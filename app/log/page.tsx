// app/log/page.tsx
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

type LogItem = {
  date: string;
  title: string;
  summary: string;
  details: string[];
  tags?: string[];
};

const logItems: LogItem[] = [
  {
    date: "2025-12-27",
    title: "Locking in the CoWoS/HBM thesis spine",
    summary:
      "Started turning the semiconductor chokepoint idea into a real thesis: intro drafted, lit review skeleton, and research questions that don’t feel like fluff.",
    details: [
      "Drafted the introduction for: “Choke Point: A Tri-Objective Simulation–Optimization Model of the Resilience–Decarbonization Trade-off at the CoWoS/HBM Packaging Stage of the Global Semiconductor Supply Chain.”",
      "Mapped the three core literature pillars: resilience modeling, decarbonization + carbon pricing, and semiconductor-specific resilience (Ramírez & Le, CSET, Wu, etc.).",
      "Locked three main research questions around the cost–resilience–carbon Pareto frontier and which levers move you along it (regional capacity split, safety capacity, transport modes).",
    ],
    tags: ["thesis", "semiconductors", "research"],
  },
  {
    date: "2025-12-20",
    title: "Cross-Border Fleet Optimizer: from toy to something I’d actually use",
    summary:
      "Cleaned up the route optimizer so it behaves more like a tool and less like a school project.",
    details: [
      "Refactored the CLI to run off a single `scenario_input.csv`, which makes testing scenarios feel like changing a config instead of clicking through a wizard.",
      "Hooked OSRM into the pipeline so Texas routes use real road distances and times; Mexico still falls back to straight-line distance (for now).",
      "Verified that the cost model actually picks non-obvious but cheaper routes when driver time is more expensive than fuel.",
    ],
    tags: ["logistics", "optimization", "python"],
  },
  {
    date: "2025-12-15",
    title: "Inventory Health Dashboard for LATAM goes from idea to daily habit",
    summary:
      "Wired together a daily Incorta export, Power Automate, SharePoint, and Power BI so the LATAM team can actually see where inventory risk is.",
    details: [
      "Set up a Power Automate flow to catch the daily Incorta email and drop attachments into a structured SharePoint folder.",
      "Built a Power BI model that compares on-hand stock vs safety stock and classifies each material–country pair as green / yellow / red.",
      "First round of feedback from the team: they started talking about “reds” and “yellows” instead of forwarding screenshots of spreadsheets.",
    ],
    tags: ["powerbi", "supply-chain", "automation"],
  },
  {
    date: "2025-12-10",
    title: "Reframing this site as a honest lab notebook, not a brochure",
    summary:
      "Decided this site should read more like a conversation and less like a LinkedIn summary.",
    details: [
      "Rewrote project pages to include three layers: brutally honest story, what actually worked / broke, and a technical appendix for people who care about the plumbing.",
      "Added this Log as a lightweight place to track what I’m actually doing, not just what is ‘finished’ enough to show as a project.",
      "Started treating each update as a mini commit to the long-term story (MIT, process engineering, and semi supply chains).",
    ],
    tags: ["meta", "portfolio"],
  },
];

export default function LogPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-10 max-w-4xl lg:px-8 md:pt-24 lg:pt-28">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Log
          </h1>
          <p className="text-sm text-zinc-400 sm:text-base leading-relaxed">
            This isn&apos;t a polished blog. It&apos;s more like a changelog of what I&apos;m
            actually working on: research, side projects, and the occasional
            “I finally wired this thing correctly” moment. Think of it as the
            context behind the nice, clean project cards.
          </p>
        </header>

        <div className="w-full h-px bg-zinc-800" />

        {/* Entries */}
        <div className="space-y-6">
          {logItems.map((item) => (
            <Card key={item.date}>
              <article className="p-4 md:p-6 space-y-3">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {item.title}
                  </h2>
                  <time
                    className="text-xs text-zinc-500 whitespace-nowrap"
                    dateTime={item.date}
                  >
                    {new Date(item.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </time>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 text-xs">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {item.summary}
                </p>

                <ul className="mt-2 space-y-1.5 text-sm text-zinc-400">
                  {item.details.map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-zinc-500 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
