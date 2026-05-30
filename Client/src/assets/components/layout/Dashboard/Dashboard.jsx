import { Outlet } from "react-router";
import DashSidebar from "./DashSidebar";
import DashNavbar from "./DashNavbar";
import { use, useEffect } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Loader/Loader";
import GoToTop from "../../../../ScrollTop/GoToTop";
import ScrollToTopButton from "../../../../ScrollTop/ScrollToTopButton";

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
      <GoToTop/>
      <DashSidebar />

      <div className="flex-1 flex flex-col">
        <DashNavbar />
        <main className="flex-1 p-2 sm:p-4 md:p-6">
          <Outlet />
        </main>
        <ScrollToTopButton/>
      </div>
    </div>
  );
};

export default Dashboard;
