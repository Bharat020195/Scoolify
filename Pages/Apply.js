import React from 'react'
import Image from 'next/image'
import Apply1 from '../public/Apply.jpg'
import { CiCircleCheck } from "react-icons/ci";
import Link from 'next/link';

const Apply = () => {
  return (
    <div className=' lg:grid lg:grid-cols-2 lg:mx-32 lg:mt-64 p-4 '>
        <div className=''>
            <Image
             src={Apply1}
             alt='No Image Found'
             className='w-[500px] h-[500px] shadow-xl rounded-xl'/>
        </div>
        <div className='space-y-10 py-6  '>
            <div className='text-4xl'>Don’t just dream of studying abroad- make it happen with Scoolify!</div>
              <div>One Stop Solution For All Your International Educational Needs</div>
              
              <div className='flex gap-10'>
              <div className='w-2 h-44 bg-[#0097a7]'></div>
                <ul className='space-y-6 '>
                  <li className='flex items-center gap-4'>
                    <CiCircleCheck size={24} /> Scholarship Assistance

                  </li>
                  <li className='flex items-center gap-4'>
                    <CiCircleCheck size={24} /> Profile Evaluation

                  </li>
                  <li className='flex items-center gap-4'>
                    <CiCircleCheck size={24} /> University Shortlisting

                  </li>
                  <li className='flex items-center gap-4'>
                    <CiCircleCheck size={24} /> Travel and Accommodation Assistance

                  </li>
                </ul>
                
              </div>
              <Link href='/' className='lg:block flex justify-center'><button className='bg-[#0097a7] my-4 h-12 w-40 text-white hover:text-white/50'>Apply now</button></Link>
        </div>
      
    </div>
  )
}

export default Apply