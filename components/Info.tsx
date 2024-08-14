"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Info = memo(() => {
  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen items-center bg-blue-500 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isSectionVisible ? 1 : 0,
          y: isSectionVisible ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-full"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold lg:text-5xl">
              Meet the Coach: <span className="text-black">Richard Holmes</span>
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                alt="Richard Holmes"
                src="/coach.png"
                width={100}
                height={100}
                className="mx-auto inset-0 h-64 md:h-72 lg:h-96 w-auto lg:mt-16 mb-20 rounded-full animated-border"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-lg">
                <h4 className="text-3xl font-semibold">Experience</h4>
                <p>
                  {`1 to 1 & small group coaching specialist with 3 years of active
                  coaching experience, having trained players as young as 5 years
                  old to 32 years old on a 1 to 1 basis. Players trained have
                  ranged from professional and representing their nation to
                  scholarship athletes at USA division 1 schools and those just
                  starting out or playing at a recreational level.`}
                </p>
              </article>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Info.displayName = "Info";

export default Info;
