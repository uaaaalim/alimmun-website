"use client";

import Link from "next/link";
import {useState} from "react";

import {MorphIcon} from "morphicons/react";
import {Menu, X} from "lucide";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (!menuOpen) return;
  //
  //   const HTML = document.documentElement;
  //   const previousOverflow = HTML.style.overflow;
  //
  //   HTML.style.overflow = "hidden";
  //   HTML.scrollTo({top: 0})
  //
  //   return () => {
  //     HTML.style.overflow = previousOverflow;
  //   }
  // })

  return (
    <header className="sticky top-0 z-50 px-4 lg:px-10 py-6 bg-white w-full">
      <div className="flex max-w-6xl mx-auto w-full items-center gap-6 lg:gap-15 justify-between">
        <Link className="shrink-0 whitespace-nowrap text-xl font-bold duration-200 transition-colors hover:text-violet-600" href="/">
          Alim Mun
        </Link>
        <button
          type="button"
          className="flex size-11 shrink-0 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen(o => !o)}
        >
          <MorphIcon icon={menuOpen ? X : Menu} />
        </button>
        <nav
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-x-0 top-full flex flex-col items-center gap-2 overflow-hidden bg-white px-4 transition-all duration-300 motion-reduce:transition-none lg:static lg:flex-1 lg:max-h-none lg:flex-row lg:justify-between lg:gap-0 lg:p-0 lg:opacity-100 lg:visible lg:pointer-events-auto ${menuOpen ? 'max-h-64 py-5' : 'max-h-0 py-0 pointer-events-none'}`}
        >
          <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-2">
            <Link href="/projects" className="duration-200 transition-colors hover:text-violet-600">Projects</Link>
            <Link href="/gallery" className="duration-200 transition-colors hover:text-violet-600">Gallery</Link>
          </div>
          {/*<div className="flex gap-2 lg:gap-8">*/}
          {/*  <Link href="/dashboard" className="duration-200 transition-colors hover:text-violet-600">Server status</Link>*/}
          {/*</div>*/}
        </nav>
      </div>
    </header>
  )
}