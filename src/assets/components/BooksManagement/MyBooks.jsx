import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyBooksBody from './MyBooksBody';

const MyBooks = () => {

    const {user} = use(AuthContext)
    const [myBooks, setMyBooks] = useState([])


    useEffect(()=>{
        axios.get(`http://localhost:3000/my-books/${user.email}`)
        .then( res =>{
            setMyBooks(res.data)
            console.log(res.data)
        })
    }, [user.email])

    const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/my-books/${id}/${user.email}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

      const updatedBooksAfterDelete = myBooks.filter(book=> book?._id !==id)
      setMyBooks(updatedBooksAfterDelete)
  };

    return (
            <div>
              <div className="overflow-x-auto min-h-[70vh]">
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
                    myBooks.map((book, index)=>{
                      return(
                    <MyBooksBody setMyBooks={setMyBooks} book={book} count={index+1} handleDelete={handleDelete}></MyBooksBody>)
                  })
                      
                  }
                </table>
              </div>
            </div>
    );
};

export default MyBooks;