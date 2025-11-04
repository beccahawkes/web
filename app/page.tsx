export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to Your Next.js App
        </h1>
        <p className="text-lg text-red-600 dark:text-gray-300">
          This is a React project using Next.js App Router, TypeScript, ESLint, and Tailwind CSS.
        </p>
        <div className="mt-8 p-6 bg-blue-500 text-white rounded-lg shadow-lg">
          <p className="text-sm">✨ Tailwind CSS is now configured and ready to use!</p>
        </div>
      </div>
    </main>
  )
}

