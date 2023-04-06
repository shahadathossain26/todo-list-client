import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import TodoDetails from "../Pages/TodoDetails/TodoDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><Home></Home></PrivateRoute>
    },
    {
        path: '/todo/:id',
        element: <TodoDetails></TodoDetails>,
        loader: ({ params }) => fetch(`https://todo-list-server-shahadathossain26.vercel.app/todo/${params.id}`)
    },
])
