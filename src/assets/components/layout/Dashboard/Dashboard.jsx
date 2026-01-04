import { Outlet } from "react-router";
import DashSidebar from "./DashSidebar";
import DashNavbar from "./DashNavbar";
import { use, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Loader/Loader";

const Dashboard = () => {
  const { loading } = use(AuthContext);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const html = document.documentElement;

    html.setAttribute("data-theme", savedTheme);
    html.classList.toggle("dark", savedTheme === "dark");
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex min-h-screen bg-pink-50 dark:bg-gray-950">
      <DashSidebar />

      <div className="flex-1 flex flex-col">
        <DashNavbar />
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
