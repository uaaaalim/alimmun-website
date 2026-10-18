"use client";

import {Circle, X, Link as LucideLink} from "lucide-react";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProject == null) return;

    const HTML = document.documentElement;
    const previousOverflow = HTML.style.overflow;

    HTML.style.overflow = "hidden";

    return () => {
      HTML.style.overflow = previousOverflow;
    }
  })

  const projects = [
    {
      name: 'Alim Mun\'s Website',
      short_description: 'An open-source website about me and my projects history (active and inactive). ' +
        'Written on NextJS with purpose to learn web development.',
      stack_used: ['NextJS', 'Javascript', 'Typescript', 'Postgres', 'Debian', 'Docker'],
      status: 'active',
      years: ['2026'],
      source_code: 'https://github.com/uaaaalim/alimmun-website',
      demonstrate_link: 'https://alimmun.com/'
    },
    {
      name: 'Fitness Telegram bot',
      short_description: 'An open-source Telegram bot (order) tells the customer about coach\'s experience, ' +
        'training rewards and program, with interactive menu and survey to start trains.',
      stack_used: ['Python', 'Aiogram', 'Postgres', 'SqlAlchemy', 'Debian'],
      years: ['2026'],
      status: 'active',
      source_code: 'https://github.com/uaaaalim/bfit_bot',
      demonstrate_link: 'https://t.me/bfit360_bot'
    },
    {
      name: 'Jamy Notificator Bot',
      short_description: 'A Telegram Bot which sends notifications to subscribers about new streams on Youtube or Twitch ' +
        'with clever waiting for second source stream logic (order).',
      stack_used: ['Python', 'Aiogram', 'Postgres', 'SqlAlchemy', 'Ubuntu'],
      years: ['2026'],
      status: 'active',
      source_code: null,
      demonstrate_link: "https://t.me/jamynotifies_bot"
    },
    {
      name: 'News checker bot',
      short_description: 'An open-source Telegram bot (ICT project) which verifies the veracity of information: ' +
        'news, facts, rumors, and answers on questions.',
      stack_used: ['Python', 'Aiogram', 'Debian'],
      years: ['2026'],
      status: 'suspended',
      source_code: 'https://github.com/uaaaalim/news_checker',
      demonstrate_link: null
    },
    {
      name: 'JamyOne Discord Bot',
      short_description: 'A Discord Bot for a single server which is multitool containing moderation and ' +
        'auto-moderation, voice-channel and roles management (order).',
      stack_used: ['Java', 'JDA', 'Postgres', 'Hibernate', 'Ubuntu'],
      years: ['2025-2026'],
      status: 'active',
      source_code: null,
      demonstrate_link: null
    },
    {
      name: 'Elysta Discord bot',
      short_description: 'A private Discord bot for Discord servers which contained local RPG Economy with fun and ' +
        'actions (On close there were more than 1000 servers and 500k users).',
      stack_used: ['Python', 'Disnake', 'Postgres'],
      years: ['2021-2022'],
      status: 'abandoned',
      source_code: null,
      demonstrate_link: null,
    },
    {
      name: 'DM BOT',
      short_description: 'My first Python-written project for Discord which was multifunctional things: ' +
        'roles management, music player, economy, moderation and auto-moderation tools.',
      stack_used: ['Python', 'Discord.py', 'SQLite'],
      years: ['2020-2021'],
      status: 'abandoned',
      source_code: null,
      demonstrate_link: null,
    }
  ]


  return (
    <div className="flex flex-col gap-15 mt-10">
      <div className="text-center flex flex-col gap-2 md:gap-3">
        <h2 className="md:text-3xl text-xl font-bold">Projects page</h2>
        <p className="md:text-lg text-sm">Here the list of all my projects I&#39;ve done ever.</p>
      </div>
      <div className="max-w-6xl mx-auto w-full px-4 flex flex-col gap-4">
        <p className="text-zinc-500">The filter will appear here soon...</p>
        <div className="w-full">
          <div className="max-w-6xl gap-4 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={`project-${index}`}
                className="w-full"
              >
                <div className="h-full px-5 py-4 flex flex-col gap-3 rounded-xl border-2 border-stone-200 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex gap-3 items-center">
                    {project.status == "active" ? (
                      <Circle className="text-green-500 fill-green-500 size-4"/>
                    ) : null}
                    {project.status == "suspended" ? (
                      <Circle className="text-yellow-500 fill-yellow-500 size-4"/>
                    ) : null}
                    {project.status == "abandoned" ? (
                      <Circle className="text-stone-500 fill-stone-500 size-4"/>
                    ) : null}
                    <p className="font-bold text-sm">{project.name}</p>
                  </div>
                  <p className="text-sm">{project.short_description}</p>
                  <button type="button" onClick={() => setSelectedProject(index)}
                    className="mt-auto self-center text-sm hover:text-violet-600 transition-colors duration-300 hover:cursor-pointer underline underline-offset-2"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
          {selectedProject !== null && (
            <div
              className="fixed inset-0 z-100 flex items-center justify-center bg-black/20 xs:p-4 backdrop-blur-sm"
              onClick={event => {
                if (event.target === event.currentTarget) setSelectedProject(null)
              }}
            >
              <div
                className="max-h-[85dvh] w-full max-w-2xl overflow-y-auto flex flex-col rounded-2xl bg-white p-6 shadow-lg gap-4"
              >
                <div className="flex flex-col gap">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-bold sm:text-2xl">{projects[selectedProject].name}</h2>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex size-9 cursor-pointer items-center justify-center rounded-full hover:bg-stone-100"
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                  <div className="flex items-center gap-2 select-none">
                    {projects[selectedProject].status == "active" ? (
                      <Circle className="text-green-500 fill-green-500 size-4"/>
                    ) : null}
                    {projects[selectedProject].status == "suspended" ? (
                      <Circle className="text-yellow-500 fill-yellow-500 size-4"/>
                    ) : null}
                    {projects[selectedProject].status == "abandoned" ? (
                      <Circle className="text-stone-500 fill-stone-500 size-4"/>
                    ) : null}
                    <span className="text-sm">{projects[selectedProject].status}</span>
                    <span className="text-stone-600">•</span>
                    <span>
                      {projects[selectedProject].years.length == 2 ?
                        (<>{projects[selectedProject].years[0]} - {projects[selectedProject].years[1]}</>) :
                        (<>{projects[selectedProject].years[0]}</>)
                      }
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-sm">{projects[selectedProject].short_description}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold">Used tools</p>
                  <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 items-center gap-3">
                    {projects[selectedProject].stack_used.map((stack, index) => (
                      <div
                        key={`project-stack-${index}`}
                        className="px-4 text-sm select-none text-center py-1 rounded-2xl bg-zinc-100 hover:text-violet-600 transition-all hover:-translate-y-1 duration-300"
                      >
                        {stack.toLowerCase()}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  {projects[selectedProject].source_code != null ? (
                    <Link
                      className="text-sm border-b border-current hover:border-b-violet-600 flex items-center gap-2 hover:text-violet-600 duration-200 transition-colors"
                      href={projects[selectedProject].source_code}
                    >
                      <LucideLink strokeWidth={1} className="size-4" />
                      <span>Source Code</span>
                    </Link>
                  ) : (
                    <p
                      className="text-sm flex items-center gap-2 text-stone-500 select-none"
                    >
                      <LucideLink strokeWidth={1} className="size-4" />
                      <span>Source Code (inactive)</span>
                    </p>
                  )}
                  {projects[selectedProject].demonstrate_link != null ? (
                    <Link
                      className="text-sm border-b border-current hover:border-b-violet-600 flex items-center gap-2 hover:text-violet-600 duration-200 transition-colors"
                      href={projects[selectedProject].demonstrate_link}
                    >
                      <LucideLink strokeWidth={1} className="size-4" />
                      <span>Project link</span>
                    </Link>
                  ) : (
                    <p
                      className="text-sm flex items-center gap-2 text-stone-500 select-none"
                    >
                      <LucideLink strokeWidth={1} className="size-4" />
                      <span>Project link (inactive)</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
