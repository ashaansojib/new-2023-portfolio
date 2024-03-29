import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../shared/Header';
import Service from '../pages/services/Service';
import Project from '../pages/projects/Project';
import Resume from '../pages/resume/Resume';
import HireMe from '../pages/hireMe/HireMe';
import Contact from '../pages/contact/Contact';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Header />
            <Service />
            <Project />
            <Resume />
            <HireMe />
            <Contact />
        </>
    );
};

export default Home;