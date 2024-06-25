import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ pro }) => {
  const { category, liveLink, image, links, name, tools } = pro;
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="project-container">
      <div className="project-image">
        {!imageLoaded && (
          <div className="skeleton w-[550px] h-[300px] bg-gray-700"></div>
        )}
        <img
          className={`${imageLoaded ? "block" : "hidden"}`}
          src={image}
          alt="image not found!"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="ps-4">
        <h3 className="text-3xl pb-2 font-bold">{name}</h3>
        <p className="text-gray-300 italic uppercase">{category} - Category</p>
        <div className="flex gap-3 items-center py-2">
          <button className="btn btn-sm hover:btn-outline">
            <Link target="_blank" to={liveLink}>
              Live Link
            </Link>
          </button>
          <button className="btn btn-sm hover:btn-outline">
            <FaGithub className="inline pr-1 text-2xl" />
            <Link target="_blank" to={links.frontEnd}>
              Frontend
            </Link>
          </button>
          <button className="btn btn-sm hover:btn-outline">
            <FaGithub className="inline pr-1 text-2xl" />
            <Link target="_blank" to={links.backEnd}>
              Backend
            </Link>
          </button>
        </div>
        {/* used tools */}
        <div>
          <p className="font-semibold text-gray-500">- Used Technology</p>
          {tools?.map((tool, i) => (
            <button className="btn m-1 btn-sm" key={i + 1}>
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
