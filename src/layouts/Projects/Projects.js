import { motion, useInView, useMotionValue } from 'framer-motion';
import './Projects.css';
import { useRef, useState } from 'react';

const ProjectsList = [
    {
        name: "Transportation Management System",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "Designed and developed a robust Transportation Management System (TMS) using WPF, Entity Framework,and MySQL.",
        technologies: ["C#", "SQL", ".NET Framework"],
        link: "https://github.com/patel-bhumit/TermProject"
    },
    {
        name: "AI Helper",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "Developed an AI assistant to help users to summerize daily tasks using React, Firebase, and Palm AI.",
        technologies: ["React", "Firebase", "Palm AI"],
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
        <div className="container my-24 mx-auto p-2 md:px-6 align-middle">
            <section className=" text-center lg:text-left">
                <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
                <div className="grid p-5 gap-x-6 lg:grid-cols-3">
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
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 1, ease: "easeInOut", bounce: 0.5 }}
            className="mb-12 lg:mb-14 p-5 md:p-10 backdrop-blur-3xl bg-slate-800 bg-transparent shadow-xl align-middle"
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
                        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white mr-4" key={index}>{technology}</span>
                    ))}
                </div>
                <p className="text-cyan-300">{project.description}</p>
                <a href={project.link} className="mt-4 text-primary-500 dark:text-primary-400 hover:underline">View Project</a>
            </div>
        </motion.div>
    );
}


function Projects() {
    return (
        <div className="Projects h-max align-middle">
            <ProjectCards/>
        </div>
    );
}

export default Projects;

