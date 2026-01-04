import axios from "axios";
import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import MyBooksBody from "../../BooksManagement/MyBooksBody";
import Loader from "../../Loader/Loader";

const DashMyBooks = () => {
  const { user, loading } = use(AuthContext);
  const [myBooks, setMyBooks] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://assignment-10-serverside-gyny.onrender.com/my-books/${user.email}`)
      .then((res) => {
        setMyBooks(res.data);
        setDataLoading(false);
      })
      .catch(() => setDataLoading(false));
  }, [user?.email]);

  const handleDelete = (id) => {
    axios
      .delete(`https://assignment-10-serverside-gyny.onrender.com/my-books/${id}/${user.email}`)
      .then(() => {
        setMyBooks((prev) => prev.filter((b) => b._id !== id));
      })
      .catch((error) => console.log(error));
  };

  if (loading || dataLoading) return <Loader />;

  return (
    <div
      className="
        bg-white dark:bg-gray-900
        rounded-xl shadow
        p-3 sm:p-4 md:p-6
      "
    >
      <div className="mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-secondary">
          My Books
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Manage books you have added
        </p>
      </div>

      {myBooks.length === 0 ? (
        <div className="text-center py-12 sm:py-20 text-gray-500">
          <p className="text-base sm:text-lg font-medium">
            No books added yet
          </p>
          <p className="text-xs sm:text-sm mt-1">
            Start by adding books from the Add Book page
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="hidden md:table-header-group">
              <tr className="bg-pink-100 dark:bg-gray-800">
                <th className="hidden lg:table-cell">S.I</th>
                <th>Book Name & Author</th>
                <th className="text-center">Rating</th>
                <th className="hidden sm:table-cell">Genre</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {myBooks.map((book, index) => (
                <MyBooksBody
                  key={book._id}
                  book={book}
                  count={index + 1}
                  setMyBooks={setMyBooks}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashMyBooks;
