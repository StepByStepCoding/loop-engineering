import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Loop Blog`,
    description: post.excerpt,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <Link href="/" className="text-sm text-gray-500 hover:underline">
        ← Back to all posts
      </Link>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{post.title}</h1>
      <time dateTime={post.date} className="mt-2 block text-sm text-gray-500">
        {formattedDate}
      </time>
      <p className="mt-6 leading-relaxed text-gray-700">{post.content}</p>
    </article>
  );
}
