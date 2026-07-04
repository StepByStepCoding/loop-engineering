import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loop Blog",
  description: "A Next.js blog built autonomously by a Claude cloud agent via Loop Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4">
          <header className="border-b border-gray-200 py-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Loop Blog
            </Link>
          </header>
          <main className="flex-1 py-8">{children}</main>
          <footer className="border-t border-gray-200 py-6 text-sm text-gray-500">
            Built with Next.js.
          </footer>
        </div>
      </body>
    </html>
  );
}
