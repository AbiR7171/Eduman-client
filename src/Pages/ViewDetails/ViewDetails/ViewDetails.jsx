import React from 'react'
import Banner from './Banner/Banner';
import Features from '../Features/Features';
import Journey from '../Journey/Journey';
import Counts from '../Counts';

const ViewDetails = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Journey></Journey>
            <Counts></Counts>
        </div>
    );
};

export default ViewDetails;