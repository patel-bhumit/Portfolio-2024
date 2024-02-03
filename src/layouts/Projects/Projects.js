import { motion, useMotionValue } from 'framer-motion';
import './Projects.css';
import { useState } from 'react';


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
    return(
        <div className='block items-center p-14 justify-between sm:flex flex-col flex-wrap sm:felx-col sm:flex-wrap md:flex-wrap md:flex-row lg:flex-row lg:flex-wrap w-full  '>
        { ProjectsList.map((project, index) =>{
            return(
        <div key={index} className='w-full p-5 sm:w-1/2 lg:1/2 xl:w-1/3' >
        <div className=' m-5 sm:m-5 md-10 max-w-full'>
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url('${project.image}')` }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                           { project.technologies.map((technology, index) => {
                                return(
                                    <img key={index} src={technology} alt={technology} className='mr-2' />
                                );
                            })}
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">{project.name}</div>
                    </div>
                    <div className="flex items-center ">
                        <img className="w-10 h-10 rounded-full mr-4" src={project.image} alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">{project.associated}</p>
                            <p className="text-gray-600">{project.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>);
        })
        }
        </div>
    );
}




function Projects() {
    return (
        <div className="Projects">
            <h1 className='text-2xl place-content-center sm:text-4xl md:text-4xl xl:text-4xl '>Projects</h1>
            <ProjectCards/>
        </div>
    );
}

export default Projects;


