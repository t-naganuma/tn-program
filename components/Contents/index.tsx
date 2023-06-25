import { DateTime } from 'luxon';
import Link from 'next/link';
import { Blogs, Blog } from '@/types/blog/types';

type Props = {
  contents: Blogs;
};

export function Contents({ contents }: Props) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6">
      <ul className="mx-auto mt-6 grid w-full gap-6 md:grid-cols-2 md:gap-8">
        {contents.map((content: Blog) => {
          const publishedAt = DateTime.fromISO(content.publishedAt).toFormat(
            'yyyy/MM/dd'
          );
          return (
            <li
              key={content.id}
              className="w-full overflow-hidden rounded-xl bg-orange-200 shadow-sm transition-opacity duration-300 ease-in hover:opacity-80"
            >
              <Link className="block" href="#">
                <div className="px-6 py-4">
                  <p className="text-sm text-stone-500">tn-program</p>
                  <h2 className="mt-4 text-xl font-semibold text-stone-600">
                    {content.title}
                  </h2>
                  <div className="mt-6 flex h-full justify-end md:mt-10">
                    <time className="text-stone-500" dateTime={publishedAt}>
                      {publishedAt}
                    </time>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
