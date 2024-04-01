import React from 'react';

const Service = () => {
    return (
        <section id='services' className='my-container bg-[#022642] py-20'>
            {/* section title */}
            <div data-aos="fade-up" data-aos-duration="2000" className='text-center pb-8'>
                <p>MY EXPERIENCE</p>
                <h3 className='my-text-gradient'>What I Do</h3>
            </div>
            {/* content */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 px-6'>
                <div data-aos="fade-up" data-aos-duration="2000" >
                    <img className='w-[100px] h-[120px] py-3' src="/1-1.png" alt="" />
                    <h4 className='text-2xl font-bold py-2'>Front-End Development</h4>
                    <p>Front-end developers are responsible for creating the user-facing components of a website or web application. I can work with HTML, CSS, and JavaScript to design and implement the visual and interactive elements that users interact with directly. My role involves translating design mockups into functional user interfaces.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" >
                    <img className='w-[100px] h-[120px] py-3' src="/2.png" alt="" />
                    <h4 className='text-2xl font-bold py-2'>Jr. Backend Developer</h4>
                    <p>Junior backend developers are entry-level professionals responsible for building and maintaining the server-side logic of web applications. I can work with Nodejs, Expressjs, JavaScript, MongoDB, MyQSL Etc, I'm involve handling data storage, managing user authentication, and implementing the application's core functionality.</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" >
                    <img className='w-[100px] h-[120px] py-3' src="/4.png" alt="" />
                    <h4 className='text-2xl font-bold py-2'>MERN Stack Developer</h4>
                    <p>MERN stack developers specialize in creating web applications using a specific technology stack: MongoDB (database), Express.js (web application framework), React (front-end library), and Node.js (server-side runtime). As I'm a Web Developer handle both front-end and back-end development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Service;