import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-sm text-gray-400 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 via-purple-400 to-cyan-400" />
          <span>&copy; {new Date().getFullYear()} NexaAI. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/careers" className="hover:text-white">Careers</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
