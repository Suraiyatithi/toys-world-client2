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
import Addtoy from "../Pages/AddToy/Addtoy";
import Mytoy from "../Pages/MyToy/Mytoy";
import Error from "../Pages/Error/Error";
import View from "../Pages/Home/View";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Homelayout></Homelayout>,
      errorElement:<Error></Error>
    },
    {
      path:"/",
      element:<LoginLayOut></LoginLayOut>,
      errorElement:<Error></Error>,
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
      loader: ({params}) => fetch(`https://toy-world-server-suraiyatithi.vercel.app/toys/${params.id}`)
    },
    {
      path:'category/:id',
      element:<View></View>,
      loader: ({params}) => fetch(`https://toy-world-server-suraiyatithi.vercel.app/category/${params.id}`)
    },
    {
      path:"addtoys",
      element:<Addtoy></Addtoy>
    },
    {
      path:'mytoys',
      element:<Mytoy></Mytoy>
    }
  ]);
  export default router;