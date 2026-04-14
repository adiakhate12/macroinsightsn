import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Analysis } from "./pages/Analysis";
import { Dashboard } from "./pages/Dashboard";
import { Simulation } from "./pages/Simulation";
import { Report } from "./pages/Report";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "analyse", Component: Analysis },
      { path: "dashboard", Component: Dashboard },
      { path: "simulation", Component: Simulation },
      { path: "rapport", Component: Report },
      { path: "about", Component: About },
    ],
  },
]);
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./app/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./app/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);
