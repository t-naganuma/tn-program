import React from 'react';
import { MyImage } from '@/components/MyImage';

export default function ProfilePage() {
  return (
    <div className="mx-auto mt-6 w-full max-w-2xl">
      <div className="flex items-center justify-start gap-4">
        <MyImage alt="プロフィール画像" width={40} height={40} />
        <p className="text-xl font-bold text-white">T.N</p>
      </div>
      <div className="mt-8 text-white">
        <ul className="w-full">
          <li className="grid grid-cols-3 border-t border-gray-400 py-6">
            <div className="col-span-1">
              <p>Account</p>
            </div>
            <div className="col-span-2">
              <p>
                <a
                  href="https://twitter.com/tkyngnm"
                  className="text-blue-400 transition-colors duration-300 ease-in-out hover:text-blue-300"
                  target="_blank"
                >
                  Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/t-naganuma"
                  className="text-blue-400 transition-colors duration-300 ease-in-out hover:text-blue-300"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </div>
          </li>
          <li className="grid grid-cols-3 border-t border-gray-400 py-6">
            <div className="col-span-1">
              <p>Job</p>
            </div>
            <div className="col-span-2">
              <p>Front Engineer</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
