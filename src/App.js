import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './layouts/Home/home'
import About from './layouts/About/about'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
import Projects from './layouts/Projects/Projects';
import Social from './components/Socials/Social';
import svg1 from "./asset/linkedin.svg";
import svg2 from "./asset/github.svg";

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


function App() {
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener("mousemove", mouseMove);
  
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y
    }
  }
  
  return (
    <div className='flex flex-row bg-slate-900'>
      <Social/>
      <motion.div className='hidden lg:block circle' 
       variants={variants}
       animate="default"
       transition={{type: "tween" }}
      />

        
      <section className='flex flex-col w-full font '> 
        <div className='h-screen'>
          <Navbar/>
          <Home 
            name="Bhumit Patel"
            role="Software Developer"
            discription="Experienced software developer passionate about create efficient and scalable applications."
          />
        </div>
          <About/>
          <Projects/>
          <footer>
            <div className='flex justify-center items-center lg:hidden'>
            {Socials.map((social, index) => {
              return (
                <a href={social.link} className="pr-4 pb-2" key={index}>
                                  <img src={social.icon} alt={`Social icon ${index}`} />
                          </a>
                      );
                    })}
              </div>
              <a href="mailto:bhumit667@gmail.com" className="flex justify-center pb-2 lg:hidden">bhumit667@gmail.com</a>
            <p className='flex w-full justify-center pb-5'>&copy; 2024 Bhumit. All rights reserved.</p>
          </footer>
      </section>
    </div>
  );
}

export default App;
