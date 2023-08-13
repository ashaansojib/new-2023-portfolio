import React from 'react';

const Resume = () => {
    return (
        <div className='px-4 py-20 my-container '>
            <div className='relative'>
            <div className='border px-6 py-20 relative w-full h-full'>
                <p>Name: Ashaduzzaman Sojib</p>
            </div>
            {/* section titile bar */}
            <div className='mx-auto w-4/5 p-2 rounded-full border grid grid-cols-3 justify-between items-center gap-6 bg-[#022642]  absolute -top-10 right-28'>
                <button className='title-btn'>Biography</button>
                <button className='title-btn'>Skills</button>
                <button className='title-btn'>Educational</button>
            </div>
            </div>
            
        </div>
    );
};

export default Resume;