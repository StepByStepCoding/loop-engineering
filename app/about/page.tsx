import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — NexaAI",
  description:
    "Learn about NexaAI's story, mission, and the impact we've delivered for our clients.",
};

const stats = [
  { label: "AI products shipped", value: "40+" },
  { label: "Enterprise clients", value: "25+" },
  { label: "Engineers & researchers", value: "60+" },
  { label: "Avg. time to production", value: "8 wks" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-black px-6 py-32">
      <main className="flex w-full max-w-4xl flex-col items-center gap-20 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="glass-card rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300">
            Our Story
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Built by engineers who shipped AI before it was easy
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            NexaAI started as a small team of machine learning engineers
            frustrated by how many AI projects stalled in slide decks. We
            founded the agency to close the gap between research and
            production — helping teams turn promising models into reliable,
            revenue-generating products.
          </p>
        </div>

        <div className="glass-card flex flex-col gap-6 rounded-2xl p-8 text-left sm:p-10">
          <h2 className="text-2xl font-semibold text-zinc-50">
            Our Mission
          </h2>
          <p className="text-lg leading-8 text-zinc-400">
            To make world-class AI engineering accessible to every ambitious
            team — not just the companies that can afford an in-house
            research lab. We pair deep technical expertise with a bias
            toward shipping, so our partners see real impact in weeks, not
            years.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card flex flex-col items-center gap-2 rounded-2xl px-4 py-8"
            >
              <span className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-zinc-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
