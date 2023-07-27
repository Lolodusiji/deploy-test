import React, { useEffect } from "react";
import { Navigate, useRoutes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar from "./pages/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Discovery from "./pages/discovery/Discovery";
import Socail from "./pages/socials/Socail";
import Sorry from "./pages/notavlb/Sorry";
import Segmentation from "./pages/segmentation/Segmentation";

export default function Router() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/signup");
    }
  }, []);
  return useRoutes([
    { path: "/signup", element: <Login /> },
    {
      path: "/",
      element: <Sidebar />,
      children: [
        { path: "/", element: <Discovery /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "Social", element: <Socail /> },
        { path: "segmentation", element: <Segmentation /> },
        { path: "competitors", element: <Sorry /> },
        { path: "channels", element: <Sorry /> },
      ],
    },
  ]);
}
