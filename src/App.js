import './App.css';
import Navbar from './components/navbar';
import Home from './components/home'
import About from './components/about'
import { animate, motion, useMotionValue } from "framer-motion"
import { useCursor } from '@react-three/drei';
import { useEffect, useState } from 'react';

function App() {
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

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
    <div className='page'>
      <motion.div className='circle' 
       variants={variants}
       animate="default"
       transition={{type: "Inertia"}}
      />
      
    <Navbar />
      <div className='foreground'>
        <Home />
        <About/>
      </div>
    </div>
  );
}

export default App;
