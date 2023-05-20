import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/SignUp";
import AllToys from "../Components/AllToys/AllToys";
import MyToys from "../Components/MyToys/MyToys";
import AddToys from "../Components/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Components/AllToys/ViewDetails";
import UpdateToys from "../Components/MyToys/UpdateToys";
import Blogs from "../Components/Blogs/Blogs";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
          <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allToys/${params.id}`),
      },
      {
        path: "myToys",
        element: <PrivateRoute>
          <MyToys></MyToys>
        </PrivateRoute>,
      },
      {
        path: "addToys",
        element: <AddToys></AddToys>,
      },
      // {
      //   path: 'updateToy/:id',
      //   element:<UpdateToys></UpdateToys>,
      //   loader: ({params}) => fetch(`http://localhost:5000/myToys/${params.id}`)
      // },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path:'blogs',
        element: <Blogs></Blogs>
      }
    ],
    

    
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
