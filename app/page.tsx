import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "AI specialists on staff" },
  { value: "98%", label: "Client retention rate" },
  { value: "12", label: "Countries served" },
];

const WHY_NEXAAI = [
  {
    title: "Enterprise-grade AI strategy",
    description:
      "We start with your business outcomes, not the hype cycle — mapping a pragmatic roadmap that ties AI investment directly to revenue, cost, and risk metrics your board already tracks.",
  },
  {
    title: "Full-stack ML engineering",
    description:
      "From data pipelines to fine-tuned models to production APIs, our engineers build and operate the entire stack, so pilots don't stall out before they ever reach your customers.",
  },
  {
    title: "Responsible AI governance",
    description:
      "Every system we ship comes with audit trails, bias testing, and human-in-the-loop safeguards baked in from day one — compliance isn't an afterthought, it's the foundation.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-widest text-indigo-300">
              AI Consulting Agency
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI consulting for teams that ship
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 sm:text-xl">
              NexaAI partners with ambitious product and engineering teams to design, build,
              and launch AI systems that hold up in production — not just in the demo. Strategy,
              engineering, and governance, delivered by one team.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:opacity-90 sm:w-auto"
              >
                Book a strategy call
              </Link>
              <Link
                href="/services"
                className="w-full rounded-full border border-white/15 bg-white/5 px-8 py-3 text-center text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
              >
                Explore services
              </Link>
            </div>
          </div>

          <div
            aria-hidden
            className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 animate-float rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl"
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <GlassCard key={stat.label} className="text-center">
                <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why NexaAI"
            title="Built for teams who need AI to actually work"
            description="We combine strategic clarity, senior engineering talent, and rigorous governance so your AI initiatives survive contact with production."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_NEXAAI.map((item) => (
              <GlassCard key={item.title}>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{item.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <GlassCard className="flex flex-col items-center gap-6 py-16 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to turn AI ambition into shipped product?
            </h2>
            <p className="max-w-xl text-gray-400">
              Tell us where you're headed. We'll map the fastest, safest path to get there —
              usually within one call.
            </p>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:opacity-90"
            >
              Book a strategy call
            </Link>
          </GlassCard>
        </div>
      </section>
    </>
  );
}
