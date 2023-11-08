import React from 'react';
import Banner from './Home/Banner';
import TopCategories from './Home/TopCategories';
import Courses from './Home/Courses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopCategories/>
            <Courses/>
        </div>
    );
};

export default Home;