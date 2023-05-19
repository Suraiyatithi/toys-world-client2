import {
    createBrowserRouter,

  } from "react-router-dom";
import Homelayout from "../Layout/Homelayout";
import Login from "../Pages/LogIn/Login";
import LoginLayOut from "../Layout/LoginLayOut";
import Register from "../Pages/LogIn/Register";
import Blog from '../Pages/Blogs/Blog'
import AllToys from "../Pages/Alltoys/AllToys";
import Showall from "../share/Showall";


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
      path:'/alltoys',
      element:<AllToys></AllToys>
    },
    {
      path:"/blog",
      element:<Blog></Blog>
    },
    {
      path:'toys/:id',
      element:<Showall></Showall>,
      loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
    }
  ]);
  export default router;