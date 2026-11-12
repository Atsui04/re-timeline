import AppLayout from "./components/layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import TimelinePage from "./pages/TimelinePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: TimelinePage },
      { path: "about", Component: AboutPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
