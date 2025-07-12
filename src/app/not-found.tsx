// app/not-found.tsx

"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-[120px] font-extrabold text-gray-800 leading-none">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you are looking for might have been removed or is
        temporarily unavailable.
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
      >
        Go to Homepage
      </button>
    </div>
  );
}
