import React from "react";
import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const { user, loading, signOutUser, setUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => console.log(error.message));
  };

  const links = (
    <div className="lg:flex gap-3 text-center">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-books">All Books</NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <>
          {loading ? (
            ""
          ) : (
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          )}
        </>
      )}

      {user && (
        <>
          <li>
            <NavLink to="/add-book">Add Book</NavLink>
          </li>
          <li>
            <NavLink to="/my-books">My Books</NavLink>
          </li>
        </>
      )}
    </div>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100 max-w-[1600px] mx-auto shadow-sm">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a
            className="btn btn-ghost text-xl font-bold hover:bg-transparent hover:border-0"
            href="/">
            <FaBookOpen />
            Books<span className="text-secondary">Haven</span>
          </a>
        </div>

        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 justify-center items-center">
              <img
                className="rounded-full object-cover w-[40px] h-[40px]"
                src="/public/about.png"
                alt="user_img"
                title={`User: ${user.displayName}`}
              />
              <a
                onClick={handleSignOut}
                className="btn btn-secondary hover:bg-secondary text-[11px] md:text-[14px] hover:text-white bg-white text-secondary">
                Logout <MdLogout />
              </a>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                className="btn px-3 md:px-4 text-[11px] md:text-[14px] btn-secondary"
                to="/login">
                Login <FaUser />
              </Link>
              <Link
                to="/register"
                className="btn text-[11px] px-3 py-2 md:px-4 md:text-[14px] border-secondary text-secondary">
                Register <MdOutlineAssignment />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
