import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/WithoutLogin/Home";
import JoinAsEmploye from "../Pages/WithoutLogin/JoinAsEmploye";
import JoinAsARAdmin from "../Pages/WithoutLogin/JoinAsARAdmin";
import SignIn from "../Pages/WithoutLogin/SignIn";
import Employe from "../Pages/NormalEmploye/Employe";
import EmployeHome from "../Pages/NormalEmploye/EmployeHome";
import MyAsset from "../Pages/NormalEmploye/MyAsset";
import MyTeam from "../Pages/NormalEmploye/MyTeam";
import RequestAsset from "../Pages/NormalEmploye/RequestAsset";
import MakeCoustomRequest from "../Pages/NormalEmploye/MakeCoustomRequest";
import EmployeProfile from "../Pages/NormalEmploye/EmployeProfile";
import AdminHr from "../Pages/AdminHR/AdminHr";
import AdminHrHome from "../Pages/AdminHr/AdminHrHome";
import AssetList from "../Pages/AdminHR/AssetList";
import AddAnAsset from "../Pages/AdminHR/AddAnAsset";
import AllRequest from "../Pages/AdminHR/AllRequest";
import CoustomReqList from "../Pages/AdminHR/CoustomReqList";
import MyEmployeeList from "../Pages/AdminHr/MyEmployeeList";
import AddAnEmployee from "../Pages/AdminHR/AddAnEmployee";
import AdminHrProfile from "../Pages/AdminHR/AdminHrProfile";
import AsssetUpdateFrom from "../Pages/AdminHr/AsssetUpdateFrom";



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
            },

            {
                path: 'myTeam',
                element: <MyTeam></MyTeam>
            },

            {
                path: 'myAsset',
                element: <MyAsset></MyAsset>
            },

            {
                path: 'requestAsset',
                element: <RequestAsset></RequestAsset>
            } ,

            {
                path: 'makeCoustmRequest',
                element: <MakeCoustomRequest></MakeCoustomRequest>
            },

            {
                path: 'employeProfile',
                element: <EmployeProfile></EmployeProfile>
            }
            
        ],
    },


    /* Join HR/Admin */
    {
        path: '/joinAdminHR',
        element: <JoinAsARAdmin></JoinAsARAdmin>
    },

    {
        path: '/adminHome',
        element: <AdminHr></AdminHr>,
        children: [
            {
                path: '/adminHome',
                element: <AdminHrHome></AdminHrHome>
            },

            {
                path: 'assetList',
                element: <AssetList></AssetList>
            },
            /* Update asset */
            {
                path: 'assetUpdate/:id',
                element: <AsssetUpdateFrom></AsssetUpdateFrom>,
                loader: ({ params }) => fetch(`http://localhost:5007/api/v1/update/assets/${params._id}`)

            },

            {
                path: 'addanAsset',
                element: <AddAnAsset></AddAnAsset>
            },

            {
                path: 'allRequest',
                element: <AllRequest></AllRequest>
            } ,

            {
                path: 'coustmRequestList',
                element: <CoustomReqList></CoustomReqList>
            },
            {
                path: 'myEmployeeList',
                element: <MyEmployeeList></MyEmployeeList>
            },
            {
                path: 'addAnEmployee',
                element: <AddAnEmployee></AddAnEmployee>
            },

            {
                path: 'AdminHrProfile',
                element: <AdminHrProfile></AdminHrProfile>
            },

           
            
        ],
    },



    {
     path: '/signin',
     element: <SignIn></SignIn>
    }
])