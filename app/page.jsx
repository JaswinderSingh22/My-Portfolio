/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-1 xl:pb-12">
          {/* text  */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-4">
              Hello I'm <br />
              <span className="text-accent">Jaswinder Singh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a passionate senior software engineer with 3.5 years of
              experience, specializing in React, Next.js, Vue, Node.js, and
              more. My expertise in JavaScript, TypeScript, HTML, CSS, Tailwind,
              MongoDB, and backend development allows me to build stunning,
              responsive full-stack web applications. Let's create something
              amazing together.
            </p>
            {/* Buttons and socials */}

            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Link href="/assets/resume/JaswinderSingh.pdf" target="_blanK">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
