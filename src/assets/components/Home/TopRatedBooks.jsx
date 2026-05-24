import React, { use, useEffect, useState } from "react";
import BookCard from "../BooksManagement/BookCard";
import { Link } from "react-router";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";
import Loader from "../Loader/Loader";

const TopRatedBooks = () => {

  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(true)

  const {loading } =use(AuthContext)

  useEffect(() => {
    axios
      .get(`https://assignment-10-serverside-gyny.onrender.com/top-rated-books`)
      .then((res) => {
        setBooks(res.data);
        setBooksLoading(false)
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  return (
    <div className="w-full max-w-[1400px] mx-auto  bg-transparent mt-0 sm:mt-15 mb-20 px-2 sm:px-6">
      <h3 className="text-sm sm:text-2xl font-semibold  text-white mb-6">
        <span className="text-white text-center bg-secondary py-1 sm:pt-2  px-2 sm:px-4 inline-block  clip-trapezium">
          Top Rated
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>
      {
        loading || booksLoading ? <Loader></Loader> : <div>
        <div className="mt-3 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      </div>
      }
      
    </div>
  );
};

export default TopRatedBooks;
