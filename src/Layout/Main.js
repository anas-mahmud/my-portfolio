import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div className='flex gap-6'>
            <Sidebar></Sidebar>
            <Outlet className='flex-1'></Outlet>
        </div>
    );
};

export default Main;