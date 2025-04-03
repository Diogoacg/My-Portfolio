"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <CodeBracketIcon className="h-6 w-6" />,
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Java</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Rust</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Python</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>C/C++/C#</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Solidity</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>GDScript</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>JavaScript</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>React</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Next.js</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Node.js</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Express.js</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Tailwind CSS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>HTML/CSS</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Git/GitHub</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>PostgreSQL</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[rgb(var(--primary))]"></span>
          <span>Supabase</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <AcademicCapIcon className="h-6 w-6" />,
    content: (
      <ul className="space-y-4">
        <li className="border-l-2 border-[rgb(var(--primary))] pl-4 py-2">
          <div className="flex flex-col">
            <span className="font-medium text-lg">BSc in Software Engineering</span>
            <span className="text-sm text-[rgb(var(--muted-foreground))]">Universidade do Minho, Braga</span>
            <span className="text-sm text-[rgb(var(--muted-foreground))]">2020 - Present</span>
          </div>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: <BriefcaseIcon className="h-6 w-6" />,
    content: (
      <ul className="space-y-4">
        <li className="border-l-2 border-[rgb(var(--primary))] pl-4 py-2">
          <div className="flex flex-col">
            <span className="font-medium text-lg">Part-Time Software Developer</span>
            <span className="text-sm text-[rgb(var(--muted-foreground))]">Cognitage, Braga</span>
            <span className="text-sm text-[rgb(var(--muted-foreground))]">2022 - Present</span>
            <p className="mt-2 text-sm">Worked on AI, Blockchain and Full Homomorphic Encryption projects.</p>
          </div>
        </li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <section id="about" className="py-16">
      <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:py-8 xl:px-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <div className="rounded-xl overflow-hidden border-4 border-[rgb(var(--card))] shadow-xl">
            <Image
              src="/images/myself2.jpeg"
              width={500}
              height={500}
              alt="About Me"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 md:mt-0 flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-[rgb(var(--foreground))] text-base lg:text-lg mb-6">
            I am a Software Engineering student with a solid foundation in
            mathematics. I am eager to learn and grow, and I am always ready to
            take on challenging opportunities that will allow me to further
            develop my skills. I am confident that my strong technical
            abilities, coupled with my dedication and passion for learning, make
            me an asset in any software development environment. I am looking
            forward to working alongside experienced professionals in the field
            and contributing to innovative projects.
          </p>
          
          <div className="flex flex-row justify-start mt-4 space-x-4 overflow-x-auto pb-2">
            {TAB_DATA.map((item) => (
              <TabButton
                key={item.id}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
                icon={item.icon}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          
          <div className="mt-6 text-[rgb(var(--foreground))] bg-[rgb(var(--card))] p-4 rounded-lg border border-[rgb(var(--border))]">
            {activeTabData.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;