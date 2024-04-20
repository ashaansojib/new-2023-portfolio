import React, { useEffect, useState } from "react";
import Project from "./Project";
import { useGetProjectsQuery } from "../../redux/features/ProjectApi";
import Loader from "../../components/Loader";
import { PuffLoader } from "react-spinners";
const Projects = () => {
  const [category, setCategory] = useState("all");
  const { data, isLoading, isFetching } = useGetProjectsQuery(category);
  return (
    <section id="projects" className="my-container pt-20">
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-center py-2"
      >
        <p>My Showcase</p>
        <h3 className="my-text-gradient">The Best & Recent Projects</h3>
      </div>
      {/* projects category */}
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="flex justify-center items-center py-2"
      >
        <button
          className={`py-1 px-4 ${
            category === "all" ? "bg-blue-600 rounded-md" : "bg-none"
          }`}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className={`py-1 px-4 ${
            category === "mern" ? "bg-blue-600 rounded-md" : "bg-none"
          }`}
          onClick={() => setCategory("mern")}
        >
          MERN
        </button>
        <button
          className={`py-1 px-4 ${
            category === "landing" ? "bg-blue-600 rounded-md" : "bg-none"
          }`}
          onClick={() => setCategory("landing")}
        >
          Landing
        </button>
        <button
          className={`py-1 px-4 ${
            category === "portfolio" ? "bg-blue-600 rounded-md" : "bg-none"
          }`}
          onClick={() => setCategory("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={`py-1 px-4 ${
            category === "javascript" ? "bg-blue-600 rounded-md" : "bg-none"
          }`}
          onClick={() => setCategory("javascript")}
        >
          JavaScript
        </button>
      </div>
      {/* all projects maping */}
      <div>
        {isLoading && isFetching ? (
          <div className="w-32 mx-auto h-full">
            <PuffLoader color="#FF014F" />
          </div>
        ) : (
          data.data?.map((pro) => <Project key={pro._id} pro={pro}></Project>)
        )}
      </div>
    </section>
  );
};

export default Projects;
