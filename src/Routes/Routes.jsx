import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/WithoutLogin/Home";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>
    }
])