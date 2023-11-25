import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/WithoutLogin/Home";
import JoinAsEmploye from "../Pages/WithoutLogin/JoinAsEmploye";
import JoinAsARAdmin from "../Pages/WithoutLogin/JoinAsARAdmin";
import SignIn from "../Pages/WithoutLogin/SignIn";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
        ]
    },
    {
        path: '/joinEmploye',
        element: <JoinAsEmploye></JoinAsEmploye>
    },
    {
        path: '/joinAdminHR',
        element: <JoinAsARAdmin></JoinAsARAdmin>
    },
    {
     path: '/signin',
     element: <SignIn></SignIn>
    }
])