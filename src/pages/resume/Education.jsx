import React from 'react';

const Education = () => {
    return (
        <div className='border px-6 pt-20 pb-14 relative w-full h-full grid grid-cols-2 justify-between gap-8'>
            <div className='p-4'>
                <h3 className='text-2xl font-semibold'>B.A. Honours in English Literature</h3>
                <p className='text-gray-300'>National University - Bangladesh</p>
                <button className='p-2 my-2 bg-[#FF014F]'>2021 - 2024</button>
                <p>Hi, I'm running students of a gratuation candidate. The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
            </div>
            <div className='p-4'>
                <h3 className='text-2xl font-semibold'>Complete Web Development Course</h3>
                <p className='text-gray-300'>With Jhankar Mahbub - ProgrammingHero</p>
                <button className='p-2 my-2 bg-[#FF014F]'>2022 - 2023</button>
                <p>Hi, I'm running a successfull running students of programmingHero Batch 7. The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
            </div>
        </div>
    );
};

export default Education;