import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className='flex flex-row-reverse'>
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;