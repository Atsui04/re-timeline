import AppLayout from "./components/layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import TimelinePage from "./pages/TimelinePage";
import AboutPage from "./pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: TimelinePage },
      { path: "about", Component: AboutPage },
    ],
  },
]);
