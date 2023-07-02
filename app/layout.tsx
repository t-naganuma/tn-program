import { Noto_Sans_JP } from '@next/font/google';
import { Metadata } from 'next';
import './globals.css';

const notoSansJp = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TNのプログラミングブログ',
  description:
    'TNのプログラミングブログ - Next.js, TypeScript, Tailwind CSSで作られています。',
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  );
}
