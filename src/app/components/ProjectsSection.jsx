"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  BeakerIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

const projectsData = [
  {
    id: 1,
    title: "VerseRunners",
    description: "A single-player, platformer, speedrunning game",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/GameDemo_VerseRunners",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "F1 Data",
    description: "A Formula 1 data visualization project",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/F1Data",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "IA Project",
    description: "University project for the IA course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/IA",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "POO Project",
    description:
      "University project for the POO (Object-oriented programming) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/POO",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "SO Project",
    description: "University Operating Systems project",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/SO",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "Portfolio (this website)",
    description: "My personal portfolio website",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/My-Portfolio",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 7,
    title: "A Coffee Manager App",
    description:
      "A coffee shop management app (React Native + Expo, still in progress)",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/Willows",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
  {
    id: 8,
    title: "CG Project",
    description: "University project for the CG (Computer Graphics) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/CG24-main",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 9,
    title: "SD Project",
    description: "University project for the SD (Distributed Systems) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/SD",
    icon: <AcademicCapIcon className="h-5 w-5" />,
  },
  {
    id: 10,
    title: "F1 Hub",
    description:
      "A Formula 1 web application with AI and data visualization (Hackathon project)",
    tag: ["All", "Hackathons"],
    gitUrl: "https://github.com/Diogoacg/F1Hub-Hackathon-BugsByte",
    icon: <LightBulbIcon className="h-5 w-5" />,
  },
  {
    id: 11,
    title: "BiteFinder",
    description: "Food discovery and restaurant finder app (Hackathon project)",
    tag: ["All", "Hackathons"],
    gitUrl: "https://github.com/Diogoacg/bitefinder",
    icon: <LightBulbIcon className="h-5 w-5" />,
  },
  {
    id: 12,
    title: "MyGymApp",
    description: "Personal fitness tracking and gym management application",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/MyGymApp",
    icon: <CodeBracketIcon className="h-5 w-5" />,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Floating particles for background
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 8,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden section-transparent"
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-30, -80, -30],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Title with futuristic styling */}
          <motion.h2
            className="text-5xl lg:text-6xl font-black leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-white">MY</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </motion.h2>

          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <CodeBracketIcon className="w-6 h-6 text-purple-400" />
            </motion.div>
            <div className="h-[1px] w-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"></div>
            <motion.div
              animate={{ rotate: [360, 270, 180, 90, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <CodeBracketIcon className="w-6 h-6 text-blue-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center py-6 gap-4 mb-12"
        >
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            icon={<CodeBracketIcon className="h-5 w-5" />}
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="University"
            icon={<AcademicCapIcon className="h-5 w-5" />}
            isSelected={tag === "University"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Individual"
            icon={<BeakerIcon className="h-5 w-5" />}
            isSelected={tag === "Individual"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Hackathons"
            icon={<LightBulbIcon className="h-5 w-5" />}
            isSelected={tag === "Hackathons"}
          />
        </motion.div>

        {/* Projects Grid */}
        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                icon={project.icon}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
