import React from 'react';
import { Link } from 'react-router-dom';
import smartKey from '../../images/smart-key.png';
import swipy from '../../images/swipy.png';
import vdemy from '../../images/vdemy.png';
import learnify from '../../images/learnify.png';

const Projects = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Projects</h1>
            <hr className='w-2/3 mx-auto my-5' />
            <p className='text-center'>I already worked on may projects. Some websites are not interesting and some <br /> websites are very beautiful. Some of them are given below.</p>

            <div className='grid grid-cols-2 gap-10 mx-40 mt-28'>
                <div className=''>
                    <Link class="group relative block bg-black">
                        <img
                            alt="Developer"
                            src={smartKey}
                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div class="relative p-8">
                            <p class="text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Smart key
                            </p>
                            <p class="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Keyboard reselling website</p>
                            <div class="mt-64">
                                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p class="text-sm text-gray-300 mb-5">
                                        Key features: <br />
                                        <li>Built with React, React router,</li>
                                        <li>Used tailwind css, daisyui, hiper ui, Firebase authentication, Node, Express, mongodb,</li>
                                        <li>Users can buy product and can see all orders ob dashboard,</li>
                                        <li>Anyone can sell their old keyboard, also can see the products offered for sale and delete,</li>
                                        <li>Admin can verify and delete buyer and seller users.</li>
                                    </p>
                                    <Link class="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500">

                                        <span class="text-sm font-medium">Live Site</span>
                                        <svg
                                            class="ml-3 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className=''>
                    <Link class="group relative block bg-black">
                        <img
                            alt="Developer"
                            src={swipy}
                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div class="relative p-8">
                            <p class="text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Swipy
                            </p>
                            <p class="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Digital service provider</p>
                            <div class="mt-64">
                                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p class="text-sm text-gray-300 mb-5">
                                        Key features: <br />
                                        <li>You can easily navigate and explore this website,</li>
                                        <li>Items accessible from any page,</li>
                                        <li>Responsible for mobiles, tabs and computers, </li>
                                        <li>Its a free and open source website.</li>
                                    </p>
                                    <Link class="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500">

                                        <span class="text-sm font-medium">Live Site</span>
                                        <svg
                                            class="ml-3 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className=''>
                    <Link class="group relative block bg-black">
                        <img
                            alt="Developer"
                            src={vdemy}
                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div class="relative p-8">
                            <p class="text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Vdemy
                            </p>
                            <p class="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Learning website about Javascript Framework course</p>
                            <div class="mt-64">
                                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p class="text-sm text-gray-300 mb-5">
                                        Key features: <br />
                                        <li>Built with React,</li>
                                        <li>Used tailwind css, mamba ui</li>
                                        <li>Authenticated by firebase authentication</li>
                                        <li>Downloadable course details</li>
                                    </p>
                                    <Link class="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500">

                                        <span class="text-sm font-medium">Live Site</span>
                                        <svg
                                            class="ml-3 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className=''>
                    <Link class="group relative block bg-black">
                        <img
                            alt="Developer"
                            src={learnify}
                            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                        <div class="relative p-8">
                            <p class="text-2xl font-bold uppercase tracking-widest bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                Learnify
                            </p>
                            <p class="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Keyboard reselling website</p>
                            <div class="mt-64">
                                <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p class="text-sm text-gray-300 mb-5">
                                        Key features: <br />
                                        <li>Built with React, React router,</li>
                                        <li>Used tailwind css, daisyui, hiper ui, Firebase authentication, Node, Express, mongodb,</li>
                                        <li>Users can buy product and can see all orders ob dashboard,</li>
                                        <li>Anyone can sell their old keyboard, also can see the products offered for sale and delete,</li>
                                        <li>Admin can verify and delete buyer and seller users.</li>
                                    </p>
                                    <Link class="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500">

                                        <span class="text-sm font-medium">Live Site</span>
                                        <svg
                                            class="ml-3 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>


            </div>

        </div>
    );
};

export default Projects;