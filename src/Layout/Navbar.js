import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaPenNib, FaGithub } from "react-icons/fa";
import { TbDownload } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";

const Navbar = () => {
    return (
        <div className='bg-slate-800'>
            <div className="sticky top-0 h-fit hidden lg:block px-4 sm:px-6 lg:px-8">
                <div className="nav flex flex-col h-[100vh] items-center justify-around">

                    <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text leading-none lg:text-3xl font-extrabold text-transparent sm:text-5xl">
                        iam<br />anas
                    </h1>

                    <div className="">
                        <ul className="flex flex-col gap-8 text-3xl">
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <FiHome className='' />
                            </Link>
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <IoBookmarksOutline />
                            </Link>
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <FaRegUser />
                            </Link>
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <BiMessageSquareDetail />
                            </Link>
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <FaPenNib />
                            </Link>
                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex flex-col gap-8 text-3xl">
                            <a className="text-gray-300 font-semibold transition hover:text-green-300/75" href='https://drive.google.com/file/d/1i738VtBjLDH4JISkbcQLe0uVbcWYTjsE/view?usp=share_link' target='_blank' rel="noopener noreferrer">
                                <TbDownload />
                            </a>
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <FaGithub />
                            </Link>
                            <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                <TfiLinkedin />
                            </Link>
                            <Link className="text-gray-300 text-2xl font-semibold transition hover:text-green-300/75">
                                <FaPenNib />
                            </Link>
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