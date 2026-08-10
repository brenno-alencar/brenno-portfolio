"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPhp,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";

// dados

const experience = {
  title: "Minha experiência",
  description:
    "Experiência com desenvolvimento front-end, atuando em projetos reais de automação, agronegócio e projetos freelance, com foco em interfaces modernas, responsivas e acessíveis.",
  items: [
    {
      period: "Ago/2026 - Atual",
      role: "Estudos e Projetos Pessoais",
      company: "Autônomo",
    },
    {
      period: "Jan/2025 - Mar/2026",
      role: "Desenvolvedor Full Stack (Foco em Front-end)",
      company: "GVD Soluções Inteligentes",
    },
    {
      period: "Fev/2024 - Jan/2025",
      role: "Desenvolvedor Front-end",
      company: "Core Tecnologia",
    },
    {
      period: "Out/2023 - Jan/2025",
      role: "Desenvolvedor Front-end",
      company: "Projetos próprios · Remoto",
    },
  ],
};

const education = {
  title: "Minha educação",
  description:
    "Minha trajetória é marcada pelo foco em tecnologia e aprendizado constante, sempre buscando evoluir na prática e desenvolver soluções cada vez melhores.",
  items: [
    {
      period: "Cursando",
      role: "Análise e Desenvolvimento de Sistemas",
      company: "UNIGOIÁS – Centro Universitário de Goiás",
    },

    { period: "2023", role: "UX/UI Design", company: "Alura" },
  ],
};

const skills = {
  title: "Minhas skills",
  description:
    "Algumas das tecnologias com as quais trabalho e possuo domínio, utilizadas no desenvolvimento de aplicações modernas, responsivas e acessíveis.",
  items: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3Alt />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const about = {
  title: "Sobre mim",
  description:
    "Sou Brenno, Desenvolvedor de Software Front-end com mais de 3 anos de experiência em aplicações web modernas e escaláveis. Tenho experiência prática com JavaScript, TypeScript, React, Next.js, sempre buscando entregar soluções eficientes, com bom desempenho e de fácil manutenção.",
  info: [
    { fieldName: "Nome", fieldValue: "Brenno Alencar" },
    { fieldName: "Telefone", fieldValue: "(+55) 62 99200-2421" },
    { fieldName: "Experiência", fieldValue: "+ de 3 anos" },
    { fieldName: "Nacionalidade", fieldValue: "Brasileiro" },
    { fieldName: "Email", fieldValue: "brennoalencar79@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Disponível" },
    { fieldName: "Linguagens", fieldValue: "Português, Inglês" },
  ],
};

const tabs = [
  { value: "experience", label: "Experiência" },
  { value: "education", label: "Educação" },
  { value: "skills", label: "Skills" },
  { value: "about", label: "Sobre mim" },
];

// componente

const Sobre = () => {
  const [active, setActive] = useState("experience");

  const renderContent = () => {
    // ── Experience & Education ──
    if (active === "experience" || active === "education") {
      const data = active === "experience" ? experience : education;
      return (
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.3,
          }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-3xl font-bold text-white">{data.title}</h3>
          <p className="text-white/60 max-w-[520px] leading-relaxed text-sm xl:text-base">
            {data.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#232329] rounded-xl p-5 flex flex-col gap-2 border border-white/5 hover:border-accent/40 transition-all duration-300"
              >
                <span className="text-accent text-sm font-medium">
                  {item.period}
                </span>
                <h4 className="text-white font-semibold text-base leading-snug">
                  {item.role}
                </h4>
                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
                  {item.company}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    // ── skills ──
    if (active === "skills") {
      return (
        <motion.div
          key="skills"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.3,
          }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-3xl font-bold text-white">{skills.title}</h3>
          <p className="text-white/60 max-w-[520px] leading-relaxed text-sm xl:text-base">
            {skills.description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-2 w-full max-w-[800px]">
            {skills.items.map((skill, i) => (
              <div
                key={i}
                className="group bg-[#232329] rounded-xl w-full h-[120px] flex flex-col justify-center items-center gap-1.5 border border-white/5 hover:border-accent/40 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl sm:text-4xl xl:t ext-5xl text-white/80 group-hover:text-accent transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-[10px] sm:text-xs text-white/40 group-hover:text-white/70 transition-colors duration-300 text-center leading-tight px-2">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }

    // ── About ──
    if (active === "about") {
      return (
        <motion.div
          key="about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-3xl font-bold text-white">{about.title}</h3>
          <p className="text-white/60 max-w-[520px] leading-relaxed text-sm xl:text-base">
            {about.description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {about.info.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-white/40 text-sm min-w-[110px]">
                  {item.fieldName}
                </span>
                <span className="text-white font-medium text-sm">
                  {item.fieldValue}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      );
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* Tabs (lateral esquerda)*/}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="flex xl:flex-col gap-3 xl:w-[220px] shrink-0"
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActive(tab.value)}
                className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                  active === tab.value
                    ? "bg-accent text-primary"
                    : "bg-[#232329] text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/*Conteúdo (direita) */}
          <div className="flex-1 min-h-[400px]">{renderContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
