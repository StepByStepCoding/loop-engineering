import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

type Article = {
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

const ARTICLES: Article[] = [
  {
    tag: "LLMs",
    title: "Why most RAG pilots never reach production",
    excerpt:
      "Retrieval-augmented generation demos are easy to ship and hard to trust. We break down the evaluation gaps, data-freshness traps, and ownership questions that quietly kill most pilots before launch.",
    date: "January 14, 2026",
    readTime: "7 min read",
  },
  {
    tag: "Ethics",
    title: "A practical framework for AI governance in regulated industries",
    excerpt:
      "Compliance teams don't need another principles document — they need a repeatable review process. Here's the four-gate framework we use with clients in healthcare and financial services.",
    date: "February 3, 2026",
    readTime: "9 min read",
  },
  {
    tag: "MLOps",
    title: "The MLOps stack we'd build in 2026",
    excerpt:
      "Feature stores, eval pipelines, and model registries have all matured. If we were starting from a blank slate today, here's the exact stack we'd choose and why we'd skip half the tools we used in 2023.",
    date: "March 11, 2026",
    readTime: "11 min read",
  },
  {
    tag: "Strategy",
    title: "How to scope an AI project so it actually ships",
    excerpt:
      "Most failed AI initiatives fail at the scoping stage, not the modeling stage. A short guide to writing a project brief that forces clarity on data, success metrics, and the human in the loop.",
    date: "April 2, 2026",
    readTime: "6 min read",
  },
  {
    tag: "LLMs",
    title: "Evaluating LLM agents: what to measure beyond accuracy",
    excerpt:
      "Task success rate tells you almost nothing about whether an agent is safe to deploy. We walk through the metrics we track for tool-use reliability, cost per resolution, and graceful failure.",
    date: "May 19, 2026",
    readTime: "8 min read",
  },
  {
    tag: "Computer Vision",
    title: "Computer vision on the edge: lessons from a manufacturing rollout",
    excerpt:
      "Deploying inspection models on factory-floor hardware surfaces problems that never show up in the lab. Notes from a year spent shipping edge CV across twelve production lines.",
    date: "June 8, 2026",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Blog & Insights"
        title="Field notes from real deployments"
        description="Practical, opinionated writing on shipping AI systems — from the teams building them alongside our clients."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => (
          <GlassCard key={article.title} className="flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-200">
                {article.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{article.excerpt}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
