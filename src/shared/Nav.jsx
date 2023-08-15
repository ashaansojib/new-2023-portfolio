import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
const Nav = () => {
    const [responsive, setResponsive] = useState(true);
    const [scrollBg, setScrollBg] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrollBg(true);
        } else {
            setScrollBg(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleBars = () =>{
        setResponsive(!responsive)
    }
    return (
        <nav className={`sticky top-0 z-10 border-b border-gray-600 ${scrollBg ? 'bg-[#003d63] border-none transition' : ''}`}>
            <div className='my-container'>
                <div className='flex justify-between items-center gap-2 p-2'>
                    <div className='h-[58px]'>
                        <Link to="/"><img src="/LogoMakr-32wxDu.png" alt="" /></Link>
                    </div>
                    <div onClick={handleBars}>
                    {
                        responsive ? <FaBars className='nav-icon' /> : <FaTimes className='nav-icon' />
                    }
                    </div>
                    <div className={`nav-menu ${responsive ? 'hidden' : 'block absolute top-20 left-0 p-2 w-[250px] bg-gray-400'}`}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/project">Project</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/about">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active' : 'default'} to="/contact">Contact</NavLink>
                        </li>
                    </div>
                    {/* <div className='text-end'>
                        <button className='py-2 px-4 inline bg-green-500 text-white font-medium hover:bg-black transition'>Hire Me !</button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Nav;