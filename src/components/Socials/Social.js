import { motion } from "framer-motion";
import svg1 from "../../asset/linkedin.svg"
import svg2 from "../../asset/github.svg" 

const Socials = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bhumitkumar-patel/",
        icon: svg1
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/patel-bhumit",
        icon: svg2
    },
    
];

function Social(){
    return (
        <div>
            <motion.div
            initial={{ y: 1000, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ type: 'tween', stiffness: 50, duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex md:fixed justify-end flex-col h-screen items-center pl-7">
                {Socials.map((social, index) => {
                    return (
                        <a href={social.link} className="mb-10" key={index}>
                                <img src={social.icon} alt={`Social icon ${index}`} />
                        </a>
                    );
                })}
                <div className="h-1/6 bg-cyan-500 w-0.5"></div>
            </motion.div>
            <motion.div
            initial={{ y: 1000, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ type: 'tween', stiffness: 50, duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex md:fixed justify-end flex-col h-screen items-center pr-7 end-0">
                <a href="mailto:bhumit667@gmail.com" className="rotate-90 w-10 mb-40">bhumit667@gmail.com</a>
                <div className="h-1/6 bg-cyan-500 w-0.5"></div>
            </motion.div>
        </div>
    )
}

export default Social;