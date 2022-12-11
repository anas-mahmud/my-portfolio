import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                    </div>
                    <img src="https://cdn.dribbble.com/users/2069369/screenshots/4276636/call_center.gif" alt="" className="pr-4 h-52 md:h-64" />
                </div>
                <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
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