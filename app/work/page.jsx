"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "inco-ai",
    title: "Inco AI",
    description:
      "Inco AI is an innovative interior design platform that transforms room images using OpenAI API. This project showcases my expertise in AI integration, allowing users to upload interior photos and generate stunning redesigned versions with different styles and themes through advanced AI image processing.",
    stack: [
      { name: "next.js" },
      { name: "tailwind css" },
      { name: "typescript" },
      { name: "openai api" },
    ],
    image: "/assets/work/incoai.png",
    live: "https://ai.interiorcompany.com/",
    github: "",
  },
  {
    num: "02",
    category: "e-commerce",
    title: "amazon clone",
    description:
      "Check out my Amazon clone built with Next.js. This project demonstrates my ability to create complex,scalable e-commerce applications with modern technologies, featuring dynamic product listings, user authentication, and seamless shopping cart functionality.",
    stack: [
      { name: "next.js" },
      { name: "tailwind css" },
      { name: "javascript" },
    ],
    image: "/assets/work/amazon.png",
    live: "https://amazon-clone-tau-blond.vercel.app/",
    github: "https://github.com/JaswinderSingh22/Amazon_Clone",
  },
  {
    num: "03",
    category: "food delivery",
    title: "Chulha",
    description:
      "Chulha is a comprehensive food delivery application built with React.js, featuring an intuitive user interface for browsing restaurants, viewing menus, and placing orders. The app includes real-time order tracking, user authentication, shopping cart functionality, and responsive design for seamless mobile and desktop experiences.",
    stack: [{ name: "react.js" }, { name: "css 3" }, { name: "javascript" }],
    image: "/assets/work/chulha.png",
    live: "https://chulha-jaswindersingh22s-projects.vercel.app/",
    github: "https://github.com/JaswinderSingh22/chulha",
  },
  {
    num: "04",
    category: "Issue Management Dashboard",
    title: "Issue Management Dashboard",
    description:
      "A comprehensive issue tracking and management dashboard built with React.js and TypeScript. Users can create, log, and track tickets with customizable statuses and priority levels. Features include real-time status updates, priority-based filtering, detailed issue analytics, and an intuitive interface for efficient project management and bug tracking.",
    stack: [{ name: "react.js" }, { name: "css 3" }, { name: "typescript" }],
    image: "/assets/work/issue-mangement.png",
    live: "https://issue-management-dashboard.vercel.app/",
    github: "https://github.com/JaswinderSingh22/Issue-Management-Dashboard",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold leading-none text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent text-xl capitalize">
                      {item.name}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group ">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* <div className="absolute w-full h-full top-0 bottom-0 bg-black z-10"></div> */}
                      <div className="relative w-full h-full bg-transparent">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[46%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all p-0 rounded-none"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
