import React, { useEffect, useState } from "react";
import AddBookForm from "./AddBookForm";
import { Link } from "react-router";
import toast from "react-hot-toast";

const AddBook = () => {
  const [bookAdded, setBookAdded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [resetForm, setResetForm] = useState(false);


  useEffect(() => {
    if (bookAdded) {
      setModalOpen(true);
      setResetForm(false)
      toast.success('The Book Has Been Added')
    }
  }, [bookAdded]);

  return (
    <div>
      <dialog open={modalOpen} className="modal">
        <div className="modal-box">
          <p className="py-4 text-lg text-center">
            The Book is Successfully Added
          </p>
          <div className="modal-action">
            <div method="dialog" className="flex gap-5 justify-center items-center w-full">

              <Link
                onClick={() => {
                  setResetForm(true);
                  setModalOpen(false);
                }}
                className="btn px-6 bg-red-600 text-white">
                Add More
              </Link>

              <Link
                to="/"
                onClick={() => setModalOpen(false)}
                className="btn px-6 bg-green-600 text-white">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </dialog>
      <AddBookForm
        setBookAdded={setBookAdded}
        resetForm={resetForm}></AddBookForm>
    </div>
  );
};

export default AddBook;
