import { createBrowserRouter } from "react-router-dom";
import Addservice from "../component/Addservice/Addservice";
import Error from "../component/Error/Error";
import Getstarted from "../component/Getstarted/Getstarted";
import Home from "../component/Home/Home";
import Myreview from "../component/Myreview/Myreview";
import Service from "../component/Service/Service";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/home')

            },
            {
                path: '/service',
                element: <Service></Service>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path:'/getstarted',
                element:<Getstarted></Getstarted>

            },
            {
                path:'/myreview',
                element:<Myreview></Myreview>
            },
            {
                path:'/AddServices',
                element:<Addservice></Addservice>
            },
            {
                path:'servicedetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                

            }
        ]
       
    },
    {
        path:'*',
        element:<Error></Error>
        
    }
])