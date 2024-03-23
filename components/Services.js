import React from 'react'
import { FaAddressCard } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";

const Services = () => {
  return (
    <div className='lg:mx-32 mx-4 mt-32 space-y-10  '>

        <div className='flex justify-center text-[50px]'>Our Services</div>
        <div className='lg:flex'>
            <div className='flex  flex-col w-80 h-[400px] border-[1px] border-gray-300 hover:shadow-2xl justify-start items-center py-12 px-8 space-y-4'>
                <div className=''><FaAddressCard size={70} className='bg-[#e5b3b3] text-white p-4 flex '  /></div>
                <div className='font-semibold'>APPLICATION PROCESS</div>
                <div className='font-thin'>The application process for each country is different with different sets of documents how ever a few mandatory documents remain the same from various aptitude tests to numerous English proficiency tests. Our team guides the students thoroughly.</div>


            </div>
           

            <div className='flex  flex-col w-80 h-[400px] border-[1px] border-gray-300 hover:shadow-2xl justify-start items-center py-12 px-8 space-y-4'>
                <div className=''><FaBookOpenReader size={70} className='bg-blue-700 text-white p-4 flex '  /></div>
                <div className='font-semibold'>COUNSELLING</div>
                <div className='font-thin'>Extremely professional and thorough team of the nxt step overseas consulting llp provide in-depth counselling sessions to the students as each student profile is different from others we deeply analyze their profiles and cater with utmost proficiency.</div>


            </div>

            <div className='flex  flex-col w-80 h-[400px] border-[1px] border-gray-300 hover:shadow-2xl justify-start items-center py-12 px-8 space-y-4'>
                <div className=''><IoIosPeople size={70} className='bg-yellow-500 text-white p-4 flex '  /></div>
                <div className='font-semibold'>SCHOLARSHIPS</div>
                <div className='font-thin '>One must always check if you can apply. If the scholarship application deadlines are upto date and if the scholarship is open to national students, international students or both its imperative to know that the gravity are usually need based and awarded to the students.</div>


            </div>

            <div className='flex  flex-col w-80 h-[400px] border-[1px] border-gray-300 hover:shadow-2xl justify-start items-center py-12 px-8 space-y-4'>
                <div className=''><IoIosPeople size={70} className='bg-cyan-500 text-white p-4 flex '  /></div>
                <div className='font-semibold'>VISA ASSISTANCE</div>
                <div className='font-thin '>The most important yet heart throbbing final step in the journey. Our special visa team does it all to make sure we keep our track record of maintaining a 100% visa success rate for all countries. Yes!! you read it right, we have zero visa rejection until now.</div>


            </div>
        </div>
    </div>
  )
}

export default Services