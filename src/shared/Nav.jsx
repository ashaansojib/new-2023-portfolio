import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    // this state check first which section is activated now and set this section nav item color to indicate
    const [activeSection, setActiveSection] = useState("home")
    // check responsive value and store it
    const [responsive, setResponsive] = useState(true);
    // control the nav backgroud when scrolling
    const [scrollBg, setScrollBg] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollBg(window.scrollY > 0);
            // Array of section IDs
            const sections = ['home', 'services', 'projects', 'resume', 'hireMe', 'contact'];
            let activeSection = 'home';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const boundary = element.getBoundingClientRect();
                    if (boundary.top <= 150 && boundary.bottom >= 150) {
                        // 150 is a threshold value you can adjust based on your fixed header height or your preference
                        activeSection = section;
                        break;
                    }
                }
            }
            setActiveSection(activeSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it to set the initial section
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBars = () => {
        setResponsive(!responsive);
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`sticky top-0 z-50 border-gray-600 ${scrollBg ? 'bg-[#003d63] border-none transition-all' : ''}`}>
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
                    <div className={`nav-menu ${responsive ? 'hidden' : 'block absolute top-[74px] left-0 p-2 w-[250px] bg-gray-600'}`}>
                        {['home', 'services', 'projects', 'resume', 'hireMe', 'contact'].map((section) => (
                            <a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => handleNavClick(e, section)}
                                className={`${activeSection === section ? 'active' : 'default'}`}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;