import React from 'react';

const Banner = () => {
    return (
        <section id='home'>
            <div class="w-full mx-auto pl:0  pt-16 h-[100vh] lg:h-screen">

                <div class="lg:h-[60vh] h-[40vh] flex items-center lg:pl-96 md:pl-52 px-16">
                    <div>
                        <h1 class="lg:text-5xl text-3xl font-bold font-mono mb-3">Anas Mahmud</h1>
                        <div className='flex align-middle'>
                            <h1 className='lg:text-7xl text-4xl font-bold mr-6'>Web Developer</h1>
                            <span className='divider bg-teal-700 h-[2px] w-16 lg:w-72 md:w-24 lg:mr-16 my-auto'></span>
                        </div>
                        <h1 className='lg:text-7xl text-5xl font-bold flex'>
                            <span>+</span>
                            <span>Front-End Developer.</span>
                        </h1>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;