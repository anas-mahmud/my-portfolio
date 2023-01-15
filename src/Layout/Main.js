import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className='flex flex-row-reverse'>
            <div>
                <Outlet></Outlet>
                <MobileNav />
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;