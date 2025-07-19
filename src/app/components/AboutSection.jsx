"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <CodeBracketIcon className="icon-base" />,
    content: (
      <div className="skills-grid">
        {[
          "Java",
          "Rust",
          "Python",
          "C/C++/C#",
          "Solidity",
          "GDScript",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express.js",
          "Tailwind CSS",
          "HTML/CSS",
          "Git/GitHub",
          "PostgreSQL",
          "Supabase",
        ].map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="skill-item group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
            />
            <span className="skill-text">{skill}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <AcademicCapIcon className="icon-base" />,
    content: (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
        <div className="about-content-display relative ml-8">
          <div className="absolute -left-6 top-8 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900" />
          <h3 className="responsive-text-lg font-bold text-white mb-2">
            BSc in Software Engineering
          </h3>
          <p className="text-purple-300 font-medium mb-1">
            Universidade do Minho, Braga
          </p>
          <p className="text-gray-400">2020 - Present</p>
        </div>
      </motion.div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: <BriefcaseIcon className="icon-base" />,
    content: (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
        <div className="about-content-display relative ml-8">
          <div className="absolute -left-6 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
          <h3 className="responsive-text-lg font-bold text-white mb-2">
            Part-Time Software Developer
          </h3>
          <p className="text-blue-300 font-medium mb-1">Cognitage, Braga</p>
          <p className="text-gray-400 mb-3">December 2022 - July 2025</p>
          <p className="text-gray-300 leading-relaxed">
            Worked on AI, Blockchain and Full Homomorphic Encryption projects.
          </p>
        </div>
      </motion.div>
    ),
  },
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
    <section
      id="about"
      className="about-container relative overflow-hidden section-transparent"
    >
      <div className="relative z-10 container mx-auto responsive-padding">
        <div className="about-grid">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center mb-12 md:mb-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-3xl border-2 border-dashed border-purple-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 rounded-3xl border border-blue-500/10"
              />

              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl"
              />

              <div className="about-image">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600 via-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-900">
                    <Image
                      src="/images/myself2.jpeg"
                      width={500}
                      height={500}
                      alt="About Me"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [0, 180, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="about-image-floating absolute bg-purple-500 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [8, -8, 8], rotate: [360, 180, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500 rounded-full opacity-40"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <div className="responsive-space-y">
              <motion.h2
                className="about-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="block text-white">ABOUT</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  MYSELF
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
              <p className="about-text">
                I am a Software Engineering student with a solid foundation in
                mathematics. I am eager to learn and grow, and I am always ready
                to take on challenging opportunities that will allow me to
                further develop my skills.
                <span className="text-purple-400 font-semibold">
                  {" "}
                  Building the future, one line at a time.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="about-tabs"
            >
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
            </motion.div>

            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="about-content-display"
            >
              {activeTabData.content}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
