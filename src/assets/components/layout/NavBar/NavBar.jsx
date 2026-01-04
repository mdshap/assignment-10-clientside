import { useEffect, useState, use } from "react";
import { NavLink, Link } from "react-router";
import {
  FaBookOpen,
  FaHome,
  FaBook,
  FaPlusCircle,
  FaUserCircle,
  FaInfoCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "light";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    html.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition
     ${
       isActive
         ? "bg-primary text-white"
         : "text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-800"
     }`;

  return (
    <div className="navbar bg-white dark:bg-gray-900 shadow-md px-4">
      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </label>

          {/* MOBILE DROPDOWN */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-3 shadow-lg bg-white dark:bg-gray-900 rounded-xl w-64 space-y-1"
          >
            <NavLink to="/" className={navItemClass}>
              <FaHome /> Home
            </NavLink>

            <NavLink to="/all-books" className={navItemClass}>
              <FaBook /> All Books
            </NavLink>

            <NavLink to="/add-book" className={navItemClass}>
              <FaPlusCircle /> Add Book
            </NavLink>

            <NavLink to="/myBooks" className={navItemClass}>
              <FaBookOpen /> My Books
            </NavLink>

            <NavLink to="/dashboard" className={navItemClass}>
              <FaTachometerAlt /> Dashboard
            </NavLink>

            <NavLink to="/about" className={navItemClass}>
              <FaInfoCircle /> About Us
            </NavLink>

            {/* THEME TOGGLE */}
            <div className="flex items-center justify-between px-2 pt-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {theme === "dark" ? "Dark" : "Light"}
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
            </div>
          </ul>
        </div>

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <FaBookOpen className="text-secondary text-xl" />
          <span className="font-bold text-lg">
            Books <span className="text-secondary">Haven</span>
          </span>
        </Link>
      </div>

      {/* CENTER (DESKTOP NAV) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <NavLink to="/" className={navItemClass}>
            <FaHome /> Home
          </NavLink>

          <NavLink to="/all-books" className={navItemClass}>
            <FaBook /> All Books
          </NavLink>

          <NavLink to="/dashboard/add-book" className={navItemClass}>
            <FaPlusCircle /> Add Book
          </NavLink>

          <NavLink to="/dashboard/my-books" className={navItemClass}>
            <FaBookOpen /> My Books
          </NavLink>

          <NavLink to="/dashboard" className={navItemClass}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end flex items-center gap-0 xs:gap-4">
        {/* THEME TOGGLE (DESKTOP) */}
        <div className="hidden xs:flex items-center gap-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            {theme === "dark" ? "Dark" : "Light"}
          </span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
        </div>

        {/* USER DROPDOWN */}
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  className="w-9 h-9 rounded-full object-cover border-2 border-secondary"
                />
              ) : (
                <FaUserCircle className="text-3xl text-gray-500" />
              )}
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 rounded-xl w-44"
            >
              <li>
                <Link to="/dashboard/profile" className="flex gap-2 px-3 py-2">
                  <FaUserCircle /> Profile
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="flex gap-2 px-3 py-2">
                  <FaTachometerAlt /> Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={signOutUser}
                  className="flex gap-2 px-3 py-2 text-red-500 w-full"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn bg-secondary text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
