"use client";

import React from 'react'; 
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About", 0.5); 
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[30rem] text-center leading-10 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            id="about"

        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus autem ex enim vero quod recusandae id modi ipsa doloremque nihil velit repellat fuga nesciunt vitae aliquid adipisci, distinctio, illum ratione?
            </p>
      
        </motion.section>
  )
}
