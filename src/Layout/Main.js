import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from './MobileNav';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div className='flex'>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
                <MobileNav />
            </div>
        </div>
    );
};

export default Main;