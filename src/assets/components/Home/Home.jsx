import React from 'react';
import Banner from './Banner';
import PopularBooks from './PopularBooks';
import BookCard from '../BooksManagement/BookCard';

const Home = () => {
    return (
        <div>
            <Banner className="my-10"></Banner>
            <PopularBooks></PopularBooks>
        </div>
    );
};

export default Home;