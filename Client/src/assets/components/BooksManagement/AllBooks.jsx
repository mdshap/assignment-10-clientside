import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import TableBody from "./TableBody";
import Loader from "../Loader/Loader";
import { AuthContext } from "../Contexts/AuthContext";
import {
  FaSortNumericDown,
  FaSortNumericDownAlt,
  FaFilter,
} from "react-icons/fa";

const ITEMS_PER_PAGE = 6;

const AllBooks = () => {
  const { loading } = useContext(AuthContext);

  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(true);

  // Controls
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [minRating, setMinRating] = useState("");
  const [ascending, setAscending] = useState(false);

  // UI
  const [showFilters, setShowFilters] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  /* Fetch books */
  useEffect(() => {
    axios.get("https://assignment-10-serverside-gyny.onrender.com/books").then((res) => {
      setAllBooks(res.data);
      setBooksLoading(false);
    });
  }, []);

  /* Apply search, filter & sort */
  useEffect(() => {
    let data = [...allBooks];

    if (search.trim()) {
      data = data.filter(
        (b) =>
          b.title.toLowerCase().includes(search.toLowerCase()) ||
          b.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre !== "all") {
      data = data.filter((b) => b.genre === genre);
    }

    if (minRating !== "") {
      data = data.filter((b) => b.rating >= parseFloat(minRating));
    }

    data.sort((a, b) =>
      ascending ? a.rating - b.rating : b.rating - a.rating
    );

    setFilteredBooks(data);
    setCurrentPage(1);
  }, [search, genre, minRating, ascending, allBooks]);

  if (booksLoading || loading) return <Loader />;

  /* Pagination */
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredBooks.length / ITEMS_PER_PAGE);

  return (
    <div className="mt-5 md:mt-10 px-4 mb-20">

      <div className="flex justify-between  gap-4 items-stretch sm:items-center mb-6">

        <input
          type="text"
          placeholder="Search book or author"
          className="input input-bordered sm:1/2 lg:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3"><div className="relative">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white"
          >
            <FaFilter className="mr-2" /> <span className="hidden sm:block">Filters</span>
          </button>

          {showFilters && (
            <div className="
              absolute right-0 mt-2 w-72
              bg-white dark:bg-gray-900
              border border-gray-200 dark:border-gray-700
              rounded-xl shadow-lg
              p-4 z-50
            ">
              <div className="space-y-4">


                <div>
                  <label className="text-sm font-medium">Genre</label>
                  <select
                    className="select select-bordered w-full mt-1"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Epic Fantasy">Epic Fantasy</option>
                    <option value="Science Fiction">Science Fiction</option>
                    
                    <option value="Classic Fiction">Classic Fiction</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Drama">Drama</option>
                    <option value="Romance">Romance</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Minimum Rating
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    placeholder="e.g. 4.5"
                    className="input input-bordered w-full mt-1"
                    value={minRating}
                    onChange={(e) => setMinRating(e.target.value)}
                  />
                </div>

                <div className="flex justify-between pt-2">
                  <button
                    onClick={() => {
                      setGenre("all");
                      setMinRating("");
                    }}
                    className="text-sm text-gray-500 hover:text-secondary"
                  >
                    Clear
                  </button>

                  <button
                    onClick={() => setShowFilters(false)}
                    className="btn btn-sm bg-secondary text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setAscending(!ascending)}
          className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white"
        > 
          {ascending ? (
            <>
              <FaSortNumericDown /><span className="hidden sm:block">Rating(Asc)</span>
            </>
          ) : (
            <>
              <FaSortNumericDownAlt /><span className="hidden sm:block">Rating(Desc)</span>
            </>
          )}
        </button></div>
        
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-pink-200 text-black">
              <th className="hidden lg:block">#</th>
              <th>Book</th>
              <th>Rating</th>
              <th className="hidden sm:block">Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          {paginatedBooks.map((book, idx) => (
            <TableBody
              key={book._id}
              book={book}
              count={start + idx + 1}
            />
          ))}
        </table>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          className="btn btn-outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="btn btn-outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
