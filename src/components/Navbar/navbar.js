import './navbar.css';
import logo from '..//..//asset/logo-white.png';
import { motion } from 'framer-motion';

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" }
];



function NavbarItem() {
    return (
        <motion.div 
        initial={{ y: -100, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{ type: 'spring', stiffness: 50, duration: 1, ease: "easeInOut", bounce: 0.5 }}
        className='flex justify-between'>
            <img className='h-14 items-center m-6' src={logo} alt='logo'/>
            <ul className='flex items-center m-10'>
            {navItems.map((item, index) => {
                return(
                    <li key={index} className="relative text-base w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-cyan-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ml-16">
                        <a href={`#${item.id}`} className="hover:text-cyan-500">{item.name}</a>
                    </li>
                )
            })}
            </ul>
        </motion.div>
    );  
}

function Navbar(){

    return(
    <div className='navbar hidden lg:block'>
        <NavbarItem/>
    </div>
    );
}

export default Navbar;