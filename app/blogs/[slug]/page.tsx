import DOMPurify from 'isomorphic-dompurify';
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
    </div>
  );
}
