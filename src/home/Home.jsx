import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../shared/Header';
import Service from '../pages/services/Service';
import Resume from '../pages/resume/Resume';
import HireMe from '../pages/hireMe/HireMe';
import Contact from '../pages/contact/Contact';
import Projects from '../pages/projects/Projects';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Header />
            <Service />
            <Projects />
            <Resume />
            <HireMe />
            <Contact />
        </>
    );
};

export default Home;