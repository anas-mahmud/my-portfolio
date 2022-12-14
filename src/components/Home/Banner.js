import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <section class="bg-gray-900 text-white">
                <div class="mx-auto max-w-screen-2xl px-4 lg:flex lg:h-screen lg:items-center">
                    <div class="mx-auto max-w-full text-start">
                        <span>Hello i am</span>
                        <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text lg:text-5xl font-extrabold text-transparent">
                            Anas Ibne Ali.
                        </h1>
                        <span class="sm:block bg-gradient-to-r from-purple-600 via-green-300 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">Front-End Developer.</span>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                            I’m a web developer specializing in react js. The main focus is front-end, but at the same time, I try to learn new technology also. Currently, I’m focused on learning mern stack development.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;