import React from 'react'
import Image from 'next/image'
import America from '../public/USA.avif'
import UK from '../public/UK.avif'
import Canada from '../public/Canada.avif'
import Australia from '../public/Australia.avif'
import Europe from '../public/Europe.avif'
import Ireland from '../public/Ireland.avif'

const Country = () => {
  return (
    <div className='bg-gray-100 lg:mt-24 mt-10 lg:mx-32 lg:pt-20 pt-10  px-4 space-y-10 '>
        <div className='flex justify-center lg:text-[50px]'>Choose your country</div>
        <div className='lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-20 space-y-20 cursor-pointer pt-[100px]'>
            <div className='relative '>
             <Image
            src={America}
            alt='No Image Found'
            className='lg:h-[400px] h-200 w-200 lg:w-[600px] '  />
            <div className='absolute -bottom-10 mx-10 bg-white/90 hover:bg-[#e5b3b3] p-2 font-thin '>
                <div className='flex justify-center'>USA</div>
                <div className='flex text-center'>Studying in the U.S. can be an excellent opportunity for international students to receive a world-class education, gain valuable experience, and explore a new culture.</div>
            </div>

            </div>
            <div className='relative '>
             <Image
            src={UK}
            alt='No Image Found'
            className='lg:h-[400px] h-200 w-200 lg:w-[600px] '  />
            <div className='absolute -bottom-10 mx-10 bg-white/90 hover:bg-[#deb3e5] p-2 font-thin'>
                <div className='flex justify-center'>UK</div>
                <div className='flex text-center'>Studying in the United Kingdom (UK) is a popular choice for international students due to its long-standing reputation for academic excellence and the diversity of its educational institutions.</div>
            </div>

            </div>
            <div className='relative '>
             <Image
            src={Canada}
            alt='No Image Found'
            className='lg:h-[400px] h-200 w-200 lg:w-[600px] '  />
            <div className='absolute -bottom-10 mx-10 bg-white/90 hover:bg-[#79afd2] p-2 font-thin'>
                <div className='flex justify-center'>CANADA</div>
                <div className='flex text-center'>Canada is known for its high-quality education system, friendly people, and stunning natural scenery, making it a top choice for students from all over the world.</div>
            </div>

            </div>
            <div className='relative '>
             <Image
            src={Australia}
            alt='No Image Found'
            className='lg:h-[400px] h-200 w-200 lg:w-[600px]'  />
            <div className='absolute -bottom-10 mx-10 bg-white/90 hover:bg-[#b3c5e5] p-2 font-thin'>
                <div className='flex justify-center'>AUSTRAILIA</div>
                <div className='flex text-center'>Australia offers a world-class education system with a diverse range of academic programs and a variety of educational institutions to choose from.</div>
            </div>

            </div>
            <div className='relative '>
             <Image
            src={Europe}
            alt='No Image Found'
            className='lg:h-[400px] h-200 w-200 lg:w-[600px] '  />
            <div className='absolute -bottom-10 mx-10 bg-white/90 hover:bg-yellow-500 p-2 font-thin'>
                <div className='flex justify-center'>EUROPE</div>
                <div className='flex text-center'>Europe is known for its rich history, diverse culture, and thriving technology sector, making it a top choice for students who want to combine academic pursuits with opportunities.</div>
            </div>

            </div>
            <div className='relative'>
             <Image
            src={Ireland}
            alt='No Image Found'
            className='lg:h-[400px] h-200 w-200 lg:w-[600px]' />
            <div className='absolute -bottom-10 mx-10 bg-white/90 hover:bg-cyan-500 p-2 font-thin'>
                <div className='flex justify-center'>NEW ZEALAND</div>
                <div className='flex text-center'>New Zealand is a popular destination for international students who want to experience a unique culture, a high-quality education system, and a beautiful natural environment.</div>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Country