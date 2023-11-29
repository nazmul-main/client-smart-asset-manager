import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/WithoutLogin/Home";
import JoinAsEmploye from "../Pages/WithoutLogin/JoinAsEmploye";
import JoinAsARAdmin from "../Pages/WithoutLogin/JoinAsARAdmin";
import SignIn from "../Pages/WithoutLogin/SignIn";
import Dashboard from "../DashBoard/Dashboard";
import EmployeHome from "../Pages/NormalEmploye/EmployeHome";
import MyTeam from "../Pages/NormalEmploye/MyTeam";
import Payment from "../Pages/AdminHr/Payment/Payment";
import MyAsset from "../Pages/NormalEmploye/MyAsset";
import RequestAsset from "../Pages/NormalEmploye/RequestAsset";
import MakeCoustomRequest from "../Pages/NormalEmploye/MakeCoustomRequest";
import EmployeProfile from "../Pages/NormalEmploye/EmployeProfile";
import AdminHrHome from "../Pages/AdminHr/AdminHrHome";
import AsssetUpdateFrom from "../Pages/AdminHr/AsssetUpdateFrom";
import AssetList from "../Pages/AdminHr/AssetList";
import AddAnAsset from "../Pages/AdminHr/AddAnAsset";
import CoustomReqList from "../Pages/AdminHr/CoustomReqList";
import AllRequest from "../Pages/AdminHr/AllRequest";
import MyEmployeeList from "../Pages/AdminHr/MyEmployeeList";
import AddAnEmployee from "../Pages/AdminHr/AddAnEmployee";
import AdminHrProfile from "../Pages/AdminHr/AdminHrProfile";
import PrivateRoute from "../Private/PrivateRoute";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    },


    /* Signin */
    {
        path: '/signin',
        element: <SignIn></SignIn>
    },

    /*  Payment */


    /* Join HR/Admin */
    {
        path: '/joinAdminHR',
        element: <JoinAsARAdmin></JoinAsARAdmin>
    },


    /* Join Employee */
    {
        path: '/joinEmploye',
        element: <JoinAsEmploye></JoinAsEmploye>


    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,

        children: [
            {
                path: 'employeHome',
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
            },

            {
                path: 'makeCoustmRequest',
                element: <MakeCoustomRequest></MakeCoustomRequest>
            },

            {
                path: 'employeProfile',
                element: <EmployeProfile></EmployeProfile>
            },

            /*----------------------- Admin --------------------------*/
            {
                path: 'adminHome',
                element: <PrivateRoute > <AdminHrHome></AdminHrHome></PrivateRoute>

            },
            {
                path: 'payment',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },

            {
                path: 'assetList',
                element: <PrivateRoute> <AssetList></AssetList></PrivateRoute>
            },
            /* Update asset */
            {
                path: 'update-assets/:id',
                element: <AsssetUpdateFrom></AsssetUpdateFrom>,
                loader: ({ params }) => fetch(`http://localhost:5001/api/v1/assets/update-assets/${params.id}`)
            },
            {
                path: 'addanAsset',
                element: <AddAnAsset></AddAnAsset>
            },

            {
                path: 'allRequest',
                element: <AllRequest></AllRequest>
            },

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
                element: <PrivateRoute>  <AddAnEmployee></AddAnEmployee></PrivateRoute>
            },

            {
                path: 'AdminHrProfile',
                element: <AdminHrProfile></AdminHrProfile>
            },

        ],
    },



])