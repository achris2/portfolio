import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import comingsoonImg from "@/public/coming-soon.jpeg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
    // {
    //   name: "Experience",
    //   hash: "#experience",
    // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "edX Web Development Bootcamp",
    location: "London, United Kingdom",
    description:
      "Front end web development bootcamp", 
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "MA Commercial Real Estate",
    location: "Sheffield, United Kingdom",
    description:
      "Masters in Commercial Real Estate", 
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "BEng Civil Engineering, University of Sheffield",
    location: "Sheffield, United Kingdom",
    description:
      "BEng in Civil Engineering",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Project 1",
    description:
      "Coming soon! I'm working on this project and will be posting it soon.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: comingsoonImg ,
  },
  {
    title: "Project 2",
    description:
      "Coming soon! I'm working on this project and will be posting it soon.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: comingsoonImg ,
  },
  {
    title: "Project 3",
    description:
      "Coming soon!",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: comingsoonImg ,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React JS",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Bootstrap",
  "Matlab",
  "R",
  "Python",
  "Framer Motion",
] as const;