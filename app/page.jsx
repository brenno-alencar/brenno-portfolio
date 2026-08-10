"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";

//componetes
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16 h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <Typewriter
                options={{
                  strings: [
                    "Desenvolvedor Front-end",
                    "Especialista em React",
                    "UI/UX Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 40,
                }}
              />
            </span>
            <h1 className="h1 mb-6">
              Olá, eu sou
              <br />
              <span className="text-accent">Brenno Alencar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Desenvolvedor Front-end com mais de 3 anos de experiência em
              aplicações web modernas, responsivas e acessíveis.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-accent text-accent
                hover:bg-accent hover:text-black rounded-full px-6 py-3 transition-all duration-300
                text-sm font-medium"
              >
                <a
                  href="/curriculo.pdf"
                  download="Brenno_Alencar_CV.pdf"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
                items-center text-accent text-base hover:bg-accent hover:text-primary
                 hover:transition-all duration-500"
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
};

export default Home;
