"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const projects = [
  {
    num: "01",
    category: "Portfolio Website",
    title: "Portfolio Pessoal",
    description:
      "Portfolio moderno desenvolvido com Next.js e Tailwind CSS, com animações fluidas, tema escuro e design responsivo.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://brenno-portfolio.vercel.app/",
    github: "https://github.com/BrennoAlenkar/brenno-portfolio",
    image: "/assets/brenno-portfolio-mockup.png",
  },
  {
    num: "02",
    category: "Em Desenvolvimento",
    title: "Sistema de Gestão",
    description:
      "Aplicação web full stack para gerenciamento de dados com autenticação, dashboard e relatórios em tempo real.",
    stack: ["React", "Node.js", "PostgreSQL"],
    live: "https://projeto2.com",
    github: "https://github.com/BrennoAlenkar",
    image: "/assets/projeto-desenvolvimento.png",
  },
  {
    num: "03",
    category: "Em Desenvolvimento",
    title: "Landing Page",
    description:
      "Landing page de alta conversão para produto SaaS, com foco em performance, SEO e experiência do usuário.",
    stack: ["Next.js", "Tailwind CSS"],
    live: "https://projeto3.com",
    github: "https://github.com/BrennoAlenkar",
    image: "/assets/projeto-desenvolvimento.png",
  },
];

const Projetos = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  const prev = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setIndex((i) => (i + 1) % projects.length);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
          {/* lado esquerdo */}
          <div className="flex flex-col gap-6 xl:w-[480px] shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{
                  delay: 0.6,
                  duration: 0.3,
                }}
                className="flex flex-col gap-5"
              >
                {/* número */}
                <span
                  className="text-[80px] leading-none font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                  // style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
                >
                  {project.num}
                </span>

                {/* categoria + título */}
                <div className="flex flex-col gap-1">
                  <span className="text-accent text-sm font-medium uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                </div>

                {/* descrição */}
                <p className="text-white/60 text-sm xl:text-base leading-relaxed max-w-[420px]">
                  {project.description}
                </p>

                {/* stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm font-medium text-accent ${
                        i < project.stack.length - 1
                          ? "after:content-[','] after:mr-1"
                          : ""
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* divider */}
                <div className="border-t border-white/10" />

                {/* links + navegação */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Link
                      href={project.live}
                      target="_blank"
                      className="w-11 h-11 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <FiArrowUpRight size={18} />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      className="w-11 h-11 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <FiGithub size={18} />
                    </Link>
                  </div>

                  {/* setas */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prev}
                      className="w-11 h-11 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <FiChevronLeft size={18} />
                    </button>
                    <button
                      onClick={next}
                      className="w-11 h-11 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300"
                    >
                      <FiChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* lado direito — imagem */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  delay: 0.4,
                  duration: 0.35,
                }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#232329] group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* overlay sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div className="flex justify-center gap-2 mt-4">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === index
                      ? "w-6 h-2 bg-accent"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
