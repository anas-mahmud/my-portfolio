import React from 'react';
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
                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="Home" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                    <FiHome className='' />
                                </Link>
                            </Tooltip>

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="Projects" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                    <IoBookmarksOutline />
                                </Link>
                            </Tooltip>

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="About Me" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                    <FaRegUser />
                                </Link>
                            </Tooltip>

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="Contact" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                    <BiMessageSquareDetail />
                                </Link>
                            </Tooltip>
                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex flex-col gap-10 text-3xl">

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="Resume" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a className="text-gray-300 font-semibold transition text-green-300/60" href='https://drive.google.com/file/d/1i738VtBjLDH4JISkbcQLe0uVbcWYTjsE/view?usp=share_link' target='_blank' rel="noopener noreferrer">
                                    <TbDownload />
                                </a>
                            </Tooltip>

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="GitHub" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a className="text-gray-300 font-semibold transition text-green-300/60" href='https://github.com/anas-mahmud' target={'_blank'} rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </Tooltip>

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="Linkedin" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <a className="text-gray-300 font-semibold transition text-green-300/60" href='https://www.linkedin.com/in/aanas-mahmud/' target={'_blank'} rel="noopener noreferrer">
                                    <TfiLinkedin />
                                </a>
                            </Tooltip>

                            <Tooltip className='px-2 py-[2px] ml-3 bg-teal-600 bg-opacity-30 text-gray-300 rounded' content="Blogs" placement="right-start"
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                <Link className="text-gray-300 text-2xl font-semibold transition text-green-300/60">
                                    <FaPenNib />
                                </Link>
                            </Tooltip>
                        </ul>

                        {/* <div className="block md:hidden">
                                <button
                                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;