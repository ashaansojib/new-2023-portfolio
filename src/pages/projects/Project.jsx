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
        <section id='projects' className='my-container py-20'>
            <div data-aos="fade-up" data-aos-duration="2000" className='text-center py-2'>
                <p>My Showcase</p>
                <h3 className='text-4xl font-semibold'>The Best & Recent Projects</h3>
            </div>
            {/* projects category */}
            <div data-aos="zoom-in" data-aos-duration="2000" className='flex justify-center items-center py-2'>
                <button className='py-1 px-4 bg-blue-500 rounded-md'>All</button>
                <button className='py-1 px-4 '>MERN</button>
                <button className='py-1 px-4'>Landing</button>
                <button className='py-1 px-4'>Portfolio</button>
                <button className='py-1 px-4'>JavaScript</button>
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
                            <p className='text-xl'>{pro.pName}</p>
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