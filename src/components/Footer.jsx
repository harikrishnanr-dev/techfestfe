import { faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TECH FEST</h1>
                    <p className='py-4'>
                        Join us for an exciting journey into the world of technology, innovation, and creativity. Connect with like-minded enthusiasts and showcase your skills!
                    </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FontAwesomeIcon icon={faFacebook} size={30} />
                        <FontAwesomeIcon icon={faInstagram} size={30} />
                        <FontAwesomeIcon icon={faTwitter} size={30} />
                        <FontAwesomeIcon icon={faGithub} size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-gray-400'>Events</h6>
                        <ul>
                            <li className='py-2 text-sm'>Hackathons</li>
                            <li className='py-2 text-sm'>Workshops</li>
                            <li className='py-2 text-sm'>Guest Lectures</li>
                            <li className='py-2 text-sm'>Coding Competitions</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Support</h6>
                        <ul>
                            <li className='py-2 text-sm'>FAQs</li>
                            <li className='py-2 text-sm'>Help Desk</li>
                            <li className='py-2 text-sm'>Guidelines</li>
                            <li className='py-2 text-sm'>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Organizers</h6>
                        <ul>
                            <li className='py-2 text-sm'>About Us</li>
                            <li className='py-2 text-sm'>Team</li>
                            <li className='py-2 text-sm'>Sponsorship</li>
                            <li className='py-2 text-sm'>Volunteer</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Policies</h6>
                        <ul>
                            <li className='py-2 text-sm'>Terms of Service</li>
                            <li className='py-2 text-sm'>Privacy Policy</li>
                            <li className='py-2 text-sm'>Code of Conduct</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
