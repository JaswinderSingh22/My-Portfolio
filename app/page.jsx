/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  FiDownload,
  FiArrowRight,
  FiCode,
  FiZap
} from "react-icons/fi";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BsArrowDownRight, BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

//Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import Link from "next/link";
import Image from "next/image";

// Data
const about = {
  title: "About me",
  description:
    "I am a dedicated senior frontend engineer with 3.5 years of experience in frontend development and user interface design. I specialize in building responsive, interactive web applications using modern frontend technologies and have a passion for creating exceptional user experiences.",
  info: [
    { fieldName: "Name", fieldValue: "Jaswinder Singh" },
    { fieldName: "Phone", fieldValue: "8872730235" },
    { fieldName: "Experience", fieldValue: "3.5+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "jaswindersingh@iitdalumni.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Punjabi" },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "My professional journey spans 3.5 years of software development, working with leading companies to build innovative web applications.",
  items: [
    { company: "Square Yards", position: "Senior Software Engineer", duration: "2025 - present" },
    { company: "Square Yards", position: "Software Developer", duration: "2023 - 2025" },
    { company: "Albanero Dev Pvt Ltd", position: "Software Developer", duration: "2022-2023" },
  ],
};

const education = {
  title: "My Education",
  description:
    "My educational background has provided me with a strong foundation in engineering principles and analytical thinking, which I've applied to frontend development.",
  items: [
    { institute: "Indian Institute of Technology, Delhi", degree: "B.Tech in Textile & Fiber Engineering", duration: "2017 - 2021" },
    { institute: "Kendriya Vidyalaya No.2, Patiala", degree: "Senior Secondary (CBSE)", duration: "2016" },
    { institute: "Kendriya Vidyalaya No.2, Patiala", degree: "Secondary (CBSE)", duration: "2014" },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have developed expertise in a wide range of technologies throughout my career.",
  skillList: [
    { icon: <FaHtml5 />, name: "html5" },
    { icon: <FaCss3 />, name: "css" },
    { icon: <FaJs />, name: "Javascript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaNodeJs />, name: "Node Js" },
  ],
};

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Frontend web development using modern technologies like React, Next.js, Vue, TypeScript, and advanced CSS frameworks for responsive, interactive user interfaces.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Crafting intuitive user interfaces and seamless user experiences using Figma and modern CSS frameworks.",
    href: "",
  },
  {
    num: "03",
    title: "Frontend Architecture",
    desc: "Designing scalable frontend architectures with modern state management, component libraries, and build optimization for large-scale applications.",
    href: "",
  },
  {
    num: "04",
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed, efficiency, and SEO with modern best practices.",
    href: "",
  },
];

const projects = [
  {
    num: "01",
    category: "inco-ai",
    title: "Inco AI",
    description: "Inco AI is an innovative interior design platform that transforms room images using OpenAI API.",
    stack: [{ name: "next.js" }, { name: "tailwind css" }, { name: "typescript" }, { name: "openai api" }],
    image: "/assets/work/incoai.png",
    live: "https://ai.interiorcompany.com/",
    github: "https://github.com/JaswinderSingh22/inco-ai",
  },
  {
    num: "02",
    category: "e-commerce",
    title: "amazon clone",
    description: "Amazon clone built with Next.js featuring dynamic product listings and shopping cart functionality.",
    stack: [{ name: "next.js" }, { name: "tailwind css" }, { name: "javascript" }],
    image: "/assets/work/amazon.png",
    live: "https://amazon-clone-tau-blond.vercel.app/",
    github: "https://github.com/JaswinderSingh22/Amazon_Clone",
  },
  {
    num: "03",
    category: "food delivery",
    title: "Chulha",
    description: "Comprehensive food delivery application with real-time order tracking and responsive design.",
    stack: [{ name: "react.js" }, { name: "css 3" }, { name: "javascript" }],
    image: "/assets/work/chulha.png",
    live: "https://chulha-jaswindersingh22s-projects.vercel.app/",
    github: "https://github.com/JaswinderSingh22/chulha",
  },
  {
    num: "04",
    category: "Issue Management Dashboard",
    title: "Issue Management Dashboard",
    description: "Comprehensive issue tracking dashboard with customizable statuses and priority levels.",
    stack: [{ name: "react.js" }, { name: "css 3" }, { name: "typescript" }],
    image: "/assets/work/issue-mangement.png",
    live: "https://issue-management-dashboard.vercel.app/",
    github: "https://github.com/JaswinderSingh22/Issue-Management-Dashboard",
  },
  {
    num: "05",
    category: "AI Chat Interface",
    title: "Smart Document Chat",
    description: "Intelligent document-aware chat interface with AI integration and real-time markdown rendering.",
    stack: [{ name: "next.js" }, { name: "react.js" }, { name: "typescript" }, { name: "tailwindcss" }],
    image: "/assets/work/chatAI.png",
    live: "https://chat-bot-nu-steel.vercel.app/",
    github: "https://github.com/JaswinderSingh22/ChatBot"
  }
];

const contactInfo = [
  { icon: <FaPhoneAlt />, title: "phone", description: "8872730235" },
  { icon: <FaEnvelope />, title: "email", description: "jaswindersingh@iitdalumni.com" },
  { icon: <FaMapMarkerAlt />, title: "address", description: "Patiala, Punjab, India" },
];

export default function Home() {
  const [project, setProject] = useState(projects[0]);
  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', phone: '', service: '', message: ''
  });

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-sm blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-sm blur-3xl animate-pulse delay-1000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,153,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,153,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16 min-h-screen xl:min-h-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center xl:text-left order-2 xl:order-none max-w-2xl"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 mb-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-accent">Available for new opportunities</span>
              </motion.div>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-center xl:justify-start gap-2 mb-4"
              >
                <div className="p-2 bg-accent/10 rounded-sm border border-accent/20">
                  <FiCode className="text-accent text-lg" />
                </div>
                <span className="text-xl font-semibold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Senior Frontend Developer
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="block text-white/90 mb-2">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent animate-gradient">
                  Jaswinder Singh
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl leading-relaxed mb-8 text-white/70 max-w-[600px]"
              >
                Passionate frontend engineer with <span className="text-accent font-semibold">3.5+ years</span> of experience
                crafting exceptional user interfaces and digital experiences. Specialized in modern frontend technologies including
                <span className="text-white/90 font-medium"> React, Next.js, Vue, TypeScript</span>, and more.
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-2 mb-10 justify-center xl:justify-start"
              >
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                    className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-sm text-white/80 hover:bg-accent/10 hover:border-accent/30 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row xl:flex-row gap-4 items-center justify-center xl:justify-start mb-8"
              >
                <Link href="/assets/resume/JaswinderSingh.pdf" target="_blank">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-primary font-semibold px-8 py-6 rounded-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
                  >
                    <span>Download Resume</span>
                    <FiDownload className="ml-2 text-lg group-hover:translate-y-0.5 transition-transform duration-300" />
                  </Button>
                </Link>

                <a href="#work">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-white/20 hover:border-accent text-white hover:text-accent px-8 py-6 rounded-sm transition-all duration-300 hover:bg-accent/5 hover:scale-105"
                  >
                    <span>View My Work</span>
                    <FiArrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex justify-center xl:justify-start"
              >
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-12 h-12 border-2 border-white/20 rounded-sm flex justify-center items-center text-white/70 text-lg hover:bg-accent hover:text-primary hover:border-accent hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                />
              </motion.div>
            </motion.div>

            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="order-1 xl:order-none mb-12 xl:mb-0 relative"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-sm animate-spin-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-sm animate-pulse"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent/40 rounded-sm animate-bounce delay-500"></div>
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-accent/60 rounded-sm animate-ping delay-1000"></div>
                <Photo />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10"
        >
          <Stats />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/5 rounded-sm blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/10 rounded-sm blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/10 border border-accent/20 mb-6">
              <FiZap className="text-accent text-sm" />
              <span className="text-sm font-medium text-accent">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              I offer comprehensive frontend development services to help bring your ideas to life with cutting-edge user interface technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-sm hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
              >
                {/* Service Number & Action */}
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-sm group-hover:bg-accent/40 transition-all duration-500"></div>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 rounded-sm group-hover:bg-accent group-hover:border-accent transition-all duration-500 hover:rotate-12 cursor-pointer">
                    <BsArrowDownRight className="text-white group-hover:text-primary text-xl transition-all duration-500" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-all duration-500 mb-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/80 transition-all duration-500">
                  {service.desc}
                </p>

                {/* Tech Indicators */}
                <div className="flex gap-2 mb-6">
                  {[1, 2, 3].map((dot, dotIndex) => (
                    <div
                      key={dotIndex}
                      className="w-2 h-2 bg-white/20 rounded-sm group-hover:bg-accent transition-all duration-500"
                      style={{ transitionDelay: `${dotIndex * 100}ms` }}
                    ></div>
                  ))}
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-500"></div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-primary font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105"
              >
                <span>Let's Work Together</span>
                <FiArrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      {/* Resume Section */}
      <section id="resume" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-accent/5 rounded-sm blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-accent/3 rounded-sm blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/10 border border-accent/20 mb-6">
              <FiCode className="text-accent text-sm" />
              <span className="text-sm font-medium text-accent">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              Resume
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Explore my professional background, skills, and educational journey through an interactive timeline
            </p>
          </motion.div>

          {/* Timeline Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-sm">
                  <FiCode className="text-accent text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Experience</h3>
                  <p className="text-white/60">My journey through the tech industry</p>
                </div>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>

                <div className="space-y-8">
                  {experience.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: index * 0.2,
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }}
                      viewport={{ once: true }}
                      className="relative flex items-start gap-8 group"
                    >
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-4 h-4 bg-accent rounded-sm border-4 border-primary group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="absolute -inset-2 bg-accent/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 p-6 bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-sm hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-1">
                              {item.position}
                            </h4>
                            <p className="text-accent font-medium">{item.company}</p>
                          </div>
                          <div className="flex items-center gap-2 mt-2 md:mt-0">
                            <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-sm">
                              <span className="text-accent text-sm font-medium">{item.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievement Indicators */}
                        <div className="flex gap-2">
                          {[1, 2, 3].map((dot, dotIndex) => (
                            <div
                              key={dotIndex}
                              className="w-2 h-2 bg-white/20 rounded-sm group-hover:bg-accent transition-all duration-300"
                              style={{ transitionDelay: `${dotIndex * 100}ms` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Education & Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-sm">
                    <span className="text-accent text-xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                    <p className="text-white/60">Academic foundation</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {education.items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.6 + index * 0.1,
                          duration: 0.6
                        }
                      }}
                      viewport={{ once: true }}
                      className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-sm hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-accent rounded-sm group-hover:scale-110 transition-transform duration-300"></div>
                          <span className="text-accent font-medium text-sm">{item.duration}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {item.degree}
                      </h4>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {item.institute}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.8, ease: "easeOut" } }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-sm">
                    <span className="text-accent text-xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Technical Skills</h3>
                    <p className="text-white/60">Technologies I work with</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.skillList.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          delay: 0.8 + index * 0.1,
                          duration: 0.6
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-24 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-sm flex flex-col justify-center items-center gap-2 group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 hover:scale-105 transition-all duration-300">
                            <div className="text-2xl group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                              {item.icon}
                            </div>
                            <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300 capitalize font-medium">
                              {item.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="bg-accent text-primary border-accent">
                            <p className="capitalize font-medium">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* About Me Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-accent/5 to-accent/[0.02] border border-accent/20 rounded-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-sm">
                  <span className="text-accent text-xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">About Me</h3>
                  <p className="text-white/60">Personal & professional details</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {about.info.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 1 + index * 0.1,
                        duration: 0.6
                      }
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 p-4 bg-white/5 border border-white/10 rounded-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                  >
                    <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                      {item.fieldName}
                    </span>
                    <span className="text-white font-semibold">
                      {item.fieldValue}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-sm">
                <p className="text-white/70 leading-relaxed">
                  {about.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <FiCode className="text-accent text-sm" />
              <span className="text-sm font-medium text-accent">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              My Work
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Explore my portfolio of projects showcasing modern web development, AI integration, and user-centric design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-accent/5 to-primary/20">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{project.num}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-10 h-10 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                            <BsArrowUpRight className="text-base" />
                          </TooltipTrigger>
                          <TooltipContent><p>Live Demo</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-10 h-10 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300">
                              <BsGithub className="text-base" />
                            </TooltipTrigger>
                            <TooltipContent><p>Source Code</p></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-accent text-sm font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-md text-white/80 hover:border-accent/30 transition-colors duration-300"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 text-xs text-accent">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <Link
                        href={project.live}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-300 group/link"
                      >
                        <span>Live Demo</span>
                        <BsArrowUpRight className="text-sm group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                      </Link>

                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors duration-300 group/link"
                        >
                          <span>Code</span>
                          <BsGithub className="text-sm group-hover/link:scale-110 transition-transform duration-300" />
                        </Link>
                      )}
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                      <span className="text-xs text-white/50">Live</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-white/20 hover:border-accent text-white hover:text-accent px-8 py-4 rounded-xl transition-all duration-300 hover:bg-accent/5 hover:scale-105"
            >
              <span>View All Projects</span>
              <BsArrowUpRight className="ml-2 text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="absolute top-1/3 right-20 w-64 h-64 bg-accent/5 rounded-sm blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-accent/10 border border-accent/20 mb-6">
              <FiZap className="text-accent text-sm" />
              <span className="text-sm font-medium text-accent">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together
            </p>
          </motion.div>

          <div className="flex flex-col xl:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="xl:w-[60%] order-2 xl:order-none"
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-sm">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-accent mb-3">Let's Work Together</h3>
                  <p className="text-white/70 leading-relaxed">
                    Ready to bring your ideas to life? I'm here to help you build amazing web applications with modern technology and best practices.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-white/60 font-medium">First Name</label>
                    <Input
                      type="text"
                      name="firstname"
                      placeholder="John"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/10 rounded-sm focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60 font-medium">Last Name</label>
                    <Input
                      type="text"
                      name="lastname"
                      placeholder="Doe"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/10 rounded-sm focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60 font-medium">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/10 rounded-sm focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-white/60 font-medium">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/10 rounded-sm focus:border-accent focus:ring-accent/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Service Required</label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger className="w-full bg-white/5 border-white/10 rounded-sm focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-primary border-white/10 rounded-sm">
                      <SelectGroup>
                        <SelectLabel className="text-accent">Select a service</SelectLabel>
                        <SelectItem value="web-development" className="focus:bg-accent/10 focus:text-accent">Web Development</SelectItem>
                        <SelectItem value="ui-ux-design" className="focus:bg-accent/10 focus:text-accent">UI/UX Design</SelectItem>
                        <SelectItem value="frontend-architecture" className="focus:bg-accent/10 focus:text-accent">Frontend Architecture</SelectItem>
                        <SelectItem value="performance-optimization" className="focus:bg-accent/10 focus:text-accent">Performance Optimization</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60 font-medium">Project Details</label>
                  <Textarea
                    className="h-32 bg-white/5 border-white/10 rounded-sm focus:border-accent focus:ring-accent/20 transition-all duration-300 resize-none"
                    name="message"
                    placeholder="Tell me about your project, timeline, and requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto group bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-primary font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:scale-105"
                >
                  <span>Send Message</span>
                  <FiArrowRight className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.8, ease: "easeOut" } }}
              viewport={{ once: true }}
              className="xl:w-[40%] order-1 xl:order-none"
            >
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-4">Contact Information</h4>
                  <p className="text-white/70 leading-relaxed">
                    Feel free to reach out through any of these channels. I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.6 + index * 0.1, duration: 0.6 } }}
                      viewport={{ once: true }}
                      className="group flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-sm hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <div className="text-xl text-accent group-hover:text-primary transition-colors duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">{item.title}</p>
                        <h3 className="text-white font-semibold group-hover:text-accent transition-colors duration-300">
                          {item.description}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-accent/5 to-accent/[0.02] border border-accent/20 rounded-sm"
                >
                  <h5 className="text-accent font-semibold mb-2">Quick Response</h5>
                  <p className="text-white/70 text-sm leading-relaxed">
                    I'm committed to providing quick responses and clear communication throughout our collaboration.
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-2 h-2 bg-accent rounded-sm animate-pulse"></div>
                    <span className="text-accent text-sm font-medium">Usually responds within 24 hours</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}