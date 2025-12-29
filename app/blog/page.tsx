import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'blog',
  description: 'my blog posts.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">blog</h1>
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
              <p className="font-light text-sm text-nature-200 dark:text-nature-600 my-1">
                {post.publishedAt}
              </p>
              <p className="font-light text-nature-50 dark:text-nature-800">
                {post.summary}
              </p>
            </div>
            <hr className="border-nature-600 dark:border-nature-300" />
          </Link>
        ))}
    </section>
  );
}
