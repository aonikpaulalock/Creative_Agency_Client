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
      }
    ]

  },
]);