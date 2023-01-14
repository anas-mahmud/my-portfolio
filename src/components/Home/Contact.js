import React, { useRef, useState } from 'react';
import img from '../../images/img1.png';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [disable, setDisable] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_od7i7i1', 'template_s5mqyoq', form.current, '-SM6kA8l-iYTnGv9l')
            .then((result) => {
                console.log(result.text);
                setDisable(true)
                toast.success(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

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
                <form ref={form} onSubmit={sendEmail} className="space-y-6 ng-untouched ng-pristine ng-valid mt-10">
                    <div>
                        <input id="name" name="user_name" type="text" placeholder="Your Name" className="w-full p-3 rounded-full dark:bg-gray-800" required />
                    </div>
                    <div>
                        <input id="email" type="email" name="user_email" placeholder="Email" className="w-full p-3 rounded-full dark:bg-gray-800" data-temp-mail-org="1" required />
                    </div>
                    <div>
                        <textarea id="message" name="message" rows="3" placeholder="Message" className="w-full p-3 rounded-xl dark:bg-gray-800" spellcheck="false" required></textarea>
                    </div>
                    <button disabled={disable ? true : false} type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:text-gray-900">Send Message</button>
                    {/* <input type="submit" value="Send Message" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 dark:text-gray-900" /> */}
                </form>
            </div>
        </div>
    );
};

export default Contact;