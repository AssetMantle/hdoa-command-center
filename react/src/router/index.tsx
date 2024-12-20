import { createBrowserRouter, Outlet } from "react-router-dom";

import IgntHeader from "../components/IgntHeader";
import DataView from "../views/DataView";
import PortfolioView from "../views/PortfolioView";
import Dashboard from "../views/Dashboard";

const items = [
  {
    label: "Portfolio",
    to: "/",
  },
  {
    label: "Data",
    to: "/data",
  },
];
const Layout = () => {
  return (
    <>
      <IgntHeader navItems={items} />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      // { path: "/data", element: <DataView /> },
    ],
  },
]);

export default router;
