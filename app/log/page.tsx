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
    date: "2025-06-15",
    title: "Cross-Border Fleet Optimizer actually starts working",
    summary:
      "First real ‘systems’ project: turning a whiteboard-style Laredo dispatch problem into a Python tool that plans better routes than I would by hand.",
    details: [
      "Got the first version of the optimizer running with straight-line distances and basic capacity and time-window constraints. It worked on paper but felt fake for real logistics.",
      "Biggest early headache: wrestling with OR-Tools’ routing model. I kept wiring callbacks wrong and ended up with routes that technically ‘solved’ but made no real-world sense.",
      "Hooked up a local OSRM container so Texas routes use real road travel times. That was a whole journey of Docker image pulls, port issues, and matching city coordinates so OSRM didn’t just say ‘no route’.",
      "First time the model chose a longer route in kilometers but cheaper in total cost (driver time + fuel) was the moment it stopped feeling like a school assignment and more like a tiny real tool.",
    ],
    tags: ["logistics", "python", "optimization"],
  },
  {
    date: "2025-07-20",
    title: "Manufacturing Cost Intelligence System becomes a real thinking tool",
    summary:
      "Took the idea of ‘flight simulator for manufacturing decisions’ and pushed it far enough that you can actually feel portfolio-level impact in a slider move.",
    details: [
      "Built the first version of the P&L simulator that ties together BOM data, cost drivers, and a simple demand model. Streamlit made it easy to iterate, but it was very tempting to keep adding sliders with no structure.",
      "Hit a wall when I mixed in too much logic directly into the UI. Refactored the whole thing so `/app/core` holds the real brain and Streamlit is just the face. That hurt for a day but made everything cleaner.",
      "Prompt engineering for the AI ‘strategist’ took several tries. Early versions just rephrased charts (“costs increased because inputs increased”). I had to explicitly feed feasibility scores and tell it what *not* to say to get something that sounded like a junior consultant instead of a narrator.",
      "Learned the hard way that static CSVs are both a blessing and a limitation: great for controlled experiments, bad if you pretend it’s production-ready. Accepted that this version is a thinking tool, not an ERP replacement.",
    ],
    tags: ["manufacturing", "analytics", "streamlit"],
  },
  {
    date: "2025-11-10",
    title: "Thesis: from ‘I want to do semiconductors’ to a real chokepoint model",
    summary:
      "Locked in the CoWoS/HBM chokepoint as the core of the thesis and started turning frustration with the literature into a concrete tri-objective model.",
    details: [
      "Spent a lot of time stuck at the ‘topic fog’ stage: I knew I wanted semiconductors + resilience + climate, but everything sounded either too generic or too impossible to execute as a student.",
      "Kept running into papers that ended with some version of ‘firms should share more data and collaborate across the chain’ as the big conclusion. It felt unrealistic for semiconductors and honestly lazy as a final recommendation.",
      "The turning point was deciding to **bake that disagreement into the thesis**: assume no magical cross-firm data sharing, and focus on what a single firm can control at the CoWoS/HBM stage.",
      "Started drafting the formal structure: sets, decision variables, tri-objective function (cost, resilience, carbon), and a simulation layer for disruption scenarios. The math itself is fine; the real curve has been understanding which modeling choices are honest vs just convenient.",
    ],
    tags: ["thesis", "semiconductors", "research"],
  },
  {
    date: "2025-12-05",
    title: "LATAM Inventory Health Dashboard finally stops breaking",
    summary:
      "Built a Power BI dashboard for the LATAM supply chain team that compares safety stock vs on-hand stock and classifies each material–country pair as green / yellow / red.",
    details: [
      "Redid the Power BI model multiple times after the DAX logic turned into spaghetti. At one point, every new measure felt like a patch on top of another patch.",
      "Ran into a nasty issue where different Incorta reports used slightly different material codes, so the joins silently failed and comparisons made no sense. Had to design a ‘family’ mapping to reconcile codes with formats like `***-***-***` vs `***-**`.",
      "The planning for the material-code mapping was not glamorous: lots of manual checking, pattern spotting, and making sure a single bad slash didn’t break the lookup.",
      "Power Automate turned out to be surprisingly fragile. Small changes in conditions or dynamic content broke the flow that takes the daily Incorta email and pushes files into SharePoint. Debugging was just: edit, wait for the next run, hope it doesn’t silently die.",
      "The payoff: the team now talks in terms of “reds” and “yellows” instead of screenshotting spreadsheets. That alone made the pain worth it.",
    ],
    tags: ["powerbi", "supply-chain", "automation"],
  },
  {
    date: "2025-12-27",
    title: "This site: turning a portfolio into something honest and alive",
    summary:
      "Built this site on Next.js + Vercel, not as a glossy brochure, but as a place to be honest about projects, what broke, and what I’m learning.",
    details: [
      "Big recurring confusion: Vercel vs GitHub vs my brain. More than once I was clicking ‘Visit’ on an old deployment and assuming the code hadn’t updated, when in reality I was just on a stale URL.",
      "Ran into weird ‘not reflecting’ moments that ended up being MDX issues: a couple of characters and math-y formatting broke the content build, so Vercel silently rolled back. Learned to keep MDX clean and watch the build logs instead of assuming it’s magic.",
      "Had to get comfortable with the ‘projects as conversations’ tone: these pages are not pitch decks. They’re me talking through what I tried, what worked, what was ugly, and then giving a technical appendix for people who care about the plumbing.",
      "The Log you’re reading now exists because I didn’t want a dead portfolio. This is the running timeline of how the Cross-Border optimizer, the manufacturing system, the thesis, the dashboard, and this very site evolved.",
    ],
    tags: ["meta", "portfolio", "vercel"],
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
            context behind the clean project cards.
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
