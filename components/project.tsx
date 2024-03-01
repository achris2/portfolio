"use client";

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef(null);
    useScroll({
        target: '',
        offset: ["0 1", "1.33 1"]
    });
    return (
        <section className="group bg-slate-50 max-w-[42rem] border border-slate-300/[5] overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0
        even:pl-8 hover:bg-slate-200 transition">
            <div className="flex flex-col h-full pt-4 pb-8 sm:pl-10 sm: pr-2 sm:pt-10 sm:max-w-[50%] group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
                <ul className="flex flex-wrap gap-2 sm: mt-auto">
                    {tags.map((tag, index) => (
                        <li className="bg-slate-950/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full " key={index}>{tag}</li>
                    ))}
                    </ul>
            </div>
            <Image
                src={imageUrl}
                alt={title}
                className="absolute top-8 -right-40 w-[28.25rem] 
                rounded-t-lg shadow-xl shadow-slate-600 
                transition
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                group-hover:scale-[1.05]
                group-even:group-hover-translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                group-even:-right-[initial] group-even:-left-40"
            />
   
        </section>
    );
}