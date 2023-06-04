'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function NavbarItems() {
  return (
    <ul className="flex flex-col gap-y-8 md:flex-row md:justify-end md:gap-x-4 md:gap-y-0">
      <li>
        <Link
          href="/"
          className="rounded-lg px-3 py-2 font-semibold text-white transition-all duration-500 hover:bg-stone-600"
        >
          Home
        </Link>
      </li>
      <li>
        {/* TODO: Pageを作成したらリンクを変更する */}
        <Link
          href="/"
          className="rounded-lg px-3 py-2 font-semibold text-white transition-all duration-500 hover:bg-stone-600"
        >
          Posts
        </Link>
      </li>
      <li>
        {/* TODO: Pageを作成したらリンクを変更する */}
        <Link
          href="/"
          className="rounded-lg px-3 py-2 font-semibold text-white transition-all duration-500 hover:bg-stone-600"
        >
          Profile
        </Link>
      </li>
    </ul>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto w-full max-w-7xl py-6 sm:px-6 md:block md:px-4 lg:px-8">
      <div className="hidden md:block">
        <NavbarItems />
      </div>
      <div className="md:hidden">
        <div className="flex justify-end px-4 md:hidden">
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
            <span className="sr-only">メニューを開く</span>
            {isOpen ? (
              <FiX className="h-5 w-5 text-white" />
            ) : (
              <FiMenu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } ${'absolute top-16 w-screen bg-stone-700 p-4'}`}
        >
          <NavbarItems />
        </div>
      </div>
    </nav>
  );
}
