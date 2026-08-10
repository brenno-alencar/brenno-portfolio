"use client";

import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Anos de experiência" },
  { num: 17, text: "Projetos completos" },
  { num: 15,  text: "Clientes satisfeitos" },
  { num: 180,  text: "Code commits" },
];

const Stats = () => {
  return (
    <section>
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 xl:px-16">
        <div className="flex flex-wrap gap-30 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex flex-1 gap-4 items-center justify-center xl:justify-center"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={0.9}
                className="text-4xl xl:text-5xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;