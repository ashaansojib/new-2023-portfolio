import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedinIn, FaPenFancy } from "react-icons/fa";

const Header = () => {
  return (
    <header id="home">
      <div className="my-container">
        <div className="bg-[#040c30a4] rounded-s-full my-12 p-4 md:grid lg:grid-cols-5 grid-cols-1 justify-between gap-8">
        <div className="lg:col-span-2">
            <div className="w-full h-full flex justify-center items-center overflow-hidden">
              <img src="/newpp.png" alt="logo not found!" className="rounded-full" />
            </div>
          </div>
          <div className="col-span-3 md:py-12 px-2 lg:px-0">
            <h2 data-aos="fade-down" data-aos-duration="2000" className="md:text-5xl text-3xl font-bold py-6">I'm Ashaduzzaman <span>Sojib</span></h2>
            <TypeAnimation
              sequence={[
                "Front-end Web Developer",
                1000,
                "JavaScript Developer",
                1000,
                "React JS Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <p data-aos="fade-up" data-aos-duration="3000" className="text-gray-100 py-2">
              As a professional web developer, i have many skills, qualities,
              and contributions to the field. I possess a high level of
              technical expertise in web development, including proficiency in
              programming languages, frameworks, and tools. I pay meticulous
              attention to every aspect of web development,{" "}
            </p>
            <div data-aos="zoom-in" data-aos-duration="3000" className="md:flex items-center gap-3">
              <Link to="https://drive.google.com/uc?export=download&id=1ur9YsDz0h-fv8Kz3iZI6AKzLVt3mJymi">
                <button className="py-3 px-4 inline bg-[#040836] text-white rounded-md">
                  Download Resume
                </button>
              </Link>
              <div className="flex items-center gap-3 py-4">
                <Link
                  to="https://github.com/ashaansojib"
                  target="_blank"
                  className="p-2 text-2xl inline rounded-full hover:bg-[#FF014F] tooltip tooltip-top"
                  data-tip="Go Github"
                >
                  <FaGithub />
                </Link>
                <Link
                  to="https://www.facebook.com/khusbusojib/"
                  target="_blank"
                  className="p-2 text-2xl inline rounded-full hover:bg-[#FF014F]  tooltip tooltip-top"
                  data-tip="My Facebook"
                >
                  <FaFacebook />
                </Link>
                <Link to="https://www.linkedin.com/in/ashaansojib/"
                  className="p-2 text-2xl inline rounded-full hover:bg-[#FF014F]  tooltip tooltip-top"
                  data-tip="My Linkedin"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://drive.google.com/file/d/1kVxYf6NkBNxQPThhg49NtRSNDt_blHJy/view"
                  target="_blank"
                  className="p-2 text-2xl inline rounded-full hover:bg-[#FF014F]  tooltip tooltip-top"
                  data-tip="My Cover Letter"
                >
                  <FaPenFancy />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
