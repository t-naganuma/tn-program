import { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Navbar';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Header />
      <main className="flex-1 px-4 sm:px-0">{children}</main>
      <Footer />
    </div>
  );
}
