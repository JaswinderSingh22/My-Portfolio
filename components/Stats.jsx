"use client";

import CountUp from "react-countup";

// Calculate months of experience
const startDate = new Date('2022-01-11');
const currentDate = new Date();
const monthsDiff = Math.floor(
  (currentDate - startDate) / (1000 * 60 * 60 * 24 * 30.44) // using average month length
);
 

const stats = [
  {
    num: monthsDiff,
    text: "Months of Experience",
  },
  {
    num: 6,
    text: "+ Projects Completed",
  },
  {
    num: 8,
    text: "+ Technologies Mastered",
  },
  {
    num: 1000,
    text: "+ Code Commits",
  },
];
export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
              return <div key={index} className="flex-1 items-center justify-center flex gap-4 xl:justify-start">
                  <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                  <p className={`${item.text.length<15? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-whit/80`}>{ item.text}</p>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}
