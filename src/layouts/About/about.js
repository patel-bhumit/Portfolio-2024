
import { motion, useInView } from 'framer-motion';
import './about.css'
import { useRef } from 'react';

const aboutData = ["Hello I'm Bhumit. I a student at Conestoga College studying Software Engineering Technician. I am a passionatesoftware developer with a strong foundation in programmingand software development. I am always looking for new opportunities to learn and grow as a developer.",
"So far i have tried Game Development, Web Development, Mobile Development, Windows Programing and many more. I am always looking for new opportunities to learn and grow as a developer. I also have keen interest in Cyber Security. Learning about new technologies and how to secure them is always fun.",
 "Here are some technologies I have worked with:" 
]

const technologies = ["C/C++", "C#", "JavaScript", "Ract.JS", ".NET Framewok", "ASP.NET", "Java", "Entity Framework", "SQL", "Python"]
                
function About() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});

    return(
        <motion.div
        ref={ref}
        initial={{ scale: 0, x: 100, opacity: 0}}
        animate={{ scale: inView ? 1 : 0, x: inView ? 0 : 100, opacity: inView ? 1 : 0}}
        transition={{ type: 'spring', stiffness: 50, duration: 1, ease: "easeInOut", bounce: 0.5 }}
        id='about' className='flex flex-col justify-center items-center max-h-max lg:h-screen'>
                <h2 className="text-center text-3xl font-bold">About</h2>
                <div className='flex flex-col md:flex-row w-full sm:w-2/4 lg:w-3/4  p-9'>
                    <div className='pr-0 lg:pr-10'>
                    {aboutData.map((data, index) => {
                        return (
                            <div>
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
                <img src='https://dummyimage.com/600x800/000/fff' className='w-1/3 h-1/3 mt-5'/>
                </div>
        </motion.div>
    )
}

export default About;