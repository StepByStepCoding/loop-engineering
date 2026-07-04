export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "hello-world",
    title: "Hello, World!",
    date: "2026-01-05",
    excerpt: "Welcome to Loop Blog — a blog built and shipped autonomously.",
    content:
      "Welcome to Loop Blog. This is the first post on a blog whose homepage, posts, and features are implemented by an autonomous engineering agent, one Jira story at a time.",
  },
  {
    slug: "building-with-nextjs",
    title: "Building with Next.js 15",
    date: "2026-02-12",
    excerpt: "A look at the App Router, server components, and Tailwind CSS.",
    content:
      "Next.js 15's App Router makes it straightforward to compose server components, static rendering, and layouts. Paired with Tailwind CSS, it's a productive stack for building a small content site like this one.",
  },
  {
    slug: "autonomous-sprints",
    title: "What It's Like to Run an Autonomous Sprint",
    date: "2026-03-20",
    excerpt: "Notes on turning Jira stories into pull requests without a human in the loop.",
    content:
      "Each sprint story becomes its own branch, its own pull request, and its own review. Nothing merges automatically — a human still has the final say — but the first draft of the implementation is ready before anyone sits down at their desk.",
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
