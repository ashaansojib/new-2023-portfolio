import { configureStore } from "@reduxjs/toolkit";
import { projectApi } from "./features/ProjectApi";

const store = configureStore({
  reducer: {
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

export default store;