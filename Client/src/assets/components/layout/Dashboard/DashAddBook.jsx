import React, { useEffect, useState } from "react";
import AddBookForm from "../../BooksManagement/AddBookForm";
import { Link } from "react-router";
import toast from "react-hot-toast";

const DashAddBook = () => {
  const [bookAdded, setBookAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [resetForm, setResetForm] = useState(false);

  useEffect(() => {
    if (bookAdded) {
      setModalOpen(true);
      setResetForm(false);
      toast.success("The book has been added successfully");
    }
  }, [bookAdded]);

  return (
    <>
      <dialog open={modalOpen} className="modal">
        <div className="modal-box">
          <h3 className="font-semibold text-lg text-center">
            Book Added Successfully
          </h3>

          <p className="py-4 text-center text-gray-600 dark:text-gray-400">
            Your book has been added to the system.
          </p>

          <div className="modal-action flex justify-center gap-4">
            <button
              onClick={() => {
                setResetForm(true);
                setModalOpen(false);
              }}
              className="btn bg-secondary text-white"
            >
              Add More
            </button>

            <Link
              to="/dashboard/my-books"
              onClick={() => setModalOpen(false)}
              className="btn btn-outline"
            >
              View My Books
            </Link>
          </div>
        </div>
      </dialog>

      <AddBookForm
        setBookAdded={setBookAdded}
        resetForm={resetForm}
      />
    </>
  );
};

export default DashAddBook;
