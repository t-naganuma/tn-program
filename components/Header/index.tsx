import Link from 'next/link';
import React from 'react';

export function Header() {
  return (
    <header>
      <div className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <h1 className="text-lg font-semibold leading-6 text-white">
          <Link href="/">TNのプログラミングブログ</Link>
        </h1>
      </div>
    </header>
  );
}
