"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function About() {
  return (
    <main className="flex-col min-h-screen">
      <section className="landing px-8 pt-[12rem] md:pt-64 flex flex-col gap-4 select-none lg:px-24 transition-[padding] duration-300 ease-in-out">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-40 items-center">
          <div className="flex flex-col gap-4">
            <motion.h1
              className="text-8xl font-medium"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              About Me!
            </motion.h1>
            <div className="flex flex-col gap-2">
              <motion.h2
                className="text-lightgray dark:text-dark-lightgray 3xl:text-lg text-xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
              >
                Greetings! I graduated from the University of California,
                Irvine, with a degree in Business Administration. While
                exploring future career paths, I discovered a passion for UX
                design, which allows me to combine my creativity in photography,
                video production, and music creation. I'm enthusiastic about
                crafting experiences that foster human connection and have a
                positive impact on society. Currently, I'm actively seeking new
                opportunities in this exciting field. Feel free to contact me
                via email or connect with me on LinkedIn if you'd like to get in
                touch!
              </motion.h2>
              <motion.h2
                className="font-medium text-lg"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
              >
                Scroll down to discover my other work!
              </motion.h2>
            </div>
          </div>

          <motion.div
            className="flex-shrink-0 md:self-center"
            initial={{ filter: "blur(25px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 1,
            }}
          >
            <div className="relative w-[300px] aspect-square md:w-[400px] rounded-full overflow-hidden">
              <Image
                src="/images/about/profile.png"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>
      <section className="project-section pb-32">
        <Carousel
          items={[
            {
              type: "video",
              videoId: "NlSZEhXSW94",
              alt: "everything goes on - gym edit",
            },
            {
              type: "video",
              videoId: "jujFuyUALs4",
              alt: "SOP PL Promo",
            },
            {
              type: "video",
              videoId: "D79o2jLOiXM",
              alt: "Bay Area Barbell Open 2023 - Powerlifting Meet Recap",
            },
            {
              type: "video",
              videoId: "tAkb9H_FtyY",
              alt: "Eli Meet Recap - SoCal Showdown 2022",
            },
          ]}
        />
      </section>
    </main>
  );
}
