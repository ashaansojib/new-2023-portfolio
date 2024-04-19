import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ pro }) => {
  const { category, filename, image, links, name, tools } = pro;
  console.log(pro);
  return (
    <div className="project-container">
      <div className="project-image">
        <img src={image} alt="image not found!" />
      </div>
      <div className="ps-4">
        <h3 className="text-3xl pb-2 font-bold">{name}</h3>
        <button
          tabIndex={0}
          role="button"
          className="dropdown dropdown-hover px-3 py-2 bg-blue-500 font-semibold my-2 rounded-md"
        ><ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-8"
      >
        <li>
          <Link target="_blank" to={links.frontEnd}>FrontEnd</Link>
        </li>
        <li>
          <Link target="_blank" to={links.backEnd}>Backend</Link>
        </li>
      </ul>
            <FaGithub className="inline pr-1 text-2xl" />
          Code Link
        </button>
        
        {/* used tools */}
        <div>
          <p className="font-semibold text-gray-500">- Used Technology</p>
          {tools?.map((tool, i) => (
            <button className="btn btn-outline m-1 btn-sm" key={i + 1}>
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
