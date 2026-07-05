import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with stakeholder interviews, a full audit of your data and systems, and opportunity mapping across your business. The goal is to surface the highest-ROI use case and validate that it's technically feasible before a single line of code is written.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team defines the solution architecture and selects the right models for the job, whether that means fine-tuning, retrieval, or an off-the-shelf API. We build a clickable prototype and put it in front of real users to validate the experience before committing engineering resources.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We engineer the production system with the same rigor as any mission-critical software: automated evals, observability baked in from day one, and a CI/CD pipeline that lets your team ship changes safely and often.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Rollout happens in phases, starting with a limited cohort so we can catch issues early. We train your team to operate and extend the system, then stand by for a 90-day hypercare window before a clean handoff.",
  },
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Our Process"
        title="How we deliver"
        description="A proven four-step path from first conversation to production launch, built to de-risk every stage of your AI initiative."
      />

      <div className="relative mx-auto mt-20 max-w-3xl">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 via-purple-400 to-cyan-400 sm:left-8" />

        <div className="flex flex-col gap-10">
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex gap-6 sm:gap-8">
              <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 sm:h-16 sm:w-16 sm:text-base">
                {step.number}
              </div>
              <GlassCard className="flex-1">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-gray-400">{step.description}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
