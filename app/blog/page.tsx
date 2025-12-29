import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on things.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="font-bold font-serif">{post.title}</p>
              <p className="font-light text-sm text-neutral-400 dark:text-neutral-500 my-1">
                {post.publishedAt}
              </p>
              <p className="font-light text-white dark:text-black">
                {post.summary}
              </p>
            </div>
            <hr />
          </Link>
        ))}
    </section>
  );
}
