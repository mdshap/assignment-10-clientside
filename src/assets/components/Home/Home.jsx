import React, { use } from 'react';
import Banner from './Banner';
import PopularBooks from './PopularBooks';
import BookCard from '../BooksManagement/BookCard';
import BookOfTheWeek from './BookOfTheWeek';
import About from './About';
import { AuthContext } from '../Contexts/AuthContext';

const Home = () => {
    const { user } = use(AuthContext)
    console.log(user)
    
    return (
        <div>
            <Banner className="my-15"></Banner>
            <div className="`w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 bg-transparent my-20">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Popular <span className="text-secondary ">Books</span>
      </h3>
            <PopularBooks></PopularBooks>
            </div>
            <BookOfTheWeek></BookOfTheWeek>
            <About></About>
        </div>
    );
};

export default Home;