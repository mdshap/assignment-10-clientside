import React, { use } from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Loader from "../../Loader/Loader";
import ReactToaster from "../../ReactToaster";
import Footer from "../Footer/Footer";
import { Tooltip } from "react-tooltip";

const Root = () => {
  const { loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 max-w-[1600px] mx-auto">
      <NavBar />
      <Tooltip
        id="my-tooltip"
        className="z-50"
        style={{
          color: "#fff",
          fontSize: "13px",
          borderRadius: "6px",
          padding: "6px 10px",
        }}
      />
      <ReactToaster></ReactToaster>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
