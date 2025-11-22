import React from 'react';
import BookCard from '../BooksManagement/BookCard';

const PopularBooks = () => {
    return (
        <div className='`w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 bg-transparent my-10'>
            <h3 className='text-center text-3xl font-semibold mb-3'>Popular <span className='text-secondary '>Books</span></h3>
            <hr />
            <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
            </div>
        </div>
    );
};

export default PopularBooks;