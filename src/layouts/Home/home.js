import './home.css'
import { motion, buttonVariants, iconVariants } from "framer-motion"

function home(props) {
    return(
        <div id='home' className='h-3/4 sm:h-screen m-8'>
            <div className='flex flex-col'>
                <h4 className='text-4xl sm:text-6xl md:text-6xl xl:text-8xl font'>{props.name}</h4>
                <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-4xl font">
                    {props.role}
                </h1>
                <p className='text-lg mt-3 font'>{props.discription}</p>
                <motion.button className='mt-5'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >Resume</motion.button>
            </div>
        </div>
    )
}

export default home;