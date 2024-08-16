"use client";
import Checklist from "./ui/checklist";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";
export function HeroContent() {
  const scrollToCalSection = () => {
    const target = document.getElementById("cal-section");
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance =
      targetPosition -
      startPosition -
      window.innerHeight / 2 +
      target.clientHeight / 2;
    const duration = 1000;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * percent);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[42rem]">
      <div className="flex flex-col items-center md:mb-36">
        <img src="DST.avif" alt="DST" className="scale-75 md:scale-50 z-10" />
        <div className=" mt-5 md:mt-0 md:mb-12 h-24 text-center md:px-8">
          <h1 className="text-lg xs:text-2xl md:text-[45px] font-bold md:mb-6">
            Developing Your <span className="underline">Deep Skill</span>, The
          </h1>
          <TypeAnimation
            sequence={[100, "Tailored Way."]}
            wrapper="span"
            speed={50}
            className="text-lg xs:text-2xl md:text-[45px] font-bold text-blue-500"
            repeat={Infinity}
          />
        </div>
        <Checklist />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button
            onClick={scrollToCalSection}
            className="z-10  scale-75 md:scale-100 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Get Started Today
          </button>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-70%] h-[200%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
}
