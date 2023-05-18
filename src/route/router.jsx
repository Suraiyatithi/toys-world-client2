import {
    createBrowserRouter,

  } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Login from "../Pages/LogIn/Login";
import LoginLayOut from "../Layout/LoginLayOut";
import Register from "../Pages/LogIn/Register";
import Blog from '../Pages/Blogs/Blog'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
    },
    {
      path:"/",
      element:<LoginLayOut></LoginLayOut>,
      children:[{
        path:'/login',
        element:<Login></Login>
      },{
    path:'/register',
    element:<Register></Register>
      },
     
    ]

    },
    {
      path:"/blog",
      element:<Blog></Blog>
    }
  ]);
  export default router;