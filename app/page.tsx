import { Contents } from '@/components/Contents';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { cmsClient } from '@/lib/microcms';
import { Blog } from '@/types/blog/types';

async function getContents() {
  const res = await cmsClient.getList<Blog>({
    customRequestInit: {
      cache: 'no-cache',
    },
    endpoint: 'blogs',
  });

  return res.contents;
}

export default async function Home() {
  const contents = await getContents();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Header />
      <Contents contents={contents} />
      <Footer />
    </div>
  );
}
