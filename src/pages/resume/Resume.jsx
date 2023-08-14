import React from "react";

const Resume = () => {
  return (
    <div className="px-4 py-20 my-container ">
      <div className="relative">
        <div className="border px-6 pt-20 pb-14 relative w-full h-full grid grid-cols-2 justify-between gap-8">
          <div className="p-2">
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
          <div className=" p-2">
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
        {/* section titile bar */}
        <div className="mx-auto w-4/5 p-2 rounded-full border grid grid-cols-3 justify-between items-center gap-6 bg-[#022642]  absolute -top-10 right-28">
          <button className="title-btn">Biography</button>
          <button className="title-btn">Skills</button>
          <button className="title-btn">Educational</button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
