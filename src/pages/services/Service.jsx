import React from 'react';

const Service = () => {
    return (
        <section className='my-container bg-[#022642] py-20'>
            {/* section title */}
            <div className='text-center pb-8'>
                <p>MY EXPERIENCE</p>
                <h3 className='text-4xl font-semibold'>What I Do</h3>
            </div>
            {/* content */}
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 px-6'>
                <div>
                    <img className='w-[100px] h-[120px] py-3' src="/1-1.png" alt="" />
                    <h4 className='text-2xl font-bold py-2'>Front-End Development</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id doloribus dolorum consequuntur cupiditate eligendi vel? Natus quibusdam, illo architecto harum quis similique, asperiores eaque perspiciatis dolorum, repellendus ipsum facilis.</p>
                </div>
                <div>
                    <img className='w-[100px] h-[120px] py-3' src="/2.png" alt="" />
                    <h4 className='text-2xl font-bold py-2'>Jr. Backend Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id doloribus dolorum consequuntur cupiditate eligendi vel? Natus quibusdam, illo architecto harum quis similique, asperiores eaque perspiciatis dolorum, repellendus ipsum facilis.</p>
                </div>
                <div>
                    <img className='w-[100px] h-[120px] py-3' src="/4.png" alt="" />
                    <h4 className='text-2xl font-bold py-2'>MERN Stack Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste id doloribus dolorum consequuntur cupiditate eligendi vel? Natus quibusdam, illo architecto harum quis similique, asperiores eaque perspiciatis dolorum, repellendus ipsum facilis.</p>
                </div>
            </div>
        </section>
    );
};

export default Service;