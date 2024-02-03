import './navbar.css';
import logo from '..//..//asset/logo-white.png'
import { useState } from 'react';

const navItems = [
    "Home",
    "Projects",
    "About",
    "Contact"
]



function NavbarItem() {
    return (
        <div className='flex justify-between'>
            <img className='h-14 items-center m-6' src={logo}/>
            <ul className='flex items-center m-10'>
            {navItems.map((Item, index) => {
                return(
                <li key={index}
                className="relative text-2xl w-fit block after:block after:content-[''] 
                after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 
                after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
                ml-16
                "
                >
                    {Item}
                </li>
                )
            })}
            </ul>
        </div>
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