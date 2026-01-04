import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const UpdateModal = ({ book, updateModalOpen, setUpdateModalOpen }) => {

    const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBookInfo = {
      title: e.target.title.value,
      author: e.target.author.value,
      genre: e.target.genre.value,
      rating: parseFloat(e.target.rating.value),
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };

    axios
      .patch(`http://localhost:3000/my-books/${book._id}`, updatedBookInfo)
      .then((res) => {
        console.log(res.data)
        setUpdateModalOpen(false);
        toast.success("Successfully Updated");
        navigate(0)
      })
      .catch((err) => {
        console.error(err);
        toast.error("Update failed");
      });
  };

  return (
    <dialog open={updateModalOpen} className="modal">
      <div className="modal-box max-w-4xl">
        <div className="w-full mx-auto bg-transparent rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 flex items-start">
              <div className="w-full rounded-lg overflow-hidden shadow">
                <img
                  src={book?.coverImage || "/mnt/data/A_high-resolution_digital_photograph_captures_the_.png"}
                  alt={book?.title}
                  className="w-full h-auto object-cover aspect-[2/3]"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Update Book</h2>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm mb-1">Book Title</label>
                  <input name="title" defaultValue={book?.title} type="text" required className="input input-bordered w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Author</label>
                  <input name="author" defaultValue={book?.author} type="text" required className="input input-bordered w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Genre</label>
                  <input name="genre" defaultValue={book?.genre} type="text" required className="input input-bordered w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Rating (out of 5)</label>
                  <input
                    name="rating"
                    defaultValue={book?.rating}
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="md:col-span-2 flex flex-col">
                  <label className="text-sm mb-1">Cover Image URL</label>
                  <input name="coverImage" defaultValue={book?.coverImage} type="url" required className="input input-bordered w-full" />
                </div>

                <div className="md:col-span-2 flex flex-col">
                  <label className="text-sm mb-1">Summary</label>
                  <textarea name="summary" defaultValue={book?.summary} required className="textarea textarea-bordered w-full h-28"></textarea>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Your Name</label>
                  <input name="userName" defaultValue={book?.userName || ""} type="text" required className="input input-bordered w-full" />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm mb-1">Your Email</label>
                  <input name="userEmail" defaultValue={book?.userEmail} type="email" required disabled className="input input-bordered w-full bg-transparent" />
                </div>

                <div className="md:col-span-2 flex gap-3 mt-2">
                  <button type="submit" className="btn bg-green-600 text-white flex-1">
                    Update Book
                  </button>

                  <button type="button" onClick={() => setUpdateModalOpen(false)} className="btn flex-1 border border-gray-300">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateModal;
