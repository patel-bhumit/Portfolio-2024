import './home.css'
import { motion } from "framer-motion"

function DownloadResume(){
   //download resume from local storage
    const resume = require('../../asset/BhumitPatel_Resume.pdf');
    window.open(resume);
}

function home(props) {
    return(
        <div 
        id='home' className='h-full sm:h-full md:h-full lg:h-3/4 m-8 p-8'>
            <motion.div
            initial={{ x: -100, opacity: 0}}
            animate={{ x: 0, opacity: 1}}
            transition={{ type: 'spring', stiffness: 50, duration: 1, ease: "easeInOut", bounce: 0.5, delay: 0.5}}
            className='flex flex-col'>
                <h4 className='text-4xl sm:text-6xl md:text-6xl xl:text-8xl font'>{props.name}</h4>
                <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-4xl font">
                    {props.role}
                </h1>
                <p className='text-base mt-3 font'>{props.discription}</p>
                <motion.button className='mt-10 bg-transparent border-solid border border-cyan-500 rounded-none hover:bg-cyan-500'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={DownloadResume}
                >Resume</motion.button>
            </motion.div>
        </div>
    )
}

export default home;