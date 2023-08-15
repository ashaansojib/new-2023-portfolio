import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // console.log(projects)
    return (
        <section className='my-container py-20'>
            <div className='text-center pb-8'>
                <p>My Showcase</p>
                <h3 className='text-4xl font-semibold'>The Best & Recent Projects</h3>
            </div>
            {/* projects area */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-6 justify-between p-2 md:p-2'>
                {
                    projects.map((pro) => <div
                        key={pro._id} className='show-pro'>
                        <div className=''>
                            <img src={pro.imgLink} alt="" />
                        </div>
                        <div className='hide-pro'>
                            <p className='text-xl'>EdTech - Learning English</p>
                            <div className='flex gap-2'>
                                <Link to={pro.pLink}><button className='underline p-1'>Live Site</button></Link>
                                <Link to={pro?.frontend}><button className='underline p-1'>FrontEnd</button></Link>
                                <Link to={pro?.backend}><button className='underline p-1'>Backend</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Project;