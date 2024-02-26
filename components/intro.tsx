"use client";
import Image from 'next/image';
import React from 'react';
import alexAvatar from "@/public/alex-avatar.jpeg";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";


export default function Intro() {
  return (
    <section className ="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className ="flex items-center justify-center">
            <div className="flex relative px-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0}}
                  animate={{ opacity: 1, scale: 1}}
                  transition={{ type: "tween", duration: 0.5}}
                >
                    <Image 
                        src= {alexAvatar} 
                        alt="Photo of Alex Christakou"  
                        quality="100" 
                        priority={true}
                        className = "flex items-center justify-center h-36 w-36 object-cover rounded-full border-[0.2rem] border-slate-200 shadow-xl"
                    />
                    <span className="flex text-3xl text-slate-900 py-5">
                        <h1> Hey, I'm Alex Christakou 👋 </h1>
                    </span>
                    <span className="text-slate-700">
                        <p>
                            I'm a software engineer with a passion for learning.
                        </p>
                    </span>

                    <div>
                        <Link 
                            href="#contact"
                            className="bg-slate-950 text-white px-7 py-3 flex items-center gap-2 rounded-full"
                            >
                            Contact me here <BsArrowRight />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
