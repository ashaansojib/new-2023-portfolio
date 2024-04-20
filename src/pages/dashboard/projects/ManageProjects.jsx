import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddProjectMutation,
  useGetProjectsQuery,
  useRemoveProjectMutation,
} from "../../../redux/features/ProjectApi";
import { PuffLoader } from "react-spinners";

const ManageProjects = () => {
  const { data: projects, isLoading: dataLoader } = useGetProjectsQuery([]);
  const [removePro, { isLoading: deleteLoading }] = useRemoveProjectMutation();
  const handleRemove = (id) => {
    removePro(id);
  };
  const [addPost, { data: returnPro, isLoading: createLoader, isSuccess }] =
    useAddProjectMutation([]);

  const [selectedItem, setSelectedItem] = useState(["ReactJs"]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedItem((prevSelectedItem) => [...prevSelectedItem, value]);
  };

  const onSubmit = async (data) => {
    const { name, category, frontEnd, backEnd, image, liveLink } = data;
    const project = {
      name,
      category,
      image,
      links: { frontEnd, backEnd },
      tools: selectedItem,
      liveLink,
    };
    try {
      await addPost(project);
      reset();
    } catch (err) {
      console.error(err);
    }
  };
  //   console.log(returnPro?.data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataLoader ? (
              <div className="w-32 mx-auto h-full">
                <PuffLoader color="#FF014F" />
              </div>
            ) : (
              projects?.data?.map((project, index) => (
                <tr key={project._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{project.name}</td>
                  <td>{project.category} - 23/04/23</td>
                  <td>
                    {deleteLoading ? (
                      <div className="text-[#294d70]">
                        <PuffLoader color="#FF014F" />
                        <span>Deleting</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleRemove(project._id)}
                        className="btn btn-sm btn-secondary mr-2"
                      >
                        Delete
                      </button>
                    )}
                    <button className="btn btn-sm btn-primary">Edit</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* create projects */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="published-container">
          <input
            {...register("name", { required: true })}
            className="input-css"
            type="text"
            placeholder="Type Name"
          />
          <input
            {...register("category", { required: true })}
            className="input-css"
            type="text"
            placeholder="Category"
          />
          {/* <input type="file" {...register("image", { required: true })} /> */}
          <input
            {...register("image", { required: true })}
            className="input-css"
            type="text"
            placeholder="Image Link"
          />
          <input
            {...register("frontEnd", { required: true })}
            className="input-css"
            type="text"
            placeholder="Front-end Code"
          />
          <input
            {...register("backEnd", { required: true })}
            className="input-css"
            type="text"
            placeholder="Backend Code"
          />
          <input
            {...register("liveLink", { required: true })}
            className="input-css"
            type="text"
            placeholder="Live Link"
          />

          <select onChange={handleSelectChange} className="border p-3">
            <option value="ReactJs">ReactJs</option>
            <option value="NextJS">NextJS</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="React Router">React Router</option>
            <option value="JS ES6">JS ES6</option>
            <option value="NodeJS">NodeJS</option>
            <option value="ExpressJS">ExpressJS</option>
            <option value="Mongoose">Mongoose</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Redux">Redux</option>
            <option value="RTK Query">RTK Query</option>
            <option value="Axios">Axios</option>
            <option value="Tailwindcss">Tailwind CSS</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML5</option>
            <option value="JWT">JWT</option>
            <option value="React Hook Form">React Hook Form</option>
          </select>
        </div>
        {createLoader ? (
          <div className="w-32 mx-auto h-full">
            <PuffLoader color="#FF014F" />
          </div>
        ) : (
          <input type="submit" value="Published" className="send-btn" />
        )}
      </form>
    </div>
  );
};

export default ManageProjects;
