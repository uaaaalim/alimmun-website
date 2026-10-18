"use client";

import Header from "@/components/layout/Header";

import Link from "next/link";
import {useRouter} from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <main className="w-full mt-20 flex flex-col gap-10 align-center">
        <div className="flex flex-col gap-3 md:gap-5 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Unfortunately,</h1>
          <h2 className="text-xl md:text-2xl">this page was not found!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg m-auto text-center">
          <button
            onClick={() => router.back()}
            className="sm:px-6 hover:cursor-pointer py-2 px-4 border-2 border-foreground transition-all hover:bg-foreground hover:text-stone-50 duration-200"
          >
            Return back
          </button>
          <Link
            className="sm:px-6 py-2 px-4 border-2 border-foreground transition-all hover:bg-foreground hover:text-stone-50 duration-200"
            href="/"
          >
            Go to main page
          </Link>
        </div>
      </main>
    </div>
  )
}