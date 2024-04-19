import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import Dashboard from "../layout/Dashboard";
import ManageProjects from "../pages/dashboard/projects/ManageProjects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/admin',
        element: <Dashboard />,
        children: [
            {
                path: '/admin/manage-projects',
                element: <ManageProjects />
            }
        ]
    },
    {
        path: '*',
        element: <a href="/"><h2 className="text-center p-4 underline">You Are A Mad ? Click to Go Home</h2></a>
    }
]);
export default router;