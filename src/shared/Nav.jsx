import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='p-2'>
            <div className='my-container'>
                <div className='md:flex justify-between items-center gap-2 py-2'>
                    <div>
                        <Link to="/"><h2 className='text-2xl font-semibold'>Welcome Here !</h2></Link>
                    </div>
                    <div className='grow'>
                        <ul className='md:flex justify-end gap-2'>
                            <li className=''><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Resume</a></li>
                        </ul>
                    </div>
                    <div className='text-end'>
                        <button className='py-2 px-4 inline bg-green-500 text-white font-medium hover:bg-black transition'>Hire Me !</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;