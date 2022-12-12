import React from 'react';
import img from '../../images/img1.png';

const Contact = () => {
    return (
        <div className='mt-48'>
            <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Contact Me</h1>
            <hr className='w-2/4 mx-auto my-5' />
            <h2 className='text-lg text-center'>I'm Junior Web Developer, If you want to give me some opportunity or <br /> have any queries, feel free to reach me.</h2>
            <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    </div>
                    <img src={img} alt="" className="pr-4 h-full" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid mt-10">
                    <div>
                        <input id="name" type="text" placeholder="Your Name" className="w-full p-3 rounded-full dark:bg-gray-800" />
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Email" className="w-full p-3 rounded-full dark:bg-gray-800" data-temp-mail-org="1" />
                    </div>
                    <div>
                        <textarea id="message" rows="3" placeholder="Message" className="w-full p-3 rounded-xl dark:bg-gray-800" spellcheck="false"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:text-gray-900">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;