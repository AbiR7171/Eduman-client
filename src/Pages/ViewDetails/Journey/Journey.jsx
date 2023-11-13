import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PanelOne from './PanelOne';
import PanelTwo from './PanelTwo';
import PanelThree from './PanelThree';

const Journey = () => {
    return (
        <div>
            <h2 className='text-4xl text-center my-4'>How to Start Your Journey</h2>
            <Tabs>
            <TabList className='w-[550px] mx-auto gap-7 text-red'>
                <Tab><h1 className='text-xl text-gray-400 p-3'>Quick Register</h1></Tab>
                <Tab><h1 className='text-xl text-gray-400 p-3'>Set Curriculam</h1></Tab>
                <Tab><h1 className='text-xl text-gray-400 p-3'>Launch Course</h1></Tab>
            </TabList>

            <TabPanel>
               <PanelOne></PanelOne>
            </TabPanel>
            <TabPanel>
                <PanelTwo></PanelTwo>
            </TabPanel>
            <TabPanel>
               <PanelThree></PanelThree>
            </TabPanel>
        </Tabs>
        </div>
    );
};

export default Journey;