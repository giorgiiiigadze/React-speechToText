import { createBrowserRouter } from "react-router-dom"

import RequireAuth from '../routes/RequireAuth'

import AppLayout from "./layout/AppLayout"

import Landing from '../pages/Landing/Landing'
import Home from '../pages/Home/Home'
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"
import NotFound from "../pages/NotFound"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    element: <RequireAuth />,
    children: [
      {
        path: "/home",
        element: <AppLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
])
