const caseStudies = [
  {
    name: "Northwind Retail",
    category: "E-commerce",
    summary:
      "Rebuilt a legacy storefront into a fast, headless commerce experience, cutting checkout time in half.",
  },
  {
    name: "Beacon Health",
    category: "Healthcare",
    summary:
      "Designed a patient portal that made appointment scheduling and records access self-service for the first time.",
  },
  {
    name: "Fernwood Logistics",
    category: "Operations",
    summary:
      "Built a real-time dispatch dashboard that cut manual routing work by 70% across three regional depots.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center">
          Case Studies
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-center">
          A look at a few of the projects we&apos;ve helped bring to life.
        </p>

        <div className="mt-16 grid w-full gap-6 sm:grid-cols-1">
          {caseStudies.map((study) => (
            <article
              key={study.name}
              className="rounded-2xl border border-zinc-200 p-8 dark:border-zinc-800"
            >
              <span className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {study.category}
              </span>
              <h2 className="mt-2 text-xl font-semibold text-black dark:text-zinc-50">
                {study.name}
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {study.summary}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
