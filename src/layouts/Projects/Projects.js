import { motion, useInView } from 'framer-motion';
import './Projects.css';
import { useRef } from 'react';
import icon from '../../asset/folder.svg';

const ProjectsList = [
    {
        name: "Transportation Management System",
        description: "Designed and developed a robust Transportation Management System (TMS) using WPF, Entity Framework,and MySQL.",
        technologies: ["C#", "SQL", ".NET Framework", "WPF"],
        link: "https://github.com/patel-bhumit/TermProject"
    },
    {
        name: "AI Helper",
        description: "Developed an AI assistant to help users to summerize daily tasks using React, Firebase, and Palm AI.",
        technologies: ["React", "Firebase", "Palm AI"],
        link: "https://github.com/patel-bhumit/ai_helper"
    },
    {
        name: "Sorting Visualizer",
        description: "Developing a web application to visualize sorting algorithms using React.js, CSS, and JavaScript.",
        technologies: ["React.js", "In Progress"],
        link: "github.comhttps://github.com/patel-bhumit"
    }
];



function ProjectCards() {
    return (
        <div className="container py-24 mx-auto p-2 md:px-8 align-middle h-max lg:h-screen">
            <section className=" text-center lg:text-left">
                <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
                <div className="grid p-5 gap-x-6 lg:grid-cols-3 justify-center">
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
    const inView = useInView(ref, {once: true});

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 50, duration: 1, ease: "easeInOut", bounce: 0.5 }}
            className="mb-12 lg:mb-14 p-5 md:p-10 backdrop-blur-sm bg-cyan-950 shadow-2xl align-middle"
        >
            <div>
                <div className="relative mb-6 overflow-hidden rounded-lg" data-te-ripple-init data-te-ripple-color="light">
                    <img src={icon} alt={"Icon" + project}  className="size-8 object-cover fill-cyan-500" style={{color: '#06b6d4'}} />
                </div>
                <h5 className="mb-4 text-lg font-bold">{project.name}</h5>
                <div className="mb-4 flex flex-wrap items-center justify-center text-sm font-medium text-danger dark:text-danger-500 lg:justify-start">
                    {project.technologies.map((technology, index) => (
                        <span class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:text-white mr-4" key={index}>{technology}</span>
                    ))}
                </div>
                <p className="text-cyan-300">{project.description}</p>
                <br/>
                <a href={project.link} className="mt-4 text-cyan-400 hover:underline">View Project</a>
            </div>
        </motion.div>
    );
}


function Projects() {
    return (
        <div>
            <ProjectCards/>
        </div>
    );
}

export default Projects;

