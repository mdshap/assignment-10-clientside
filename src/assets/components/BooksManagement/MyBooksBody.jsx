import React, { useState } from "react";
import { Link } from "react-router";
import UpdateModal from "../../Modals/UpdateModal";

const MyBooksBody = ({ book, count, handleDelete }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false)

  return (
    <tbody>
      <dialog open={modalOpen} className="modal">
        <div className="modal-box max-w-88">
          <p className="py-4 text-lg">Are you sure that you want to delete?</p>
          <div className="modal-action">
            <div method="dialog flex gap-6">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  handleDelete(book._id);
                  setModalOpen(false);
                }}
                className="btn mx-3 px-6 bg-red-600 text-white">
                Yes
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="btn px-6 bg-green-600 text-white">
                No
              </button>
            </div>
          </div>
        </div>
      </dialog>


      <div>
        <UpdateModal book={book} updateModalOpen={updateModalOpen} setUpdateModalOpen={setUpdateModalOpen}></UpdateModal>
      </div>


      {/* row 1 */}
      <tr className="">
        <td className="hidden lg:block">{count}</td>

        <td>
          <div className="flex items-center gap-3  w-50 lg:w-120">
            <div className="avatar border-2">
              <div className="h-30 w-20 md:h-45 md:w-30">
                <img src={book.coverImage} alt="book image" />
              </div>
            </div>
            <div className="">
              <div className="font-bold text-md md:text-xl ">{book.title}</div>
              <div className="text-sm opacity-50">{book.author}</div>
            </div>
          </div>
        </td>

        <td className="text-yellow-600 font-bold text-md md:text-lg">
          {book.rating}
        </td>
        <td className=" hidden sm:inline text-md  md:text-lg">
          <p className="my-14">{book.genre}</p>
        </td>

        <td>
          <div className="flex flex-col mt-2 gap-5 justify-between">
            <Link
            onClick={()=>setUpdateModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-green-600 text-white hover:bg-indigo-700 transition">
              Update
            </Link>

            <Link
              onClick={() => setModalOpen(true)}
              className="flex-1 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-red-500 text-white hover:bg-indigo-700 transition">
              Delete
            </Link>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default MyBooksBody;
