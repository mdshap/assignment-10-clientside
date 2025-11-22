import React, { useEffect, useState } from "react";
import BookCard from "../BooksManagement/BookCard";
import { Link } from "react-router";
import axios from "axios";

const PopularBooks = () => {

  const [data, setData] = useState([])
  useEffect( ()=>{
    axios.get('http://localhost:3000/popular-books')
    .then(res=>{
      setData(res.data)
      console.log(res.data);
    })
    .catch(error=>{
      console.log(error)
    })
  }, [])

  return (
    <div className="`w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 bg-transparent my-10">
      <h3 className="text-center text-3xl font-semibold mb-3">
        Popular <span className="text-secondary ">Books</span>
      </h3>
      <hr />
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {
          data.map(book=>
            <BookCard book={book}></BookCard>
          )
}
      </div>
      <div className="w-full flex justify-center mt-5">
        <Link to="/all-books" className="btn btn-ghost mx-auto">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default PopularBooks;
