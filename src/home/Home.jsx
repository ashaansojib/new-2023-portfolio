import React from 'react';
import Header from '../shared/Header';
import Service from '../pages/services/Service';
import Project from '../pages/projects/Project';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Project />
        </div>
    );
};

export default Home;