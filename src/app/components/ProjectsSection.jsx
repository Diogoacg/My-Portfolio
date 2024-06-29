"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "VerseRunners",
    description: " A single-player, platformer, speedrunning game",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/GameDemo_VerseRunners",
  },
  {
    id: 2,
    title: "F1 Data",
    description: " A Formula 1 data visualization project",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/F1Data",
  },
  {
    id: 3,
    title: "IA Project",
    description: "University project for the IA course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/IA",
  },
  {
    id: 4,
    title: "POO Project",
    description:
      "University project for the POO (Object-oriented programming) course",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/POO",
  },
  {
    id: 5,
    title: "SO Project",
    description: "University Operating Systems project",
    tag: ["All", "University"],
    gitUrl: "https://github.com/Diogoacg/SO",
  },
  {
    id: 6,
    title: "Portfolio (this website)",
    description: " My personal portfolio website",
    tag: ["All", "Individual"],
    gitUrl: "https://github.com/Diogoacg/My-Portfolio",
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

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="University"
          isSelected={tag === "University"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Individual"
          isSelected={tag === "Individual"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
