import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Home/Footer/Footer';
import Navbar from './Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;