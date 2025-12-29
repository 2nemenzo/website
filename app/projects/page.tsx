
import type { Metadata } from 'next';
import Link from 'next/link';
import { allProjects } from 'contentlayer/generated';
// import { GitHubIcon } from 'components/icons';
// import ViewCounter from './view-counter';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My projects.',
};

export default async function ProjectPage() {
  return (
    <section>
      <h1 className="fond-bold text-3xl font-serif mb-5">Projects</h1>
      {
        allProjects
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
          href={`/projects/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="font-bold font-serif">{post.title}</p>
            <p className="font-light text-sm text-neutral-400 dark:text-neutral-500 my-1">{post.publishedAt}</p>
            {/* <div className="flex flex-wrap">
            {
              post.keywords.split(',').map((keyword) => (
                <span className="bg-gray-200 rounded-full px-2 text-sm font-light text-gray-700 mr-2 mt-1" key={keyword}>{keyword}</span>

              ))
            }
            </div> */}
            <p className="font-light text-white dark:text-black">{post.summary}</p>
          </div>
          <hr/>
        </Link>
        ))
      }
    </section>
  )
}
