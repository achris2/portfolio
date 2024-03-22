"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import alexAvatar from "@/public/alex-avatar.jpeg";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
    const { ref, inView } = useInView({
        threshold: 0.5, 
    });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection]); 

    const textH1 = "Hey, Alex Christakou here 👋 ".split(" "); 
    return (
        <section
            ref={ref}
            className="mt-28 mb-28 max-w-[30rem] text-center leading-10 sm:mb-0 scroll-mt-[100rem]"
            id="home"
        >
        <div className ="flex items-center justify-center">
            <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0}}
                  animate={{ opacity: 1, scale: 1}}
                  transition={{ 
                    type: "tween", 
                    duration: 0.2
                    }}
                >
                    <Image 
                        src= {alexAvatar} 
                        alt="Photo of Alex Christakou"  
                        quality="100" 
                        priority={true}
                        className = "h-36 w-36 rounded-full object-cover border-[0.4rem] border-slate-300 shadow-xl"
                    />
                </motion.div>
            </div>
        </div> 
            <div className="flex flex-col items-center justify-center">
                {/* <motion.div className="relative"> */}
                <motion.span className="text-2xl text-slate-900 py-5">
                                {textH1.map((el, i) => (
                        <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.25,
                            delay: i / 4
                        }}
                        key={i}
                        >
                        {el}{" "}
                        </motion.span>
                    ))}
                </motion.span>
                <motion.span className="text-md"
                                      initial={{ opacity: 0, scale: 0}}
                                      animate={{ opacity: 1, scale: 1}}
                                      transition={{ 
                                        type: "tween", 
                                        duration: 2
                                        }}
                                      
                >
                    <p>
                        I am a software engineer with a passion for learning. Lores ipsum, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>    
                </motion.span>
                {/* </motion.div> */}
        </div> 
            <motion.div
                className="
                flex flex-col 
                sm:flex-row gap-2
                items-center justify-center py-4 px-4
                text-lg font-medium"
                
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ 
                  type: "tween", 
                  duration: 0.2
                  }}    
            
            
            >

                <Link 
                href="#contact"
                className ="flex items-center gap-2 w-30
                border-sky-500 bg-sky-600 px-6 py-3 
                text-sm font-medium text-white 
                hover:bg-sky-700 hover:border-sky-700 hover:text-white 
                focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                active:bg-slate-200 active:text-sky-500">
                    contact me<MdEmail />
                </Link>
                <Link 
                href="#projects"
                className ="flex items-center gap-2 w-30
                border-slate-600 bg-slate-800 px-6 py-3 
                text-sm font-medium text-white 
                hover:bg-slate-700 hover:border-slate-500 hover:text-sky-400 
                focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 
                active:bg-slate-200 active:text-sky-500">
                    projects<FaCode />
                    
                </Link>



        </motion.div>
    </section>
  )
}
