import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";

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
        path: '*',
        element: <a href="/"><h2 className="text-center p-4 underline">You Are A Mad ? Click to Go Home</h2></a>
    }
]);
export default router;