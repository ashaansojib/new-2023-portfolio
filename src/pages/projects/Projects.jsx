import React, { useEffect, useState } from "react";
import Project from "./Project";
import { useGetProjectsQuery } from "../../redux/features/ProjectApi";
import Loader from "../../components/Loader";
import { PuffLoader } from "react-spinners";
const Projects = () => {
  const [category, setCategory] = useState("all");
  const { data, isLoading } = useGetProjectsQuery(category);
  console.log(data);
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
        <button className="py-1 px-4" onClick={() => setCategory("all")}>
          All
        </button>
        <button className="py-1 px-4" onClick={() => setCategory("mern")}>
          MERN
        </button>
        <button className="py-1 px-4" onClick={() => setCategory("landing")}>
          Landing
        </button>
        <button className="py-1 px-4" onClick={() => setCategory("portfolio")}>
          Portfolio
        </button>
        <button className="py-1 px-4" onClick={() => setCategory("javascript")}>
          JavaScript
        </button>
      </div>
      {/* all projects maping */}
      <div>
        {isLoading ? (
          <div className="w-32 mx-auto h-full">
            <PuffLoader />
          </div>
        ) : (
          data.data?.map((pro) => <Project key={pro._id} pro={pro}></Project>)
        )}
      </div>
    </section>
  );
};

export default Projects;
