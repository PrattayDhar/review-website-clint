import { createBrowserRouter } from "react-router-dom";
import Getstarted from "../component/Getstarted/Getstarted";
import Home from "../component/Home/Home";
import Service from "../component/Service/Service";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path:'/getstarted',
                element:<Getstarted></Getstarted>

            }
        ]
    }
])