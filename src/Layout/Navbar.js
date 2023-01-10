import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-slate-800'>
            <header aria-label="Site Header" >
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center ">
                        <div className="md:flex md:items-center md:gap-12">
                            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text lg:text-3xl font-extrabold text-transparent sm:text-5xl">
                                iamanas
                            </h1>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Site Nav">
                                <ul className="flex flex-col gap-10">
                                    <li>
                                        <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                            <FiHome />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                            <IoBookmarksOutline />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                            <FaRegUser />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                            <BiMessageSquareDetail />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-gray-300 font-semibold transition hover:text-green-300/75">
                                            <FaPenNib />
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a href='https://drive.google.com/file/d/1i738VtBjLDH4JISkbcQLe0uVbcWYTjsE/view?usp=share_link' target='_blank' rel="noreferrer" className="rounded-md bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow">
                                    Resume
                                </a>
                            </div>

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
            </header>

        </div>
    );
};

export default Navbar;