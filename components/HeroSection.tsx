"use client";

import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <div
    className="max-h-screen md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center" >
            <motion.h1
            initial={{opacity:0, y:30}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.2, delay:0.3}}
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</motion.h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4">
                <Link href={"/Courses"}>
              <motion.button
              initial={{opacity:0, scaleZ:0.99}}
              animate={{opacity:1, scaleZ:1}}
              transition={{duration:0.2, delay:0.5}}
               className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Explore Course
                </span>
              </motion.button>
            </Link>
            </div>
      </div>
        
    </div>
  )
}

export default HeroSection