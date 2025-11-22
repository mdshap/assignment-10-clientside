import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./assets/components/layout/Root/Root";
import Home from "./assets/components/Home/Home";
import AddBook from "./assets/components/BooksManagement/AddBook";
import Register from "./assets/components/UserManagement/Register";
import Login from "./assets/components/UserManagement/Login";
import AuthProvider from "./assets/components/Contexts/AuthProvider";

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
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/add-book",
        Component: AddBook,
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
