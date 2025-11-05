"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCV = pathname.startsWith("/cv");

  return (
    <header className="border-b border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white font-semibold">BH</span>
        </div>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li>
            <Link
              href="/"
              aria-current={isHome ? "page" : undefined}
              className={isHome
                ? "px-1 text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                : "px-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cv"
              aria-current={isCV ? "page" : undefined}
              className={isCV
                ? "px-1 text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400"
                : "px-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"}
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


