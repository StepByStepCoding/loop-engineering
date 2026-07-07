const team = [
  { name: "Avery Chen", role: "Founder & CEO" },
  { name: "Jordan Blake", role: "Head of Design" },
  { name: "Priya Nair", role: "Lead Engineer" },
  { name: "Marcus Lee", role: "Product Manager" },
  { name: "Sofia Rossi", role: "Client Success Lead" },
  { name: "Daniel Osei", role: "Operations Manager" },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50 text-center">
          Team
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-center">
          The people behind the work.
        </p>

        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 p-8 text-center dark:border-zinc-800"
            >
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-lg font-semibold text-white dark:bg-zinc-50 dark:text-black"
              >
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <h2 className="text-lg font-semibold text-black dark:text-zinc-50">
                {member.name}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.role}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
