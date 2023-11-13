import React from 'react';
import Banner from './Home/Banner';
import TopCategories from './Home/TopCategories';
import Features from './Home/features';
import Choose from './Home/Choose';
import Feedback from './Home/feedback/Feedback';
import CourseTitle from './Home/CourseTitle';
import Education from './Home/Education';
import Brands from './Home/Brands';
import Courses from './Home/Courses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <TopCategories/>
            <Courses/>

            <Features></Features>
            <Choose></Choose>
            <Feedback></Feedback>
            <CourseTitle></CourseTitle>
            <Education></Education>
            <Brands></Brands>

        </div>
    );
};

export default Home;