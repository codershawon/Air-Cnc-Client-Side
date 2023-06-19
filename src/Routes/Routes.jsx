import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import AddRoom from "../Pages/Dashboard/AddRoom";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
       {
          path:"/room/:id",
          element:<PrivateRoutes><RoomDetails/></PrivateRoutes>
        }
      ]
    }, {
      path:"/login",
      element:<Login></Login>
    },{
      path:"/signUp",
      element:<SignUp></SignUp>
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
      children:[
        {
          path:"/dashboard/addRoom",
          element:<AddRoom></AddRoom>
        }
      ]
    }
  ]);