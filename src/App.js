import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './layouts/Home/home'
import About from './layouts/About/about'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';
import Projects from './layouts/Projects/Projects';

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
    <div className='flex flex-row '>
      <motion.div className='circle' 
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
        <Projects className='h-screen'/>
        <About/>
      </div>
    </div>
  );
}

export default App;
