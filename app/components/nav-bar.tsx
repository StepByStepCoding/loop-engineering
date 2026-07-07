'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-zinc-50">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-16">
        <Link href="/" className="font-semibold tracking-tight" onClick={() => setIsOpen(false)}>
          NexaAI
        </Link>

        <ul className="hidden gap-6 text-sm font-medium sm:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={
                  pathname === href
                    ? 'text-white'
                    : 'text-zinc-400 transition-colors hover:text-white'
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-zinc-50 sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 px-6 pb-4 text-sm font-medium sm:hidden">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={
                  pathname === href
                    ? 'block rounded-md px-2 py-2 text-white'
                    : 'block rounded-md px-2 py-2 text-zinc-400 transition-colors hover:text-white'
                }
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
