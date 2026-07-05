import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Maya Okafor",
    role: "Founder & CEO",
    bio: "Former ML lead at a Series C fintech; obsessed with AI that ships, not just demos.",
    initials: "MO",
  },
  {
    name: "Daniel Cho",
    role: "Head of Engineering",
    bio: "Built real-time fraud systems processing millions of transactions a day.",
    initials: "DC",
  },
  {
    name: "Priya Raman",
    role: "Principal Data Scientist",
    bio: "PhD in NLP; leads our LLM evaluation and safety practice.",
    initials: "PR",
  },
  {
    name: "Lucas Ferreira",
    role: "Head of Design",
    bio: "Designs interfaces for systems humans actually trust.",
    initials: "LF",
  },
  {
    name: "Amara Osei",
    role: "VP of Client Success",
    bio: "Turns pilots into permanent, budgeted production systems.",
    initials: "AO",
  },
  {
    name: "Tomás Vidal",
    role: "MLOps Lead",
    bio: "Keeps every model we ship monitored, versioned, and reproducible.",
    initials: "TV",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Team"
        title="The people behind the work"
        description="A small, senior team of engineers, scientists, and operators who've shipped AI systems into production, not just into pitch decks."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member) => (
          <GlassCard key={member.name} className="flex flex-col items-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400 text-lg font-bold text-white">
              {member.initials}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">{member.name}</h3>
            <p className="mt-1 text-sm font-medium text-indigo-300">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">{member.bio}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
