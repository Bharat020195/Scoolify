"use client";
import React from "react";
import Banner1 from "../public/Banner1.jpg";
import Banner2 from "../public/Banner2.jpg";
import Banner3 from "../public/Banner3.jpg";
import Banner4 from "../public/Banner4.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

const Banner = () => {
  const images = [Banner1, Banner2, Banner3, Banner4];
  const [currentImage, setCurrentImage] = useState(0);
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleRight = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleLeft = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="">
      <div className="absolute lg:block hidden  lg:mt-96 mt-28 lg:left-4 left-0 z-10 transform -translate-y-1/2">
        <MdKeyboardArrowLeft size={80} className="text-white cursor-pointer" onClick={handleLeft} />
      </div>
      <Image
        src={images[currentImage]}
        alt={`Image `}
        className="lg:h-[700px] h-[200px] w-screen shadow-lg  z-0"
      />
      <div className="absolute lg:block hidden lg:top-[600px] top-[270px] lg:right-4 right-0 z-10 transform -translate-y-1/2">
        <MdKeyboardArrowRight size={100} className="text-white cursor-pointer" onClick={handleRight} />
      </div>
      <div className="lg:absolute lg:-bottom-36 lg:right-44 ">
        <div className="lg:flex lg:flex-row flex flex-col gap-4 lg:space-y-0 lg:py-0 py-10 items-center space-y-4" >       
        <div className=" bg-[#e5b3b3] w-56 h-24 rounded-xl shadow-lg flex items-center p-2 gap-4 font-bold"> <BsPersonBoundingBox size={40}/> <div className="text-2xl">Profile Evaluation</div></div>
        <div className=" bg-[#deb3e5] w-56 h-24 rounded-xl shadow-lg flex items-center p-2 gap-4 font-bold"> <FaGlobe size={40}/> <div className="text-2xl">Application Process</div></div>
        <div className=" bg-[#79afd2] w-56 h-24 rounded-xl shadow-lg flex items-center p-2 gap-4 font-bold"> <FaAddressBook size={40}/> <div className="text-2xl">Scholarship</div></div>
        <div className=" bg-[#b3c5e5] w-56 h-24 rounded-xl shadow-lg flex items-center p-2 gap-4 font-bold"> <FaPlane size={40}/> <div className="text-2xl">Visa assistance</div></div>
      </div>
      
      </div>

    </div>
  );
};

export default Banner;
