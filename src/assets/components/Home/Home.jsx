import React, { use } from 'react';
import Banner from './Banner';
import PopularBooks from './PopularBooks';
import BookOfTheWeek from './BookOfTheWeek';
import About from './About';
import { AuthContext } from '../Contexts/AuthContext';
import TopRatedBooks from './TopRatedBooks';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import ReviewedBooks from './ReviewedBooks';
import Newsletter from './Newsletter';


const Home = () => {
    const { user } = use(AuthContext)
    console.log(user)

    return (
        <div>

            
            <Banner className=" my-5 sm:my-10 "></Banner>
            
            <PopularBooks></PopularBooks>
            <TopRatedBooks/>
            <BookOfTheWeek></BookOfTheWeek>
            <ReviewedBooks></ReviewedBooks>
            <FAQ></FAQ>
            <ContactUs></ContactUs>
            <Newsletter></Newsletter>
            <About></About>
        </div>
    );
};

export default Home;