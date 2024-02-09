
import { motion, useInView } from 'framer-motion';
import './about.css'
import { useRef } from 'react';
import image from '..//..//asset/IMG_2716.JPG'

const aboutData = ["Hello I'm Bhumit. I a student at Conestoga College studying Software Engineering Technician. I am a passionatesoftware developer with a strong foundation in programmingand software development. I am always looking for new opportunities to learn and grow as a developer.",
"So far i have tried Game Development, Web Development, Mobile Development, Windows Programing and many more. I am always looking for new opportunities to learn and grow as a developer. I also have keen interest in Cyber Security. Learning about new technologies and how to secure them is always fun.",
 "Here are some technologies I have worked with:" 
]

const technologies = ["C/C++", "C#", "JavaScript", "Ract.JS", ".NET Framewok", "ASP.NET", "Java", "Entity Framework", "SQL", "Python"]
                
function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref);

    return(
        <motion.div
        ref={ref}
                initial={{ opacity: 0, x: -100}}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100}}
                transition={{ type: 'tween', duration: 0.5}}
                id='about' className='flex flex-col h-max lg:h-screen justify-center items-center transform-gpu mt-20'>
                <h2 className="text-center text-3xl font-bold">About</h2><div className='w-fit h-1 fill-cyan-500' />
                <div 
                className='flex flex-col lg:flex-row w-full sm:w-3/5 md:w-3/5 lg:w-3/5  p-9'>
                    <div className='pr-0 lg:pr-10'>
                    {aboutData.map((data, index) => {
                        return (
                            <div
                            >
                                <p className='text-xs md:text-lg ' key={index}>{data}</p><br/>
                            </div>
                        );
                    })
                    }
                    <ul className='grid grid-cols-2 ml-5' style={{listStyleType: 'circle'}}>
                        {technologies.map((technology, index) => {
                            return (
                                <li key={index}>{technology}</li>
                            );
                        })}
                    </ul>
                    </div>
                    <img src={image} alt="Bhumit Patel" className='w-3/5 h-3/5 md:w-2/4 md:h-2/4  lg:size-72 mt-5 rounded-sm self-center'/>
                </div>
        </motion.div>
    )
}

function About() {
    return(
        <div>
            <AboutSection/>
        </div>
    )
}

export default About;