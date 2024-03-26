"use client"; 
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const { ref } = useSectionInView("Contact"); 

    return (
      <section id="contact" ref={ref} className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
          <SectionHeading>Contact Me</SectionHeading>
          <p> Feel free to get in touch directly <a className="underline" href="mailto:hi@alexchristakou.com">here</a>, or connect with me on <a className="underline" href="https://www.linkedin.com/in/alexchristakou/">LinkedIn</a>. 
              </p>
          
      </section>
  )
}
