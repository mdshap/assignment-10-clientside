import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router";
import Root from "./assets/components/layout/Root/Root";
import Home from "./assets/components/Home/Home";
import AddBook from "./assets/components/BooksManagement/AddBook";
import Register from "./assets/components/UserManagement/Register";
import Login from "./assets/components/UserManagement/Login";
import AuthProvider from "./assets/components/Contexts/AuthProvider";
import BookDetails from "./assets/components/BooksManagement/BookDetails";
import MyBooks from "./assets/components/BooksManagement/MyBooks";
import AllBooks from "./assets/components/BooksManagement/AllBooks";
import PrivateRoute from "./assets/components/PrivateRoute/PrivateRoute";
import NotFound from "./assets/components/Pages/NotFound";

const router = createHashRouter([
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
        element: <PrivateRoute>
          <AddBook></AddBook>
        </PrivateRoute>
      },
      {
        path: "/all-books",
        Component: AllBooks
      },
      {
        path: "/book-details/:id",
        element: <PrivateRoute>
          <BookDetails></BookDetails>
        </PrivateRoute>
      },
      {
        path: "/myBooks",
        element: <PrivateRoute>
          <MyBooks></MyBooks>
        </PrivateRoute>
      },
      {
    path: '*',
    Component: NotFound

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
