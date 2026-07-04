import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="border-b border-gray-200 py-6 last:border-b-0">
      <Link href={`/posts/${post.slug}`} className="group">
        <h2 className="text-xl font-semibold tracking-tight group-hover:underline">
          {post.title}
        </h2>
      </Link>
      <time dateTime={post.date} className="mt-1 block text-sm text-gray-500">
        {formattedDate}
      </time>
      <p className="mt-3 text-gray-600">{post.excerpt}</p>
    </article>
  );
}
