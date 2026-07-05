import { ReactNode } from "react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
};

const SERVICES: Service[] = [
  {
    title: "AI Strategy & Roadmapping",
    description:
      "We work with leadership teams to cut through the hype, identify the highest-ROI AI opportunities in your business, and sequence a delivery roadmap your engineers can actually execute.",
    gradient: "from-indigo-500 to-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M14.5 9.5 12.8 13l-3.3 1.7 1.7-3.3 3.3-1.9Z" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Custom LLM Applications",
    description:
      "From retrieval-augmented copilots to multi-step agentic workflows, we design and ship production LLM applications that hold up under real users and real edge cases.",
    gradient: "from-purple-500 to-fuchsia-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H10l-4.2 3.4a.5.5 0 0 1-.8-.4V15h-.5A2.5 2.5 0 0 1 2 12.5"/>
        <path d="M9 9.5h6M9 12h3.5" />
      </svg>
    ),
  },
  {
    title: "Data & MLOps Infrastructure",
    description:
      "We build the unglamorous foundations that make AI reliable: ingestion pipelines, feature stores, model registries, and CI/CD that lets you retrain and redeploy with confidence.",
    gradient: "from-cyan-400 to-blue-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="4" y="4" width="16" height="4.5" rx="1.2" />
        <rect x="4" y="10.75" width="16" height="4.5" rx="1.2" />
        <rect x="4" y="17.5" width="16" height="2.5" rx="1.1" />
        <path d="M8 6.25h.01M8 13h.01" />
      </svg>
    ),
  },
  {
    title: "Computer Vision Solutions",
    description:
      "We build vision systems that see clearly in production — automated defect detection on the line, visual search for catalogs, and models deployed to edge devices or the cloud.",
    gradient: "from-emerald-400 to-cyan-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="2.75" />
      </svg>
    ),
  },
  {
    title: "Conversational AI & Chatbots",
    description:
      "We design enterprise-grade assistants with the guardrails, tone, and escalation paths your support and sales teams need to trust them with real customers.",
    gradient: "from-amber-400 to-purple-500",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3.5 8.5A3 3 0 0 1 6.5 5.5h6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H9l-3.2 2.6a.4.4 0 0 1-.65-.31V14.5a3 3 0 0 1-1.65-2.68v-3.3Z" />
        <path d="M15.5 8h1a3 3 0 0 1 3 3v2.9a2.6 2.6 0 0 1-1.4 2.3v1.6a.35.35 0 0 1-.57.27L15.8 16.5" />
      </svg>
    ),
  },
  {
    title: "AI Governance & Ethics",
    description:
      "We help you deploy AI you can defend: risk and bias assessments, ongoing model monitoring, and responsible-AI frameworks that satisfy regulators and stakeholders alike.",
    gradient: "from-indigo-400 to-emerald-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 3.5 19 6.3v5.4c0 4.4-2.9 7.6-7 8.8-4.1-1.2-7-4.4-7-8.8V6.3L12 3.5Z" />
        <path d="M9 12.2l2 2 4-4.3" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What we do"
          description="Six focused practices that take AI initiatives from idea to production, backed by engineers who have shipped them before."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <GlassCard key={service.title}>
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg shadow-black/20`}
              >
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
