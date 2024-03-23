"use client"
import React, { useState } from 'react';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Image from 'next/image';
import Logo from '../public/Logo.png';
import { MdOutlineMenu } from "react-icons/md";
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {

    const [menu, setMenu] = useState(false);
    const [services, setServices] = useState(false);
    const [about, setAbout] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleServices = () => {
        setServices(!services);
    }

    const handleAbout = () => {
        setAbout(!about)
    }

    return (
        <div className='flex justify-between lg:mx-32 mx-4 items-center text-[#0097a7] relative'>
            <div>
                <Image 
                src={Logo}
                alt='Unable to load Logo'
                className='h-40 w-48' />
            </div>
            <div className='my-4'>
                <div className='lg:flex hidden gap-4'>
                    <IoCall size={30} className='' />
                    <div>
                        Call Now
                        <div>+91 0000000000</div>
                        <div>+91 0000000000</div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='lg:flex hidden gap-4'>
                    <MdEmail size={30} className='' />
                    <div>
                        Email Us
                        <div>Example@gmail.com</div>
                        <div>Example@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='lg:flex hidden gap-4'>
                    <FaLocationDot size={30} className='' />
                    <div>
                        Location
                        <div>Madhapur,</div>
                        <div>Hyderabad</div>
                    </div>
                </div>
            </div>
            <MdOutlineMenu size={32} onClick={handleMenu} className='lg:hidden absolute right-10' />
            {menu && (
                <div className=''>
                    <ul className='absolute mt-20 bg-white w-screen -left-4 px-4 py-2 space-y-4'>
                        <li><Link href=''>Home</Link></li>
                        <li onClick={handleServices} className='relative'>
                            <div className='flex items-center gap-2'>Services <IoMdArrowDropdown />
                            {services && (
                                <div className='absolute text-[10px] space-y-2 flex flex-col top-full left-0 py-1'>
                                    <Link href='/'>Counselling</Link>
                                    <Link href='/'>Visa Guidance</Link>
                                    <Link href='/'>Travelling Assistance</Link>
                                </div>
                            )}
                            </div>
                        </li>
                        <li style={{ marginTop: services ? '5rem' : '0' }} onClick={handleAbout} className='relative pt-3'><Link href=''>About </Link></li>
                        <li ><Link href=''>Study destination</Link></li>
                        <li><Link href=''>Contact Us</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
