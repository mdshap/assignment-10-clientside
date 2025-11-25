import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import { AuthContext } from "../Contexts/AuthContext";

const BookDetails = () => {
  const { user } = use(AuthContext);

  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get(`https://assignment-10-serverside-gyny.onrender.com/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://assignment-10-serverside-gyny.onrender.com/books/${id}/comments`)
      .then((res) => setComments(res.data || []))
      .catch((err) => console.log(err));
  }, [id]);

  if (!book) return <Loader />;

  const fullStars = Math.floor(book.rating);
  const halfStar = book.rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setSubmitting(true);

    const comment = {
      text: newComment.trim(),
      userName: user?.displayName,
      userEmail: user?.email,
      photoURL: user?.photoURL,
    };

    axios.post(`https://assignment-10-serverside-gyny.onrender.com/books/${id}/comments`, comment)
  .then(() => {
    return axios.get(`https://assignment-10-serverside-gyny.onrender.com/books/${id}/comments`);
  })
  .then((res) => setComments(res.data))
      
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setSubmitting(false));
  
};


  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-gray-950 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 place-content-center md:grid-cols-3 gap-6 p-6 md:p-8">
            <div className="md:col-span-1 flex items-start">
              <div className="w-full">
                <div className="rounded-xl overflow-hidden shadow-2xl transform transition hover:scale-[1.01]">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-auto object-cover aspect-2/3"
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col justify-center ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                {book.title}
              </h1>

              <p className="mt-2 text-sm lg:text-lg text-gray-300">
                by{" "}
                <span className="font-medium text-green-300">
                  {book.author}
                </span>
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-primary px-3 py-1 rounded-full text-sm lg:text-lg text-gray-100">
                  <span className="font-medium">{book.genre}</span>
                </div>

                <div className="inline-flex items-center gap-1 text-sm">
                  <div className="flex items-center">
                    {Array.from({ length: fullStars }).map((_, i) => (
                      <svg
                        key={`f-${i}`}
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    ))}
                    {halfStar && (
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    )}
                    {Array.from({ length: emptyStars }).map((_, i) => (
                      <svg
                        key={`e-${i}`}
                        className="w-4 h-4 text-gray-300"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.45a1 1 0 00-1.175 0l-3.37 2.45c-.783.57-1.838-.197-1.538-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.063 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm lg:text-md text-gray-300 ml-2">
                    {book.rating} / 5
                  </div>
                </div>
              </div>

              <div className="mt-6 text-gray-200 leading-relaxed text-base lg:text-lg">
                {book.summary}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-300">
                    Genre
                  </div>
                  <div className="mt-1 font-medium text-gray-800 dark:text-gray-100">
                    {book.genre}
                  </div>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="text-xs text-gray-500 dark:text-gray-300">
                    Added by
                  </div>
                  <div className="mt-1 font-medium text-secondary">
                    {book.userEmail}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              Comments
            </h2>

            <form onSubmit={handleCommentSubmit} className="mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write your comment..."
                className="w-full textarea textarea-bordered bg-gray-900 text-gray-100 placeholder-gray-400"
                rows={4}></textarea>

              <div className="mt-3 flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 rounded-md bg-secondary text-white hover:opacity-90 transition disabled:opacity-60">
                  {submitting ? "Posting..." : "Post Comment"}
                </button>
                <button
                  type="button"
                  onClick={() => setNewComment("")}
                  className="px-4 py-2 rounded-md border border-gray-700 text-gray-200">
                  Clear
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {comments.length === 0 ? (
                <div className="text-sm text-gray-400">
                  No comments yet. Be the first to comment.
                </div>
              ) : (
                comments.map((c) => (
                  <div
                    key={c._id}
                    className="flex gap-4 items-start bg-gray-900 p-4 rounded-lg">
                    <img
                      src={
                        c.photoURL ||
                        "/mnt/data/A_high-resolution_digital_photograph_captures_the_.png"
                      }
                      alt={c.userName || "user"}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-100">
                          {c.userName || "Anonymous"}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(c.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <p className="mt-1 text-gray-300">{c.text}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
