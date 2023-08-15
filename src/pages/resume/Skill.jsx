import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';

const Skill = () => {
    return (
        <div className='border px-6 pt-20 pb-14 relative w-full h-full grid lg:grid-cols-2 grid-cols-1 justify-between gap-8'>
            <div>
                <p className='text-[20px] font-medium py-2'>React JS</p>
                <ProgressBar completed={90} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>Next JS</p>
                <ProgressBar completed={50} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>JavaScript ES6</p>
                <ProgressBar completed={80} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>TypeScript</p>
                <ProgressBar completed={50} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>TailwindCss</p>
                <ProgressBar completed={99} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
            </div>
            <div>
            <p className='text-[20px] font-medium py-2'>Node JS</p>
                <ProgressBar completed={50} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>MongoDB</p>
                <ProgressBar completed={85} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>Express.js</p>
                <ProgressBar completed={50} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
                <p className='text-[20px] font-medium py-2'>Redux</p>
                <ProgressBar completed={50} animateOnRender={true} height='13px' bgColor='#FF014F' baseBgColor='#040836'></ProgressBar>
            </div>
        </div>
    );
};

export default Skill;