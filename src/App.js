import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './layouts/Home/home'
import About from './layouts/About/about'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react';

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
    <div className='flex flex-row'>
      <motion.div className='circle' 
       variants={variants}
       animate="default"
       transition={{type: "tween" }}
      />

      <div className='fixed top-0 ml-10'>
        <Navbar />
      </div>

      <div className='flex flex-col ml-40'> 
        <Home />
        <About/>
      </div>
    </div>
  );
}

export default App;
