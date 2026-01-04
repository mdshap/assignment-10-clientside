import React, { useEffect, useState, use } from "react";
import { NavLink, Link } from "react-router";
import { FaBookOpen, FaHome, FaBook, FaStar } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { AuthContext } from "../../Contexts/AuthContext";

const DashSidebar = () => {
  const { signOutUser } = use(AuthContext);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = () => {
      if (mq.matches) setCollapsed(false);
      else setCollapsed(true);
    };
    handle();
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  const sidebarWidth = collapsed ? "w-16" : "w-60";

  const navItem = ({ isActive }) =>
    `
    flex items-center gap-3 py-2.5 transition
    ${collapsed ? "justify-center" : "pl-5"}
    ${
      isActive
        ? "bg-secondary text-white"
        : "text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-800"
    }
  `;

  return (
    <aside
      className={`sticky top-0 h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-800 shadow-lg transition-all duration-200 ${sidebarWidth}`}
    >
      <div
        className={`flex items-center gap-3 border-b dark:border-gray-800 py-4 ${
          collapsed ? "justify-center" : "px-5"
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <FaBookOpen className="text-secondary text-xl shrink-0" />
          {!collapsed && (
            <span className="font-bold text-lg text-gray-800 dark:text-white">
              Books <span className="text-secondary">Haven</span>
            </span>
          )}
        </Link>
      </div>

      <nav className="mt-6 space-y-1">

        <Link
          to="/"
          className={`flex items-center gap-3 py-2.5 transition
            ${collapsed ? "justify-center" : "pl-5"}
            text-gray-700 dark:text-gray-300
            hover:bg-pink-100 dark:hover:bg-gray-800
          `}
        >
          <FaHome className="text-lg shrink-0" />
          {!collapsed && <span>Go to Home</span>}
        </Link>

        <NavLink to="/dashboard" end className={navItem}>
          <FaHome className="text-lg shrink-0" />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/dashboard/my-books" className={navItem}>
          <FaBook className="text-lg shrink-0" />
          {!collapsed && <span>My Books</span>}
        </NavLink>

        <NavLink to="/dashboard/add-book" className={navItem}>
          <FaStar className="text-lg shrink-0" />
          {!collapsed && <span>Add Book</span>}
        </NavLink>
      </nav>

      <div className={`absolute bottom-4 w-full ${collapsed ? "px-2" : "px-4"}`}>
        <button
          onClick={() => {
            if (!confirm("Do you want to logout?")) return;
            signOutUser();
          }}
          className="btn btn-sm btn-outline w-full text-red-500 hover:bg-red-500 hover:text-white"
        >
          {collapsed ? (
            <LuLogOut className="text-lg" />
          ) : (
            <span className="flex items-center justify-center gap-2">
              Logout <LuLogOut />
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default DashSidebar;
