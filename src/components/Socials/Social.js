import { motion } from "framer-motion";
import linkedin from '../../asset/linkedin.svg';

const Socials = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/roberto-ramos-5b4a0b1b9/",
        icon: "https://img.icons8.com/color/48/000000/linkedin.png"
    },
    {
        id: 2,
        name: "GitHub",
        link: "",
        icon: "https://img.icons8.com/color/48/000000/github--v1.png"
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
                <div className="h-1/6 bg-cyan-500 w-1"></div>
            </motion.div>
            <motion.div
            initial={{ y: 1000, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ type: 'tween', stiffness: 50, duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex md:fixed justify-end flex-col h-screen items-center pr-7 end-0">
                <p className="rotate-90 w-10 mb-40">bhumit667@gmail.com</p>
                <div className="h-1/6 bg-cyan-500 w-1"></div>
            </motion.div>
        </div>
    )
}

export default Social;