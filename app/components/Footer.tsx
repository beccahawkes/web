export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200/60 dark:border-gray-700/60 bg-white/70 dark:bg-gray-900/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Becca Hawkes</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/becca-hawkes-a509b7123/"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H6.16V9.86h2.18v8.48ZM7.25 8.8a1.26 1.26 0 1 1 0-2.52 1.26 1.26 0 0 1 0 2.52Zm11.09 9.54h-2.17v-4.47c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.16-1.72 2.37v4.55h-2.17V9.86h2.08v1.16h.03c.29-.55 1-1.13 2.06-1.13 2.21 0 2.62 1.46 2.62 3.35v5.1Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}


