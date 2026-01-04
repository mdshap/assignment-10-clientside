import React, { useState } from "react";
import UpdateModal from "../../Modals/UpdateModal";

const MyBooksBody = ({ book, count, setMyBooks, handleDelete }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  return (
    <>
      {/* DELETE MODAL */}
      <dialog open={deleteModalOpen} className="modal">
        <div className="modal-box max-w-sm">
          <p className="text-lg font-medium text-center">
            Delete this book?
          </p>

          <div className="modal-action justify-center gap-4">
            <button
              onClick={() => {
                handleDelete(book._id);
                setDeleteModalOpen(false);
              }}
              className="btn bg-red-500 text-white px-6"
            >
              Yes
            </button>
            <button
              onClick={() => setDeleteModalOpen(false)}
              className="btn bg-gray-300 text-black px-6"
            >
              No
            </button>
          </div>
        </div>
      </dialog>

      {/* UPDATE MODAL */}
      <UpdateModal
        book={book}
        setMyBooks={setMyBooks}
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
      />

      {/* DESKTOP ROW */}
      <tr className="hidden md:table-row align-middle">
        <td className="hidden lg:table-cell">{count}</td>

        <td>
          <div className="flex items-center gap-3 max-w-[420px]">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-14 h-20 object-cover rounded-md"
            />
            <div className="min-w-0">
              <p className="font-semibold truncate">{book.title}</p>
              <p className="text-sm text-gray-500 truncate">
                {book.author}
              </p>
            </div>
          </div>
        </td>

        <td className="text-center text-yellow-500 font-bold">
          {book.rating}
        </td>

        <td className="hidden sm:table-cell capitalize">
          {book.genre}
        </td>

        <td>
          <div className="flex flex-col gap-2 w-max">
            <button
              onClick={() => setUpdateModalOpen(true)}
              className="btn btn-xs bg-green-500 text-white"
            >
              Update
            </button>
            <button
              onClick={() => setDeleteModalOpen(true)}
              className="btn btn-xs bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

      {/* MOBILE CARD */}
      <tr className="md:hidden">
        <td colSpan="5">
          <div
            className="
              bg-white dark:bg-gray-900
              rounded-lg
              border border-pink-100 dark:border-gray-800
              p-3
              mb-3
            "
          >
            <div className="flex gap-3">
              {/* IMAGE */}
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-16 h-24 object-cover rounded-md flex-shrink-0"
              />

              {/* CONTENT */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate">
                  {book.title}
                </h3>

                <p className="text-xs text-gray-500 truncate">
                  {book.author}
                </p>

                {/* META */}
                <div className="flex flex-wrap items-center gap-1.5 mt-1 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
                    ⭐ {book.rating}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 capitalize">
                    {book.genre}
                  </span>
                </div>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button
                    onClick={() => setUpdateModalOpen(true)}
                    className="
                      h-8
                      rounded-md
                      bg-green-500
                      text-white
                      text-xs
                      font-medium
                      flex
                      items-center
                      justify-center
                    "
                  >
                    Update
                  </button>

                  <button
                    onClick={() => setDeleteModalOpen(true)}
                    className="
                      h-8
                      rounded-md
                      bg-red-500
                      text-white
                      text-xs
                      font-medium
                      flex
                      items-center
                      justify-center
                    "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default MyBooksBody;
