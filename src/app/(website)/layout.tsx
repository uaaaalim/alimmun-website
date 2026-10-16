import React from "react";
import Link from "next/link";
import { SiTelegram, SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { ViewTransition } from "react";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col gap-5">
            <div className="flex-1">
                <ViewTransition name="page">
                    <main>{children}</main>
                </ViewTransition>
            </div>

            <footer className="w-full bg-white">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-[1fr_auto] lg:px-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">

                        <section className="flex max-w-sm flex-col gap-3 text-sm">
                            <h2 className="font-semibold">
                                A little about me
                            </h2>

                            <p className="text-zinc-600">
                                Hey, I&#39;m Alim. I write code, explore new ideas,
                                and turn some of them into projects.
                                This is my little corner of the internet.
                            </p>

                            <p className="text-zinc-500">
                                &copy; {new Date().getFullYear()} Alim Mun
                            </p>
                        </section>

                        <nav className="flex flex-col gap-3 text-sm">
                            <h2 className="font-semibold">Discover</h2>

                            <div className="flex flex-col items-start gap-1">
                                <Link
                                    href="/"
                                    className="transition-all duration-300 hover:text-violet-600 hover:ml-1"
                                >
                                    Main page
                                </Link>

                                <Link
                                    href="/projects"
                                    className="transition-all duration-300 hover:ml-1 hover:text-violet-600"
                                >
                                    My projects
                                </Link>

                                <Link
                                    href="/gallery"
                                    className="transition-all duration-300 hover:ml-1 hover:text-violet-600"
                                >
                                    My gallery
                                </Link>
                            </div>
                        </nav>

                        <nav className="flex flex-col gap-3 text-sm">
                            <h2 className="font-semibold">Technical part</h2>

                            <div className="flex flex-col items-start gap-1">
                                <Link
                                    href="https://ovhcloud.com/"
                                    target="_blank"
                                    className="transition-all duration-300 hover:ml-1 hover:text-violet-600"
                                >
                                    Hosting
                                </Link>

                                <Link
                                    href="/status"
                                    target="_blank"
                                    className="transition-all duration-300 hover:ml-1 hover:text-violet-600"
                                >
                                    Server status
                                </Link>
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-end gap-3 md:self-end">
                        <Link href="https://t.me/uaaaalim" target="_blank" className="transition-all duration-300 hover:mb-1">
                            <SiTelegram size={28} className="hover:text-cyan-500 transition-colors" />
                        </Link>

                        <Link href="https://github.com/uaaaalim" target="_blank">
                            <SiGithub size={28} className="hover:text-stone-500 transition-all duration-300 hover:mb-1" />
                        </Link>

                        <Link href="mailto:zhaba.v.kedah77@gmail.com">
                            <SiGmail size={28} className="hover:text-red-500 transition-all duration-300 hover:mb-1" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}