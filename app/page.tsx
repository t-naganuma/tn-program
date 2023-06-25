import { createClient } from 'microcms-js-sdk';
import { Contents } from '@/components/Contents';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';
import { Blog } from '@/types/blog/types';

async function getContents() {
  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
    apiKey: process.env.MICROCMS_API_KEY || '',
  });

  const res = await client.getList<Blog>({
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
