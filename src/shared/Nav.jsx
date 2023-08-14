import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    const [scrollBg, setScrollBg] = useState(false);
    const handleScroll = () =>{
        if(window.scrollY > 0){
            setScrollBg(true);
        }else{
            setScrollBg(false)
        }
    }
    useEffect( ()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <nav className={`p-2 sticky top-0 z-10 border-b border-gray-600 ${scrollBg ? 'bg-[#003d63] border-none transition' : ''}`}>
            <div className='my-container'>
                <div className='md:flex justify-between items-center gap-2 py-2'>
                    <div>
                        <Link to="/"><h2 className='text-2xl font-semibold'>Sojib</h2></Link>
                    </div>
                    <div className='grow'>
                        <ul className='md:flex justify-end gap-2'>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/">Home</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/resume">Resume</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/project">Project</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/about">About Me</NavLink>
                            <NavLink className={({isActive}) => isActive ? 'active' : 'default'} to="/contact">Contact</NavLink>
                        </ul>
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