import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

type Role = {
  title: string;
  department: string;
  location: string;
};

const OPEN_ROLES: Role[] = [
  {
    title: "Senior ML Engineer",
    department: "Engineering",
    location: "Remote (US)",
  },
  {
    title: "Applied Scientist, LLMs",
    department: "Data Science",
    location: "Remote (EU)",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Hybrid — London",
  },
  {
    title: "Solutions Engineer",
    department: "Engineering",
    location: "New York, NY",
  },
  {
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "Remote (US)",
  },
];

const DEPARTMENT_STYLES: Record<string, string> = {
  Engineering: "border-indigo-400/30 bg-indigo-400/10 text-indigo-300",
  "Data Science": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
  Design: "border-purple-400/30 bg-purple-400/10 text-purple-300",
  Sales: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
};

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Careers"
        title="Build the AI systems that ship"
      />

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center text-lg text-gray-400">
        <p>
          We&apos;re a remote-first team spread across time zones, and we hire
          people who&apos;d rather write the postmortem than the pitch deck.
          Every engagement ends with something running in production, not a
          slide about what could be running in production — and that bias
          toward shipped, working systems shapes how we plan, review, and
          measure our own work.
        </p>
        <p>
          Rigor and kindness aren&apos;t in tension here. We push hard on
          evals, ablations, and design reviews, and we do it in a way that
          assumes good intent and leaves people better than we found them. If
          you want a place where careful engineering and decent behavior are
          both non-negotiable, you&apos;ll feel at home.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-4xl">
        <h3 className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-gray-500">
          Open roles
        </h3>
        <div className="space-y-4">
          {OPEN_ROLES.map((role) => (
            <GlassCard
              key={role.title}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-lg font-medium text-white">{role.title}</span>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
                    DEPARTMENT_STYLES[role.department] ??
                    "border-white/10 bg-white/5 text-gray-300"
                  }`}
                >
                  {role.department}
                </span>
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300">
                  {role.location}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
