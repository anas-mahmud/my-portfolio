import React from 'react';
import './MobileNav.css';
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { IoBookmarksOutline } from "react-icons/io5";

const MobileNav = () => {
    return (
        <div className=''>
            <nav className='navigation'>
                <a href='/#home' className='navigation-links'>
                    <IoHome className='icon' />
                </a>

                <a href='/#projects' className='navigation-links'>
                    <IoBookmarksOutline className='icon' />
                </a>

                <a href='#about' className='navigation-links'>
                    <FaRegUser className='icon' />
                </a>

                <a href='/#contact' className='navigation-links'>
                    <BsChatText className='icon' />
                </a>
            </nav>
        </div>
    );
};

export default MobileNav;