"use client";

import React from 'react'; 
import SectionHeading from './section-heading';
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section className="mb-28 max-w-[30rem] text-center leading-10 sm:mb-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus autem ex enim vero quod recusandae id modi ipsa doloremque nihil velit repellat fuga nesciunt vitae aliquid adipisci, distinctio, illum ratione?
            </p>
      
        </motion.section>
  )
}
