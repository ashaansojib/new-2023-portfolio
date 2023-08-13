import React from 'react';

const Project = () => {
    return (
        <section className='my-container px-4 py-20'>
            <div className='text-center pb-8'>
                <p>My Showcase</p>
                <h3 className='text-4xl font-semibold'>The Best & Recent Projects</h3>
            </div>
            {/* projects area */}
            <div className='grid grid-cols-3 gap-4 justify-between'>
                <div className='show-pro'>
                    <div className=''>
                        <img src="/pro.jpg" alt="" />
                    </div>
                    <div className='hide-pro'>
                        <p className='text-xl'>EdTech - Learning English</p>
                        <div className='flex gap-2'>
                            <button className='underline p-1'>Live</button>
                            <button className='underline p-1'>FrontEnd</button>
                            <button className='underline p-1'>Backend</button>
                        </div>
                    </div>
                </div>
                <div className='show-pro'>
                    <div className=''>
                        <img src="/pro.jpg" alt="" />
                    </div>
                    <div className='hide-pro'>
                        <p className='text-xl'>EdTech - Learning English</p>
                        <div className='flex gap-2'>
                            <button className='underline p-1'>Live</button>
                            <button className='underline p-1'>FrontEnd</button>
                            <button className='underline p-1'>Backend</button>
                        </div>
                    </div>
                </div>
                <div className='show-pro'>
                    <div className=''>
                        <img src="/pro.jpg" alt="" />
                    </div>
                    <div className='hide-pro'>
                        <p className='text-xl'>EdTech - Learning English</p>
                        <div className='flex gap-2'>
                            <button className='underline p-1'>Live</button>
                            <button className='underline p-1'>FrontEnd</button>
                            <button className='underline p-1'>Backend</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;