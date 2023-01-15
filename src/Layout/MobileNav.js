import React from 'react';
import './MobileNav.css';
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { IoBookmarksOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
    return (
        <div className=''>
            <nav className='navigation'>
                <a href='/#home' className='navigation-links'>
                    <IoHome className='icon' />
                </a>

                <NavLink className='navigation-links'>
                    <a href='#project' >
                        <IoBookmarksOutline className='icon' />
                    </a>
                </NavLink>

                <NavLink className='navigation-links'>
                    <a href='#about' >
                        <FaRegUser className='icon' />
                    </a>
                </NavLink>

                <NavLink className='navigation-links'>
                    <a href='#contact' >
                        <BsChatText className='icon' />
                    </a>
                </NavLink>
            </nav>
        </div>
    );
};

export default MobileNav;