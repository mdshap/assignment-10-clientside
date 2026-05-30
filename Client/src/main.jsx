import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "./assets/components/layout/Root/Root";
import Home from "./assets/components/Home/Home";
import Register from "./assets/components/UserManagement/Register";
import Login from "./assets/components/UserManagement/Login";
import AuthProvider from "./assets/components/Contexts/AuthProvider";
import BookDetails from "./assets/components/BooksManagement/BookDetails";
import AllBooks from "./assets/components/BooksManagement/AllBooks";
import PrivateRoute from "./assets/components/PrivateRoute/PrivateRoute";
import NotFound from "./assets/components/Pages/NotFound";
import PrivacyPolicy from "./assets/components/Pages/PrivacyPolicy";
import TermsConditions from "./assets/components/Pages/TermsConditions";
import AboutUs from "./assets/components/Pages/AboutUs";
import Disclaimer from "./assets/components/Pages/Disclaimer";
import Dashboard from "./assets/components/layout/Dashboard/Dashboard";
import Profile from "./assets/components/layout/Dashboard/Profile";
import DashHome from "./assets/components/layout/Dashboard/DashHome";
import DashMyBooks from "./assets/components/layout/Dashboard/DashMyBooks";
import DashAddBook from "./assets/components/layout/Dashboard/DashAddBook";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "terms-conditions",
        Component: TermsConditions,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "disclaimer",
        Component: Disclaimer,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/all-books",
        Component: AllBooks,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      { index: true, Component: DashHome },
      { path: "profile", element: <Profile /> },
      {
        path: "my-books",
        element: (
          <PrivateRoute>
            <DashMyBooks></DashMyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "add-book",
        element: (
          <PrivateRoute>
            <DashAddBook></DashAddBook>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
