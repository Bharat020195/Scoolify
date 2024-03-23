import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";  

const Footer = () => {
  return (
    <div className='mt-20  text-[#0097a7]'>
        <div className='lg:flex lg:flex-row flex flex-col lg:space-y-0 space-y-10  lg:mx-20 mx-6 py-10 justify-between'>
        <div className='space-y-4'> 
            <div className=' text-2xl font-bold underline underline-offset-8 decoration-[#283755] '>Scoolify</div>
            <div className='font-thin  cursor-pointer'>Visa </div>
            <div className='font-thin  cursor-pointer'>Student Visa</div>
            <div className='font-thin  cursor-pointer'>Immigration</div>
            <div className='font-thin  cursor-pointer'>Travel and Tourism</div>
            <div className='font-thin  cursor-pointer'>Education Loans</div>
            <div className='font-thin  cursor-pointer'>Insurance</div>
            <div className='font-thin  cursor-pointer'>Accomdation</div>
            <div className='font-thin  cursor-pointer'>Air ticket booking</div>
        </div>
        <div className='space-y-4'>
            <div  className='space-y-4 text-2xl font-bold underline underline-offset-8 decoration-[#283755]  '>Countries</div>
            <div className='font-thin  cursor-pointer'>America</div>
            <div className='font-thin  cursor-pointer'>United Kingdom</div>
            <div className='font-thin  cursor-pointer'>Australia</div>
            <div className='font-thin  cursor-pointer'>Canada</div>
            <div className='font-thin  cursor-pointer'>Europe</div>
            <div className='font-thin  cursor-pointer'>Ireland</div>
        </div>
        <div className='space-y-4'>
            <div  className='space-y-4 text-2xl font-bold  underline underline-offset-8 decoration-[#283755] '>Office in India</div>
            <div className='font-thin  cursor-pointer'>Madhapur, Hyderabad, India</div>
            <div className='font-thin  cursor-pointer'>+1 (713) 954-6616</div>
            <div className='font-thin  cursor-pointer'>Example@gmail.com</div>
        </div>
        </div>
        <div className='bg-blue-800 h-[1px]'></div>
        <div className='justify-between lg:mx-20 mx-6 py-10 lg:flex lg:space-y-0 space-y-4'>
            <div>Copyright &copy; 2024 <Link href='/'>Scoolify</Link></div>
            <Link href='https://www.bharatfolio.info' target='_blank'>Build by Bharat</Link>
            <div className='flex gap-4'>
                <Link href='/'><FaFacebookSquare size={30} className='' /></Link>
                <Link href='/'><FaTwitter size={30} className=''/></Link>
                <Link href='/'><RiInstagramFill size={30} className=''/></Link>
                <Link href='/'><FaLinkedin size={30} className=''/></Link>

            </div>
        </div>

    </div>
  )
}

export default Footer