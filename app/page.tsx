import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Header />
      <main className="flex flex-1 flex-col"></main>
      <Footer />
    </div>
  );
}
