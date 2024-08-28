"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-gray-50 dark:bg-background" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isSectionVisible ? 1 : 0,
          y: isSectionVisible ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex justify-center max-w-xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Testimonials
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <blockquote className="rounded-lg bg-white dark:bg-background border p-6 shadow-sm sm:p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <img
                  alt="Denys"
                  src="/testimonial1.avif"
                  className="size-40 lg:size-48 rounded-full object-cover"
                  loading="lazy"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium ">Denys Garmash</p>
                  <p className="font-medium text-gray-400 md:text-sm">
                    Former Dynamo Kyiv &
                    <br />
                    Ukraine International
                  </p>
                </div>
              </div>

              <p className="mt-4 ">
                {`"Richard has a great character and a talent for coaching with
                his unique eye to details. I'm excited to see what he can do
                with Deep Skill Training and how many more players he can help."`}
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-white dark:bg-background border p-6 shadow-sm sm:p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <img
                  alt="Buronbek Mirzasalimov"
                  src="/testimonial3.avif"
                  className="size-40 lg:size-48 rounded-full object-cover"
                  loading="lazy"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium ">
                    Buronbek Mirzasalimov
                  </p>
                  <p className="font-medium text-gray-400 md:text-sm">
                    University of Stirling & Former
                    <br /> Uzbekistan U19s
                  </p>
                </div>
              </div>

              <p className="mt-4 ">
                {`"What makes Deep Skill Training so different is the variability
                in the training, the exercises we trained felt more than just
                drills and the purpose of each was well explained plus the
                feedback at the end was really useful."`}
              </p>
            </blockquote>
            <blockquote className="rounded-lg bg-white dark:bg-background border p-6 shadow-sm sm:p-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <img
                  alt="Aaron Ashley"
                  src="/testimonial2.avif"
                  className="size-40 lg:size-48 rounded-full object-cover"
                  loading="lazy"
                />

                <div>
                  <div className="flex justify-center gap-0.5 text-green-500">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>

                  <p className="mt-0.5 text-lg font-medium ">Aaron Ashley</p>
                  <p className="font-medium text-gray-400 md:text-sm">
                    Central Ajax (Semi Pro) & player of
                    <br /> the season @ Nechells Athletic
                  </p>
                </div>
              </div>

              <p className="mt-4 ">
                {`"Well executed and explained session plans is what really stood
                out for me with Deep Skill Training, the customised aspect is
                what made me be able to trust and see progress in my
                development."`}
              </p>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
