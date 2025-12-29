import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon, GitHubIcon } from 'components/icons';
import { name, avatar } from 'lib/info';

export default async function HomePage() {

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">about me</h1>
      <p className="my-5 max-w-[460px] text-nature-100 dark:text-nature-700">
        hello, i'm nathaniel! if you've happened upon my website, you're likely
        one of the following: a friend, a coworker, a recruiter, or someone who
        stumbled here by accident. there's not much here right now, but i hope
        that eventually there will be. nice to meet you!
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <div className="space-y-2 text-nature-200 dark:text-nature-600">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Nathaniel-Nemenzo"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            {`github`}
          </a>
          <Link href="/blog" className="flex items-center gap-2">
            <ArrowIcon />
            <p className="h-7">linkedin</p>
          </Link>
        </div>
      </div>

    </section>
  );
}
