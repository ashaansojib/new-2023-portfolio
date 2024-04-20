import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev-portfolio-server.vercel.app/api",
  }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (category) => `/projects?category=${category}`,
      providesTags: ["projects"],
    }),
    addProject: builder.mutation({
      query: (data) => ({
        url: "/projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projects"],
    }),
    removeProject: builder.mutation({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),
    uploadPhoto: builder.mutation({
      query: (id, data) => ({
        url: `/projects/${id}/photo`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectMutation,
  useRemoveProjectMutation,
  useUploadPhotoMutation,
} = projectApi;