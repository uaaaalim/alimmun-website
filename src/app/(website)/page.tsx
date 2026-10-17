'use client';

import Link from "next/link";
import Image from "next/image";

import ParticlesBg from "@/app/(website)/ParticlesBg";
import BlurText from "@/components/BlurText";

import {Circle, MoveRight, Link as LucideLink} from "lucide-react";

import {useEffect, useState} from "react";


export default function Home() {
  const [showMainSection, setShowMainSection] = useState(false);

  useEffect(() => {
    if (showMainSection) return;

    const html = document.documentElement;
    const previousOverflow = html.style.overflow;

    html.style.overflow = "hidden";
    html.scrollTo({top: 0})

    return () => {
      html.style.overflow = previousOverflow;
    }
  })

  useEffect(() => {
    if (!showMainSection) return;

    let scrolling = false;
    let frame = 0;

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;

      if (scrolling) {
        event.preventDefault();
        return;
      }

      const about = document.getElementById("about");
      if (!about) return;

      const start = window.scrollY;
      const aboutTop = about.getBoundingClientRect().top + start;

      const down = event.deltaY > 0 && start < aboutTop - 5;
      const up =
        event.deltaY < 0 &&
        start > 0 &&
        start <= aboutTop + 5;

      if (!down && !up) return;

      event.preventDefault();
      scrolling = true;

      const target = down ? aboutTop : 0;
      const started = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - started) / 500, 1);
        const eased = progress * progress * (3 - 2 * progress);

        window.scrollTo({
          top: start + (target - start) * eased,
          behavior: "instant",
        });

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        } else {
          scrolling = false;
        }
      };

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("wheel", onWheel, {passive: false});

    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(frame);
    };
  }, [showMainSection]);

  const knowledgeStack = ["py", "js", "ts", "java", "nextjs", "react", "git", "docker", "debian", "postgresql"]


  return (
    <>
      <section className="px-4 flex flex-col gap-20">
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <ParticlesBg
              particleColors={["#7C3AED", "#A78BFA"]}
              particleCount={600}
              particleSpread={7.5}
              speed={0.13}
              particleBaseSize={125}
              glow={1.4}
              twinkle={0}
              moveParticlesOnHover
              hoverEffect="parallax"
              shape="sparkle"
              sizeRandomness={1.2}
              connections
              connectionDistance={70}
              particleHoverFactor={0.4}
              hoverRadius={75}
              clickBurst={false}
              alphaParticles
              cameraDistance={29}
              variation={6}
              lightMode
            />
          </div>
          <section
            className="relative flex min-h-dvh w-full items-center justify-center px-4 py-[calc(6rem+env(safe-area-inset-bottom))] select-none bg-[radial-gradient(ellipse_35%_30%_at_50%_50%,#FAFAF9_0%,transparent_100%)]">
            <div className="w-full text-center max-w-2xl flex flex-col gap-12">
              <div className="flex flex-col sm:gap-4 gap-2">
                <BlurText
                  text="Welcome"
                  effect="blur"
                  animateBy="words"
                  direction="top"
                  staggerFrom="start"
                  trigger="view"
                  delay={200}
                  stepDuration={0.35}
                  blur={10}
                  distance={50}
                  className="sm:text-6xl font-bold text-5xl justify-center"
                  loop={false}
                  loopDelay={2}
                  focusOnHover={false}
                />
                <BlurText
                  text="to the Alim Mun's web page!"
                  effect="blur"
                  animateBy="words"
                  direction="top"
                  staggerFrom="start"
                  trigger="view"
                  delay={300}
                  stepDuration={0.35}
                  blur={10}
                  distance={50}
                  className="text-xl sm:text-2xl justify-center"
                  loop={false}
                  loopDelay={2}
                  focusOnHover={false}
                  onAnimationComplete={() => setShowMainSection(true)}
                />
              </div>
              <div
                className={`flex flex-col gap-4 duration-400 transition-all ${showMainSection ? 'opacity-100' : 'opacity-0 translate-y-2'}`}>
                <p className="sm:text-lg text-md">See information about me</p>
                <div className="mx-auto grid w-fit max-w-full grid-cols-1 gap-4" inert={!showMainSection}>
                  <Link
                    href="/projects"
                    className="sm:px-6 py-2 px-4 border-2 border-foreground transition-all hover:bg-foreground hover:text-stone-50 duration-200"
                  >
                    See projects
                  </Link>
                </div>
              </div>
            </div>
            <p
              className={`absolute inset-x-0 bottom-0 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-center text-base duration-400 transition-opacity ${showMainSection ? 'opacity-100' : 'opacity-0'} font-bold`}>Or
              just scroll down</p>
          </section>
        </div>
        <div
          id="about"
          className="max-w-5xl pt-10 w-full m-auto flex flex-col md:items-center items-center md:flex-row gap-10"
        >
          <div>
            <h2 className="font-bold text-2xl md:text-4xl md:hidden">About me</h2>
          </div>
          <div>
            <Image className="md:max-w-80 rounded-4xl max-w-70" alt="" width={3024} height={4032} src="/IMG_0936.JPG"/>
          </div>
          <div className="flex flex-col justify-center gap-10 items-center md:items-start">
            <h2 className="font-bold text-4xl hidden md:block">About me</h2>
            <div className="flex flex-col gap-5 max-w-md">
              <div>
                <p>Hi! My name is Alim. I&#39;m 19 and I&#39;m from Kazakhstan, Almaty.</p>
                <p>I am student of Narxoz university, major is Statistics and Data Science.</p>
              </div>
              <div>
                <p>
                  Currently, I am learning and practicing Web development such as front-end and
                  back-end parts.
                </p>
                <p>About my knowledge stack you can discover below.</p>
                <p>Btw, how do you see, my hobby is hiking.</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 max-w-50 lg:max-w-sm text-center gap-4">
              <Link
                href="/projects"
                className="sm:px-6 py-2 px-4 border-2 border-foreground transition-all hover:bg-foreground hover:text-stone-50 duration-200"
              >
                Discover projects
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-4xl m-auto w-full flex gap-10 flex-col">
          <div className="w-full flex flex-col text-center">
            <h2 className="text-2xl font-bold md:text-4xl">Knowledge stack</h2>
          </div>
          <div className="mx-auto flex flex-wrap justify-center gap-4">
            {
              knowledgeStack.map((item, index) => (
                <div key={`knowledgeStack_${index}`} className="flex h-24 w-36 shrink-0 items-center justify-center rounded-2xl border-2 border-stone-200 duration-300 transition-all hover:bg-zinc-200 hover:-translate-y-1">
                  <Image
                    src={`https://skillicons.dev/icons?i=${item}&theme=dark`}
                    width={60}
                    height={60}
                    alt=""
                    unoptimized
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="max-w-xl lg:max-w-5xl m-auto w-full flex items-center md:items-start flex-col gap-10">
          <div className="w-full text-center">
            <h2 className="text-2xl font-bold md:text-4xl">My projects</h2>
          </div>
          <section className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-5 m-auto">
            <div
              className="py-4 px-5 rounded-xl bg-white border-2 border-stone-150 flex flex-col gap-3 justify-between transition-transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col gap-4">
                <span className="flex gap-3 items-center">
                    <Circle className="text-green-500 fill-green-500 size-4"/>
                    <p className="text-md font-bold">Alim Mun&#39;s website</p>
                </span>
                <p className="text-sm">
                  An open-source website about me and my projects history (active and unactive). Written on NextJS with
                  purpose to learn web development.
                </p>
              </div>
              <div className="flex flex-col text-sm gap-1 items-start">
                <Link
                  href="/"
                  className="flex gap-2 items-center border-b border-current hover:text-violet-600 duration-200 transition-all hover:ml-2 hover:border-b-violet-600"
                >
                  <LucideLink className="size-4"/>
                  <span>You&#39;re already here</span>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/uaaaalim/alimmun-website"
                  className="flex gap-2 items-center border-b border-current hover:text-violet-600 duration-200 transition-all hover:ml-2 hover:border-b-violet-600"
                >
                  <LucideLink className="size-4"/>
                  <span>Source code</span>
                </Link>
              </div>
            </div>
            <div
              className="py-4 px-5 rounded-xl bg-white border-2 border-stone-150 flex flex-col gap-3 justify-between transition-transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col gap-4">
              <span className="flex gap-3 items-center">
                  <Circle className="text-green-500 fill-green-500 size-4"/>
                  <p className="text-md font-bold">Fitness Telegram bot</p>
              </span>
              </div>
              <p className="text-sm">
                An open-source Telegram bot (order) tells the customer about coach&#39;s experience, training rewards
                and program, with interactive menu and survey to start trains.
              </p>
              <div className="flex flex-col text-sm gap-1 items-start">
                <Link
                  href="https://t.me/bfit360_bot"
                  className="flex gap-2 items-center border-b border-current hover:text-violet-600 duration-200 transition-all hover:ml-2 hover:border-b-violet-600"
                >
                  <LucideLink className="size-4"/>
                  <span>Try prod version</span>
                </Link>
                <Link
                  target="_blank"
                  href="https://github.com/uaaaalim/bfit_bot"
                  className="flex gap-2 items-center border-b border-current hover:text-violet-600 duration-200 transition-all hover:ml-2 hover:border-b-violet-600"
                >
                  <LucideLink className="size-4"/>
                  <span>Source code</span>
                </Link>
              </div>
            </div>
            <div
              className="py-4 px-5 rounded-xl bg-white border-2 border-stone-150 flex flex-col gap-3 justify-between transition-transform hover:-translate-y-1 duration-300">
              <div className="flex flex-col gap-4">
              <span className="flex gap-3 items-center">
                  <Circle className="text-yellow-500 fill-yellow-500 size-4"/>
                  <p className="text-md font-bold">News checker bot</p>
              </span>
              </div>
              <p className="text-sm">
                An open-source Telegram bot (ICT project) which verifies the veracity of information: news, facts,
                rumors, and answers on questions.
              </p>
              <div className="flex flex-col text-sm gap-1 items-start">
                <div inert={true} className="flex gap-1 text-sm text-stone-500">
                  <Link
                    href="https://t.me/bfit360_bot"
                    className="flex gap-2 items-center hover:text-violet-600 duration-200 transition-all hover:ml-2 hover:border-b-violet-600"
                  >
                    <LucideLink className="size-4"/>
                    <span>Try prod version</span>
                  </Link>
                  <span>(Suspended)</span>
                </div>
                <Link
                  target="_blank"
                  href="https://github.com/uaaaalim/bfit_bot"
                  className="flex gap-2 items-center border-b border-current hover:text-violet-600 duration-200 transition-all hover:ml-2 hover:border-b-violet-600"
                >
                  <LucideLink className="size-4"/>
                  <span>Source code</span>
                </Link>
              </div>
            </div>
          </section>
          <div
            className="flex text-lg gap-2 m-auto items-center border-b border-current hover:text-violet-600 duration-200 transition-all hover:border-b-violet-600">
            <Link href="/projects">Explore more</Link>
            <MoveRight strokeWidth={1}/>
          </div>
        </div>
      </section>
    </>
  );
}
