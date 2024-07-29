import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import App from "../App";
import ArabicPage from "../pages/Arabic";
import EnglishPage from "../pages/English";
import CookingPage from "../pages/Cooking";
import ArchivesPage from "../pages/Archives";
import ChurchPage from "../pages/Church";
import HandymanPage from "../pages/Handyman";
import MVPPage from "../pages/MVP";
import TravelPage from "../pages/Travel";
import TVPage from "../pages/TV";
import VideoPage from "../pages/Video";
import ImagesPage from "../pages/Images";
import MusicPage from "../pages/Music";
import SoftwarePage from "../pages/Software";
import SchoolDistricts from "../pages/SchoolDistricts";

/**
 * The router configuration for the application.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage title={"Medhat مدحت 🇪🇬"} 
        subtitle={""}>
          Ethiopia, Egypt, Canada
        </HomePage>
      },
      {
        path: "/arabic",
        element: <ArabicPage />,
      },
      {
        path: "/english",
        element: <EnglishPage />,
      },
      {
        path: "/cooking",
        element: <CookingPage />,
      },
      {
        path: "/archives",
        element: <ArchivesPage />,
      },
      {
        path: "/church",
        element: <ChurchPage />,
      },
      {
        path: "/handyman",
        element: <HandymanPage />,
      },
      {
        path: "/mvp",
        element: <MVPPage />,
      },
      {
        path: "/travel",
        element: <TravelPage />,
      },
      {
        path: "/tv",
        element: <TVPage />,
      },
      {
        path: "/video",
        element: <VideoPage />,
      },
      {
        path: "/music",
        element: <MusicPage />,
      },
      {
        path: "/images",
        element: <ImagesPage />,
      },
      {
        path: "/software",
        element: <SoftwarePage />,
      },
      {
        path: "/school-districts",
        element: <SchoolDistricts />,
      },
    ],
  },
]);
