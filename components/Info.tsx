"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Info() {
  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SkeletonTheme baseColor="#3b82f6" highlightColor="#60a5fa">
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
                {loading ? (
                  <Skeleton width={300} />
                ) : (
                  "Meet the Coach: Richard Holmes"
                )}
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                {loading ? (
                  <Skeleton circle={true} height={500} width={500} />
                ) : (
                  <Image
                    alt="Richard Holmes"
                    src="/coach.png"
                    width={500}
                    height={500}
                    className="mx-auto inset-0 h-64 md:h-72 lg:h-96 w-auto lg:mt-16 mb-20 object-cover rounded-full animated-border"
                  />
                )}
              </div>

              <div className="lg:py-16">
                <article className="space-y-4 text-lg">
                  <h4 className="text-3xl font-semibold">
                    {loading ? <Skeleton width={200} /> : "Experience"}
                  </h4>
                  {loading ? (
                    <Skeleton count={5} />
                  ) : (
                    <>
                      <p>
                        1 to 1 & small group coaching specialist with 3 years of
                        active coaching experience, having trained players as
                        young as 5 years old to 32 years old on a 1 to 1 basis.
                        Players trained have ranged from professional and
                        representing their nation to scholarship athletes at USA
                        division 1 schools and those just starting out or
                        playing at a recreational level.
                      </p>
                      <p className="pb-10">
                        Current Stirling Albion Academy Coach working with the
                        U16s, U20s and Men’s First Team. Prior experience
                        includes coaching the Junior Academy (Ages 9-14) at
                        Dundee United Community Trust along with starting out at
                        highly competitive grassroots teams at the U18/U13
                        levels in London.
                      </p>
                    </>
                  )}
                </article>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:py-16">
                <article className="space-y-4 text-lg">
                  <h3 className="text-3xl font-semibold">
                    {loading ? <Skeleton width={250} /> : "Training Philosophy"}
                  </h3>
                  {loading ? (
                    <Skeleton count={5} />
                  ) : (
                    <>
                      <p>
                        The best players are the best problem solvers, for this
                        to happen our training has to give us constant problems
                        for us to solve along with having to adapt to a
                        limitless variety of situations rather than training the
                        same repeatable problem over and over again. By training
                        with us, you will learn that all the movements you make
                        are forms of skill and that ‘deep skill’ is the ability
                        as well as adaptability to perform in a variety of
                        environments. All sessions are in line with this and is
                        tailored to activate your ‘deep skill’.
                      </p>
                      <p>
                        The second picture shows the OLIVER football tracker
                        which is the same technology used by the Barça Academy.
                        Deep Skill Training uses it to benchmark and measure
                        performance from your first session with us to your
                        last. The OLIVER football tracker records 28 metrics,
                        giving us real data on your progress, training load and
                        injury status.
                      </p>
                    </>
                  )}
                </article>
              </div>

              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                {loading ? (
                  <Skeleton circle={true} height={500} width={500} />
                ) : (
                  <Image
                    alt=""
                    src="/OLIVER.png"
                    width={500}
                    height={500}
                    className="mx-auto inset-0 h-64 md:h-72 lg:h-96 w-auto lg:mt-16 mb-20 object-cover rounded-full animated-border"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </SkeletonTheme>
  );
}

export default Info;
