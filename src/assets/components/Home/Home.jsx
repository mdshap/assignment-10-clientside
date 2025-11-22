import React from 'react';
import Banner from './Banner';
import PopularBooks from './PopularBooks';
import BookCard from '../BooksManagement/BookCard';
import BookOfTheWeek from './BookOfTheWeek';
import About from './About';

const Home = () => {
    return (
        <div>
            <Banner className="my-10"></Banner>
            <PopularBooks></PopularBooks>
            <BookOfTheWeek></BookOfTheWeek>
            <About></About>
        </div>
    );
};

export default Home;