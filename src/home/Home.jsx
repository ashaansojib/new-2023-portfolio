import React from 'react';
import Header from '../shared/Header';
import Service from '../pages/services/Service';
import Project from '../pages/projects/Project';
import Resume from '../pages/resume/Resume';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Project />
            <Resume />
        </div>
    );
};

export default Home;