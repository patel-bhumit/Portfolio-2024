import { motion, useInView, useMotionValue } from 'framer-motion';
import './Projects.css';
import { useRef, useState } from 'react';


const ProjectsList = [
    {
        name: "AI-Helper",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        technologies: ["React", "HTML", "CSS"],
        link: "github.com"
    },
    {
        name: "E-commerce Website",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        link: "github.com"
    },
    {
        name: "Portfolio Website",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "github.com"
    },
    {
        name: "Portfolio Website",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "github.com"
    }
];

function ProjectCards() {
    return (
        <div className="container my-24 mx-auto p-2 md:px-6">
            <section className="mb-32 text-center lg:text-left">
                <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
                <div className="grid gap-x-6 lg:grid-cols-3">
                    {ProjectsList.map((project, index) => {
                        return (
                            <ProjectCard key={index} project={project} />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

function ProjectCard({ project }) {
    const ref = useRef(null);
    const inView = useInView(ref);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ x: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 0.5, ease: "easeInOut", bounce: 0.5 }}
            className="mb-12 lg:mb-0"
        >
            <div>
                <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]" data-te-ripple-init data-te-ripple-color="light">
                    <img src={project.image} className="w-full" alt={project.name} />
                    <a href="#!">
                        <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                    </a>
                </div>
                <h5 className="mb-4 text-lg font-bold">{project.name}</h5>
                <div className="mb-4 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                    {project.technologies.map((technology, index) => (
                        <img key={index} src='#' alt={technology} className="w-5 h-5 mr-2" />
                    ))}
                </div>
                <p className="text-neutral-800">{project.description}</p>
            </div>
        </motion.div>
    );
}


function Projects() {
    return (
        <div className="Projects">
            <ProjectCards/>
        </div>
    );
}

export default Projects;

