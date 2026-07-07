import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-black px-6 py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-gradient-slow absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-fuchsia-600/40 via-violet-600/30 to-transparent blur-3xl" />
        <div className="animate-gradient-slow-reverse absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tl from-cyan-500/30 via-blue-600/30 to-transparent blur-3xl" />
        <div className="animate-gradient-slow absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/20 blur-3xl" />
      </div>

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        <span className="glass-card rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300">
          AI Consulting for ambitious teams
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          Build the future with{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            AI-native
          </span>{" "}
          products
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          NexaAI partners with founders and enterprises to design, build, and
          scale AI-powered products — from strategy and prototyping to
          production-grade deployment.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex h-12 items-center justify-center rounded-full bg-zinc-50 px-8 text-base font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="glass-card flex h-12 items-center justify-center rounded-full px-8 text-base font-medium text-zinc-50 transition-colors hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </main>
    </div>
  );
}
