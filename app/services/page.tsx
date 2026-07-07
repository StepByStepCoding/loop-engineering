import type { Metadata } from "next";
import type { SVGProps } from "react";

export const metadata: Metadata = {
  title: "Services — NexaAI",
  description:
    "Explore NexaAI's AI consulting services: strategy, ML engineering, LLM integration, MLOps, data platforms, and applied research.",
};

function StrategyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v18M3 9h18M3 15h18" />
    </svg>
  );
}

function EngineeringIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  );
}

function LlmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    </svg>
  );
}

function MlopsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12"
      />
    </svg>
  );
}

function DataIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  );
}

function ResearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
      />
    </svg>
  );
}

const services = [
  {
    name: "AI Strategy & Roadmapping",
    description:
      "Identify high-leverage AI opportunities across your business and translate them into a prioritized, buildable roadmap.",
    Icon: StrategyIcon,
  },
  {
    name: "Applied ML Engineering",
    description:
      "Design, train, and productionize custom machine learning models tailored to your data and performance requirements.",
    Icon: EngineeringIcon,
  },
  {
    name: "LLM & Agent Integration",
    description:
      "Embed large language models and autonomous agents into your product with robust prompting, evaluation, and guardrails.",
    Icon: LlmIcon,
  },
  {
    name: "MLOps & Infrastructure",
    description:
      "Stand up reliable training, deployment, and monitoring pipelines so models keep performing long after launch.",
    Icon: MlopsIcon,
  },
  {
    name: "Data Platform Engineering",
    description:
      "Build the data pipelines, warehouses, and feature stores that make trustworthy AI possible at scale.",
    Icon: DataIcon,
  },
  {
    name: "Applied Research",
    description:
      "Tackle novel, high-risk problems with a dedicated research team — from feasibility studies to working prototypes.",
    Icon: ResearchIcon,
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-black px-6 py-32">
      <main className="flex w-full max-w-5xl flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="glass-card rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300">
            Our Services
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Everything you need to go from idea to AI in production
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            Six focused practice areas covering the full lifecycle of AI
            product development.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, description, Icon }) => (
            <div
              key={name}
              className="glass-card flex flex-col gap-4 rounded-2xl p-8 text-left"
            >
              <div className="glass-card flex h-12 w-12 items-center justify-center rounded-xl text-violet-300">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-zinc-50">{name}</h2>
              <p className="text-base leading-7 text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
