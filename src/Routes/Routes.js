import { createBrowserRouter } from "react-router-dom";
import Addservice from "../component/Addservice/Addservice";
import Blog from "../component/Blog/Blog";
import Error from "../component/Error/Error";
import Getstarted from "../component/Getstarted/Getstarted";
import Home from "../component/Home/Home";
import Myreview from "../component/Myreview/Myreview";
import Service from "../component/Service/Service";
import ServiceDetails from "../component/ServiceDetails/ServiceDetails";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://survey-help-server.vercel.app/home')

            },
            {
                path: '/service',
                element: <Service></Service>
               
            },
            {
                path:'/getstarted',
                element:<Getstarted></Getstarted>

            },
            {
                path:'/myreviews',
                element:<PrivateRoute><Myreview></Myreview></PrivateRoute> 
                
            },
            {
                path:'/AddServices',
                element:<PrivateRoute><Addservice></Addservice></PrivateRoute> 
            },
            {
                path:'servicedetails/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://survey-help-server.vercel.app/services/${params.id}`)
                

            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
       
    },
    {
        path:'*',
        element:<Error></Error>
        
    }
])