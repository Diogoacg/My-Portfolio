import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";

// Local Data
import data from "../data/portfolio.json";
import ProjectCard from "../components/WorkCard";

export default function Home() {
  // Ref
  const projectsRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleProjectsScroll = () => {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative`}>
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle-top animate-pulse"></div>
      <div className="gradient-circle-bottom animate-pulse"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleProjectsScroll={handleProjectsScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="mt-10 laptop:mt-20 p-2 laptop:p-0">
          <div className="flex flex-col items-center">
            <div className="group cursor-pointer">
              {[data.headerTaglineOne, data.headerTaglineTwo].map(
                (tagline, index) => (
                  <h1
                    key={index}
                    className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-full transform transition-all duration-500 text-gradient bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    {tagline}
                  </h1>
                )
              )}
            </div>
          </div>
        </div>

        {/* About Me Section About me title should be way bigger*/}
        <div className="mt-40 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-4xl text-bold">About Me</h1>
          <h2 className="text-2xl mt-5">{data.abouttitle}</h2>
          <p className="w-5/5 text-xl mt-5 opacity-100">{data.aboutpara}</p>
        </div>

        <div className="mt-20 laptop:mt-30 p-2 laptop:p-0" ref={projectsRef}>
          <h1 className="tablet:m-10 text-4xl text-bold">Projects</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
