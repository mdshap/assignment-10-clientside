import axios from "axios";
import React, { use, useEffect, useState } from "react";
import TableBody from "./TableBody";
import Loader from "../Loader/Loader";
import { AuthContext } from "../Contexts/AuthContext";

const AllBooks = () => {

  const [books, setBooks] = useState([])

  const [booksLoading, setLoading] = useState(true)
  const {loading} = use(AuthContext)

  useEffect(() => {
    axios
      .get('http://localhost:3000/books')
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(booksLoading || loading){
    return(
      <Loader></Loader>
    )
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="">
            <tr>
              <th className="hidden lg:block">
                <label>
                  S.l No.
                </label>
              </th>
              <th> Book Name & Author</th>
              <th>Rating</th>
              <th className="hidden sm:block">Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          {
            books.map((book, index)=>{
              return(
            <TableBody book={book} count={index+1}></TableBody>)
          })
              
          }
        </table>
      </div>
    </div>
  );
};

export default AllBooks;
