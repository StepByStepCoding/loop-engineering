import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const STATS = [
  { value: "120+", label: "Projects shipped" },
  { value: "40+", label: "AI specialists" },
  { value: "12", label: "Countries" },
  { value: "98%", label: "Client retention" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <SectionHeading
          eyebrow="About Us"
          title="We build AI that actually ships"
          description="NexaAI is a consulting agency for teams who are done with proof-of-concepts and ready for production."
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              NexaAI was founded in 2021 by a small group of machine learning engineers and
              product leads who had grown tired of watching promising AI initiatives die in the
              same place: a slide deck. We had each spent years inside larger organizations
              building demos that impressed stakeholders in a quarterly review and then quietly
              disappeared, starved of the infrastructure, data pipelines, and operational rigor
              needed to survive contact with real users.
            </p>
            <p>
              So we started NexaAI with a narrow, almost stubborn focus: only work that ends in a
              production system. No slideware, no throwaway notebooks, no six-month
              &ldquo;innovation sprints&rdquo; that quietly wind down. Every engagement we take on
              is scoped around a measurable outcome running in front of real customers, with the
              monitoring, evaluation, and on-call practices that any serious piece of software
              deserves.
            </p>
            <p>
              Today we partner with startups and enterprises across twelve countries, embedding
              small teams of engineers, applied researchers, and designers directly alongside our
              clients. We have shipped everything from customer-facing copilots to internal
              document automation to entirely new AI-native product lines, and we measure our own
              success the same way our clients do: by what stays live a year later.
            </p>
          </div>

          <div className="flex items-center">
            <GlassCard className="w-full">
              <p className="text-2xl font-medium italic leading-relaxed text-white sm:text-3xl">
                &ldquo;Our mission is to close the gap between AI research and AI in production —
                so that every model our partners build earns its keep in the real world, not just
                in a demo.&rdquo;
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <GlassCard key={stat.label} className="text-center">
              <div className="bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
