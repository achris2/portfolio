"use client";

import React, { useEffect } from 'react'; 
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.75, 
    });
    const { setActiveSection } = useActiveSectionContext();

    useEffect(() => {
        if (inView) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection]); 
    
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
