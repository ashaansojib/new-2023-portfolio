import React from "react";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <div id="hireMe" className="my-container py-20 mb-10 bg-[#022642] relative">
      <div className="mx-auto text-center md:w-2/3">
        <h1 className="text-5xl font-bold">
          I'm Available For Any Company As Developer Position
        </h1>
        <Link to="https://www.linkedin.com/in/ashaansojib/"><button className="hire-me-btn">
          Hire Me Now
        </button> </Link>
      </div>
      <div className="absolute right-0 md:top-36 top-64 w-[200px] md:w-[350px]">
        <img src="/sittng.png" alt="" />
      </div>
    </div>
  );
};

export default HireMe;
