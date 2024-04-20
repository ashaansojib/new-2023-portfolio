import React, { useEffect, useState } from "react";
import Project from "./Project";
import { useGetProjectsQuery } from "../../redux/features/ProjectApi";
import Loader from "../../components/Loader";
const Projects = () => {
  const { data, isLoading } = useGetProjectsQuery([]);
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
        <button className="py-1 px-4 bg-blue-500 rounded-md">All</button>
        <button className="py-1 px-4 ">MERN</button>
        <button className="py-1 px-4">Landing</button>
        <button className="py-1 px-4">Portfolio</button>
        <button className="py-1 px-4">JavaScript</button>
      </div>
      {/* all projects maping */}
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          data.data?.map((pro) => <Project key={pro._id} pro={pro}></Project>)
        )}
      </div>
    </section>
  );
};

export default Projects;
