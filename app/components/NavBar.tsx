"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isCV = pathname.startsWith("/cv");
  const activeNavItemClass =
    "px-1 text-sage-800 font-semibold border-b-2 border-sage-700";
  const inactiveNavItemClass =
    "px-1 text-dgray-700 hover:text-dgray-900 transition-colors";

  return (
    <header className="border-b border-sage-300/60 bg-cream-50/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-sage-700 text-cream-50 font-semibold">
            BH
          </span>
        </div>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li>
            <Link
              href="/"
              aria-current={isHome ? "page" : undefined}
              className={isHome ? activeNavItemClass : inactiveNavItemClass}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/cv"
              aria-current={isCV ? "page" : undefined}
              className={isCV ? activeNavItemClass : inactiveNavItemClass}
            >
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
