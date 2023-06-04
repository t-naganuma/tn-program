import { FiGithub, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="mt-16 w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-12">
          <a
            href="https://github.com/t-naganuma"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-70"
          >
            <FiGithub className="h-6 w-6 text-2xl text-white" />
          </a>
          <a
            href="https://twitter.com/tkyngnm"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-300 hover:opacity-70"
          >
            <FiTwitter className="h-6 w-6 text-2xl text-white" />
          </a>
        </div>
        <div className="mt-6 flex justify-center">
          <p className="text-sm text-white">
            &copy; 2023 tn-program. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
