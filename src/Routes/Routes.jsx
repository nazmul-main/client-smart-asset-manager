import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/WithoutLogin/Home";
import JoinAsEmploye from "../Pages/WithoutLogin/JoinAsEmploye";
import JoinAsARAdmin from "../Pages/WithoutLogin/JoinAsARAdmin";
import SignIn from "../Pages/WithoutLogin/SignIn";
import Employe from "../Pages/NormalEmploye/Employe";
import EmployeHome from "../Pages/NormalEmploye/EmployeHome";



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


    /* Join Employee */
    {
        path: '/joinEmploye',
        element: <JoinAsEmploye></JoinAsEmploye>
        
    },

    {
        path: '/employeHome',
        element: <Employe></Employe>,
        children: [
            {
                path: '/employeHome',
                element: <EmployeHome></EmployeHome>
            }
        ],
    },


    /* Join HR/Admin */
    {
        path: '/joinAdminHR',
        element: <JoinAsARAdmin></JoinAsARAdmin>
    },
    {
     path: '/signin',
     element: <SignIn></SignIn>
    }
])