"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Checklist from "./checklist";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Developing",
    },
    {
      text: "your",
    },
    {
      text: "deep",
      className: "underline",
    },
    {
      text: "skill,",
      className: "underline",
    },

    {
      text: "the",
    },
    {
      text: "tailored",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "way.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ].map((word) => ({
    ...word,
    className: `${word.className || ""} text-2xl md:text-5xl`.trim(),
  }));

  const scrollToCalSection = () => {
    document
      .getElementById("cal-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <div className="flex flex-col items-center md:mb-36">
        <img src="test.png" alt="DST" className="scale-75 md:scale-50 z-10" />
        <TypewriterEffect words={words} className="mb-10" />
        <Checklist />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button
            onClick={scrollToCalSection}
            className="z-10 scale-75 md:scale-100 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Get Started Today
          </button>
        </div>
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
  );
}
