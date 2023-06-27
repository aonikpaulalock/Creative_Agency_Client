import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import AllProjects from "../Pages/Portfolio/AllProjects";
import MobileApps from "../Pages/Portfolio/MobileApps";
import WebDesignProjects from "../Pages/Portfolio/WebDesignProjects";
import BrandingProjects from "../Pages/Portfolio/BrandingProjects";
import VideoProjects from "../Pages/Portfolio/VideoProjects";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
        children:[
           {
            path:"/portfolio",
            element: <AllProjects/>,
            loader:()=> fetch("http://localhost:1000/projects"),
           },
           {
            path:"apps",
            element: <MobileApps/>,
            loader:()=> fetch("http://localhost:1000/projects"),
           },
           {
            path:"web",
            element: <WebDesignProjects/>,
            loader:()=> fetch("http://localhost:1000/projects"),
           },
           {
            path:"branding",
            element: <BrandingProjects/>,
            loader:()=> fetch("http://localhost:1000/projects"),
           },
           {
            path:"video",
            element: <VideoProjects/>,
            loader:()=> fetch("http://localhost:1000/projects"),
           },
        ]
      }
    ]
  },
]);