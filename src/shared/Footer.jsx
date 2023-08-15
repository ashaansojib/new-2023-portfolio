import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#003D63] p-6'>
            <div className="my-container md:flex md:justify-between justify-center text-center">
                <p>Copyright 2023, Develop By Ashaduzzaman Sojib</p>
                <div>
                    <ul className='flex gap-2 justify-center'>
                        <Link to="/">Home |</Link>
                        <Link to="/">About Me |</Link>
                        <Link to="/">Hobies |</Link>
                        <Link to="/">Blogs</Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;