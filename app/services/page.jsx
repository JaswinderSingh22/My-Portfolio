"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Full-stack web development using modern technologies like React, Next.js, Vue, Node.js, and MongoDB. I create responsive, scalable applications with clean code and optimal performance.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Crafting intuitive user interfaces and seamless user experiences. I design pixel-perfect, accessible interfaces using Figma and implement them with HTML, CSS, and Tailwind CSS.",
    href: "",
  },
  {
    num: "03",
    title: "Backend Development",
    desc: "Building robust server-side applications with Node.js, Express, and MongoDB. I develop RESTful APIs, handle database design, and ensure secure, efficient data management.",
    href: "",
  },
  {
    num: "04",
    title: "Performance Optimization",
    desc: "Optimizing web applications for speed and efficiency. I implement best practices for code splitting, lazy loading, SEO optimization, and overall performance enhancement.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>

                <h1 className="text-[42px] leading-none font-bold text-white  group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h1>
                <p className="text-white/60">{service.desc}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
