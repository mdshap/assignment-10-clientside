import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import MyBookCard from './MyBookCard';

const MyBooks = () => {

    const {user} = use(AuthContext)

    const [myBooks, setMyBooks] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/my-books/${user.email}`)
        .then( res =>{
            setMyBooks(res.data)
            console.log(res.data)
        })
    }, [myBooks])
    return (
        <div className='grid grid-cols-3'>
            {
                myBooks.map(book=>{
                    return(
                    <MyBookCard book={book}></MyBookCard>
                    )
                })
            }
            
        </div>
    );
};

export default MyBooks;