import { Navigation } from "../components/nav";

export default function LogPage() {
  return (
    <div className="relative pb-16">
      <Navigation />

      <main className="px-6 pt-20 mx-auto max-w-3xl lg:px-8 md:pt-24 lg:pt-32 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
            Build log
          </h1>
          <p className="text-sm text-zinc-400">
            Short, honest updates on what I&apos;m actually working on and learning.
            Not a CV, more like a running notebook.
          </p>
        </header>

        <section className="space-y-3 text-sm text-zinc-300">
          <h2 className="text-zinc-200 font-medium">This semester</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Iterating on the Cross-Border Route Optimizer (routes, time windows, cost model).</li>
            <li>Pushing the Manufacturing Cost Intelligence System toward something a CFO could test-drive.</li>
            <li>Building an investigation pipeline around extracting reliable data from messy academic tables.</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-zinc-300">
          <h2 className="text-zinc-200 font-medium">What I&apos;m trying to get better at</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-400">
            <li>Designing systems that real operators would actually use, not just toy models.</li>
            <li>Explaining my work in plain language without dumbing it down.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
