import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './layouts/Home/home'
import About from './layouts/About/about'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
import Projects from './layouts/Projects/Projects';
import Social from './components/Socials/Social';

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
      <motion.div className='hidden lg:block circle transform-gpu' 
       variants={variants}
       animate="default"
       transition={{type: "tween" }}
      />

        
      <div className='flex flex-col w-full font'> 
        <div className='h-screen'>
          <Navbar/>
          <Home 
            name="Bhumit Patel"
            role="Software Developer"
            discription="Experienced software developer passionate about create efficient and scalable applications."
          />
        </div>
        <section id='about' className='h-max lg:h-screen'>
          <About/>
        </section>
        <section id='projects' className='h-fit'>
        <Projects/>
        </section>
        <p className='flex w-full justify-center pb-10'>&copy; 2024 Bhumit. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
