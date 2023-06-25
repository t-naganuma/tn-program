import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { cmsClient } from '@/lib/microcms';
import { Blog } from '@/types/blog/types';

type Props = {
  params: {
    slug: string;
  };
};

async function getContentFromParams({ params }: Props) {
  const res = await cmsClient.get<Blog>({
    endpoint: 'blogs',
    contentId: params.slug,
  });

  return res;
}

export default async function BlogPage({ params }: Props) {
  const blog = await getContentFromParams({ params });
  const cleanContent = DOMPurify.sanitize(blog.content);

  return (
    <div className="mx-auto mt-6 flex w-full max-w-2xl flex-1 flex-col">
      <article className="mt-8">
        <h1 className="text-3xl text-gray-300">{blog.title}</h1>
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
        </div>
      </article>
      <div className="mt-10 w-32">
        <Link
          href="/"
          className="block rounded-lg border border-stone-600 bg-stone-700 px-5 py-3 text-center text-sm text-gray-300 transition duration-200 ease-in-out hover:bg-stone-600 hover:text-gray-200"
        >
          一覧に戻る
        </Link>
      </div>
    </div>
  );
}
