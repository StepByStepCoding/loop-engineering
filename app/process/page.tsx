const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dig into your goals, users, and constraints to uncover what success actually looks like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn insights into concepts, prototypes, and a clear plan for what we're going to build.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the product in focused iterations, testing and refining along the way.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We ship, monitor, and support the release so it lands well and keeps improving.",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center">
          Our Process
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-center">
          How we take an idea from first conversation to finished product.
        </p>

        <ol className="mt-16 w-full max-w-md">
          {steps.map((step, index) => (
            <li key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-5 top-11 -bottom-1 w-px bg-zinc-200 dark:bg-zinc-800"
                />
              )}
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white dark:bg-zinc-50 dark:text-black">
                {step.number}
              </span>
              <div className="pt-1.5">
                <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                  {step.title}
                </h2>
                <p className="mt-2 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
