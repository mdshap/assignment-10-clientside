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
      .get(`http://localhost:3000/top-rated-books`)
      .then((res) => {
        setBooks(res.data);
        setBooksLoading(false)
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);




  return (
    <div className="`w-full max-w-[1400px] mx-auto  bg-transparent mt-10 sm:mt-15 mb-20 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold  text-white mb-6">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 inline-block  clip-trapezium">
          Top Rated
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>
      {
        loading || booksLoading ? <Loader></Loader> : <div>
        <div className="mt-3 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
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
