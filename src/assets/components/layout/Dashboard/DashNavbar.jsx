import { use, useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const DashNavbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(() => {
    const saved =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved) return saved;

    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    html.setAttribute("data-theme", theme);
    html.classList.toggle("dark", theme === "dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="h-13.25 bg-white dark:bg-gray-900 border-b dark:border-gray-800 flex items-center justify-between px-4 sticky z-50 top-0 shadow-md">
      <h2 className="font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-gray-600 dark:text-gray-300">
            {theme === "dark" ? "Dark" : "Light"}
          </span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer flex items-center gap-2">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                className="w-8 h-8 rounded-full object-cover"
                alt="user"
              />
            ) : (
              <FaUserCircle className="text-2xl text-gray-500 dark:text-gray-300" />
            )}
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 rounded-lg w-44"
          >
            <li>
              <Link to="/dashboard/profile" className="block px-3 py-2">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="block px-3 py-2">
                Go Back to Home
              </Link>
            </li>
            <li>
              <button
                onClick={signOutUser}
                className="w-full text-left px-3 py-2 text-red-500"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default DashNavbar;
