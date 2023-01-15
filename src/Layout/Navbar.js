import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaPenNib, FaGithub } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { Tooltip } from "@material-tailwind/react";

const Navbar = () => {
    return (
        <div className='bg-slate-800'>
            <div className="sticky top-0 h-fit hidden lg:block px-4 sm:px-6 lg:px-8">
                <div className="nav flex flex-col h-[100vh] items-center justify-around">

                    <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text leading-none lg:text-3xl font-extrabold text-transparent sm:text-5xl">
                        iam<br />anas
                    </h1>

                    <div className="">
                        <ul className="flex flex-col gap-10 text-3xl">
                            <Tooltip className='component-icon-tooltip' content="Home" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a href='/#home' className="text-gray-300 font-semibold transition hover:text-green-300/75 hover:translate-x-2 hover:translate-y-2">
                                    <FiHome />
                                </a>
                            </Tooltip>

                            <Tooltip className='component-icon-tooltip' content="Projects" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75 hover:translate-x-2 hover:translate-y-2">
                                    <IoBookmarksOutline />
                                </Link>
                            </Tooltip>

                            <Tooltip className='component-icon-tooltip' content="About Me" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75 hover:translate-x-2 hover:translate-y-2">
                                    <FaRegUser />
                                </Link>
                            </Tooltip>

                            <Tooltip className='component-icon-tooltip' content="Contact" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75 hover:translate-x-2 hover:translate-y-2">
                                    <BiMessageSquareDetail />
                                </Link>
                            </Tooltip>
                        </ul>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-10 text-3xl social-link">

                            <Tooltip className='social-tooltip' content="Download Resume" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a href='https://drive.google.com/file/d/1i738VtBjLDH4JISkbcQLe0uVbcWYTjsE/view?usp=share_link' target='_blank' rel="noopener noreferrer">
                                    <TbDownload />
                                </a>
                            </Tooltip>

                            <Tooltip className='social-tooltip' content="GitHub" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a href='https://github.com/anas-mahmud' target={'_blank'} rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </Tooltip>

                            <Tooltip className='social-tooltip' content="Linkedin" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a href='https://www.linkedin.com/in/aanas-mahmud/' target={'_blank'} rel="noopener noreferrer">
                                    <TfiLinkedin />
                                </a>
                            </Tooltip>

                            <Tooltip className='social-tooltip' content="Visit Blogs" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-2xl">
                                    <FaPenNib />
                                </Link>
                            </Tooltip>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;