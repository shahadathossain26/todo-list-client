import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/home',
        element: <Home></Home>
    },
])
