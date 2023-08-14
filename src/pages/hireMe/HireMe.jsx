import React from "react";

const HireMe = () => {
  return (
    <div className="my-container px-4 py-20 mb-10 bg-[#022642] relative">
      <div className="mx-auto text-center w-2/3">
        <h1 className="text-5xl font-bold">
          I'm Available For Any Company As Developer Position
        </h1>
        <button className="py-4 px-6 inline mt-10 bg-[#040836] hover:bg-red-600 text-white rounded-full">
          Hire Me Now
        </button>
      </div>
      <div className="absolute right-0 top-36">
        <img src="/sittng.png" alt="" />
      </div>
    </div>
  );
};

export default HireMe;
