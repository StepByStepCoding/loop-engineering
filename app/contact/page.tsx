import type { Metadata } from "next";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact — NexaAI",
  description:
    "Get in touch with NexaAI. Find our office address, email, phone, and social links, or say hello about your next AI project.",
};

const SOCIAL_LINKS = [
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4l7.5 9.5L4.5 20H7l5.5-5.9L17 20h3l-7.8-9.9L19.5 4H17l-5 5.4L8 4H4z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
        <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
        <circle cx="7.5" cy="7" r="0.75" fill="currentColor" stroke="none" />
        <path d="M11 16.5v-4a2 2 0 0 1 4 0v4" />
        <line x1="11" y1="10" x2="11" y2="16.5" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5a3.5 3.5 0 0 0-1-2.5 3.3 3.3 0 0 0-.1-2.5s-.9-.3-2.9 1a10 10 0 0 0-5 0c-2-1.3-2.9-1-2.9-1a3.3 3.3 0 0 0-.1 2.5 3.5 3.5 0 0 0-1 2.5c0 3.5 2 4.3 4 4.5-.4.4-.5.9-.5 1.5V19" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something that ships"
        description="Whether you're scoping a new AI product or need a second opinion on an existing one, our team usually responds within one business day."
      />

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <GlassCard className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">Our office</h3>
            <p className="mt-3 text-gray-400">
              NexaAI HQ
              <br />
              148 Lafayette St, Floor 4
              <br />
              New York, NY 10013
            </p>

            <div className="mt-8 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
                <a
                  href="mailto:hello@nexaai.com"
                  className="text-lg font-medium text-white transition hover:text-indigo-300"
                >
                  hello@nexaai.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">Phone</p>
                <a
                  href="tel:+12125550142"
                  className="text-lg font-medium text-white transition hover:text-indigo-300"
                >
                  +1 (212) 555-0142
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">Follow us</p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="text-xl font-semibold text-white">Find us</h3>
          <p className="mt-3 text-gray-400">
            Drop by our Lower Manhattan studio for a coffee and a whiteboard session — by
            appointment.
          </p>
          <div className="mt-6 flex aspect-video items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-400/10">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.25" />
              </svg>
              <span className="text-sm font-medium">Map preview</span>
              <span className="text-xs text-gray-500">Interactive map coming soon</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
