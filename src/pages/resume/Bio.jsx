import React from 'react';

const Bio = () => {
    return (
        <div className="border px-6 pt-20 pb-14 lg:relative grid grid-cols-2 justify-between gap-8">
            <div className="lg:p-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <p className="font-medium text-xl">Name:</p>
                    <p className="text-gray-300">Ashaduzzaman Sojib</p>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <p className="font-medium text-xl">Email:</p>
                    <p className="text-gray-300">ashaduzzamansojib67@gmail.com</p>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <p className="font-medium text-xl">Mobile:</p>
                    <p className="text-gray-300">+8801892932859</p>
                </div>
                <div className="flex justify-between items-center py-2">
                    <p className="font-medium text-xl">Age:</p>
                    <p className="text-gray-300">24</p>
                </div>
            </div>
            <div className="lg:p-2">
                <div className="flex justify-between items-center py-2 border-b border-gray-600">
                    <p className="font-medium text-xl">Location:</p>
                    <p className="text-gray-300">LalmonirHat, Rongpur, Bangladesh</p>
                </div>
                <div className="flex justify-between items-center py-2">
                    <p className="font-medium text-xl">Name:</p>
                    <p className="text-gray-300">Ashaduzzaman Sojib</p>
                </div>
            </div>
        </div>
    );
};

export default Bio;