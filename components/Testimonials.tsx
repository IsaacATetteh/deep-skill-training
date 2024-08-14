"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
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
        <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:flex md:items-end md:justify-between ">
            <div className="max-w-xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl ">
                Testimonials
              </h2>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <blockquote className="flex h-full flex-col justify-between items-center text-center bg-white dark:bg-background p-6 shadow-sm sm:p-8 border">
              <Image
                alt="Denys Garmash"
                src="/Denys.jpg"
                className="rounded-full h-auto w-40 md:w-48 mt-3"
                width={500}
                height={500}
              />
              <h2 className="font-bold text-xl mt-5">Denys Garmash</h2>
              <p className="font-medium text-gray-400 md:text-sm">
                Former Dynamo Kyiv &
                <br />
                Ukraine International
              </p>
              <div className="flex mt-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <p className="px-5">
                {`Richard has a great character and a talent for coaching with
                his unique eye to details. I'm excited to see what he can do
                with Deep Skill Training and how many more players he can help.`}
              </p>
            </blockquote>
            <blockquote className="flex h-full flex-col justify-between items-center text-center bg-white dark:bg-background p-6 shadow-sm sm:p-8 border">
              <Image
                width={500}
                height={500}
                alt="Denys Garmash"
                src="/testimonial1.jpg"
                className="rounded-full h-auto w-40 md:w-48 mt-3"
              />
              <h2 className="font-bold text-xl mt-5">Buronbek Mirzasalimov</h2>
              <p className="font-medium text-gray-400 md:text-sm">
                University of Stirling & Former
                <br /> Uzbekistan U19s
              </p>
              <div className="flex mt-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <p className="px-5">
                {`What makes Deep Skill Training so different is the variability
                in the training, the exercises we trained felt more than just
                drills and the purpose of each was well explained plus the
                feedback at the end was really useful.`}
              </p>
            </blockquote>
            <blockquote className="flex h-full flex-col justify-between items-center text-center bg-white dark:bg-background p-6 shadow-sm sm:p-8 border">
              <Image
                alt="Aaron Ashley"
                src="/testimonial2.png"
                className="rounded-full h-auto w-40 md:w-48 mt-3"
                width={500}
                height={500}
              />
              <h2 className="font-bold text-xl mt-5">Aaron Ashley</h2>
              <p className="font-medium text-gray-400 md:text-sm">
                Central Ajax (Semi Pro) & player of
                <br /> the season @ Nechells Athletic
              </p>
              <div className="flex mt-2 mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <p className="px-5">
                {`Well executed and explained session plans is what really stood
                out for me with Deep Skill Training, the customised aspect is
                what made me be able to trust and see progress in my
                development.`}
              </p>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
