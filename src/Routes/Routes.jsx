import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import AllProjects from "../Pages/Portfolio/AllProjects";
import MobileApps from "../Pages/Portfolio/MobileApps";
import WebDesignProjects from "../Pages/Portfolio/WebDesignProjects";
import BrandingProjects from "../Pages/Portfolio/BrandingProjects";
import VideoProjects from "../Pages/Portfolio/VideoProjects";
import PortfolioDetails from "../Pages/PorfolioDetails/PortfolioDetails";
import DetailsContainer from "../Pages/PorfolioDetails/DetailsContainer";
import About from "../Pages/About/About";
import BlogsContainer from "../Pages/Blogs/BlogsContainer";
import { FaAllergies } from "react-icons/fa";
import All_Blogs from "../Pages/Blogs/All_Blogs";
import Creativity_Blogs from "../Pages/Blogs/Creativity_Blogs";
import Design_Blogs from "../Pages/Blogs/Design_Blogs";
import Inspiration_Blogs from "../Pages/Blogs/Inspiration_Blogs";
import News_Blogs from "../Pages/Blogs/News_Blogs";
import Culture_Blogs from "../Pages/Blogs/Culture_Blogs";
import Blog_Details from "../Pages/Blog_Details/Blog_Details";
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
        element: <Portfolio />,
        children: [
          {
            path: "/portfolio",
            element: <AllProjects />
          },
          {
            path: "apps",
            element: <MobileApps />,
          },
          {
            path: "web",
            element: <WebDesignProjects />,
          },
          {
            path: "branding",
            element: <BrandingProjects />,
          },
          {
            path: "video",
            element: <VideoProjects />,
          },
        ]
      },
      {
        path: "/portfolio/:dynamicId",
        element: <DetailsContainer />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <BlogsContainer />,
        children: [
          {
            path: "/blogs",
            element: <All_Blogs />
          },
          {
            path: "creativity",
            element: <Creativity_Blogs />,
          },
          {
            path: "design",
            element: <Design_Blogs />,
          },
          {
            path: "inspiration",
            element: <Inspiration_Blogs />,
          },
          {
            path: "news",
            element: <News_Blogs />,
          },
          {
            path: "culture",
            element: <Culture_Blogs />,
          }
        ]
      },
      {
        path: "/blogs/:id",
        element: <Blog_Details />,
      }
    ]

  },
]);