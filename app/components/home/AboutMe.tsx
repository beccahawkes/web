"use client";

import { useRouter } from "next/navigation";

export default function AboutMe() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 max-w-[600px]">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
        Welcome
      </h1>
      <p className="text-lg text-gray-600">
        Thanks for visiting. My name is Becca and I am a senior full-stack
        software engineer with over 7 years of experience building efficient,
        user-centric web applications.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          className="px-4 py-2 rounded-md bg-sage-700 text-white text-sm font-medium shadow hover:bg-sage-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={() => router.push("/cv")}
        >
          See my CV
        </button>
      </div>
    </div>
  );
}
