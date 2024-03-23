"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Header2 = () => {
  const [services, setServices] = useState(false);
  const [countries, setCountries] = useState(false);

  const handleEnterServices = () => {
    setServices(true);
    setCountries(false)
  };


  const handleEnterCountries = () => {
    setCountries(true);
    setServices(false)
  };

  const handleMouseEnterDropdown = () => {
    setServices(true);
  };

  const handleMouseEnterCountries = () => {
    setCountries(true);
  };


  const handleMouseLeaveCountries = () => {
    setCountries(false);
  };


  const handleMouseLeaveDropdown = () => {
    setServices(false);
  };

  return (
    <div className="bg-[#0097a7] min-w-screen h-12 lg:flex hidden items-center px-32">
      <ul className="flex space-x-[70px] text-white ">
        <li>
          <Link href="/" className="hover:text-white/70 text-[14px]">
           
            HOME
          </Link>
        </li>
        <li>
          <div className="relative" onMouseEnter={handleEnterServices} >
            <Link href="/" className="hover:text-white/70 text-[14px] ">
               SERVICES 
            </Link>
            {services && (
              <div
                className="absolute bg-slate-300 flex flex-col text-black space-y-4 mt-3 -left-10 py-4 w-44"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Visa
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Student Visa
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  immigration
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Travel and Tourism
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Education Loans
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Insurance
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Accommodation
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Air Ticket Booking
                </Link>
              </div>
            )}
          </div>
        </li>
        <li>
          <div className="relative" onMouseEnter={handleEnterCountries}>
            <Link href="/" className="hover:text-white/70 text-[14px]">
              COUNTRIES
            </Link>
            {countries && (
              <div
                className="absolute bg-slate-300 flex flex-col text-black space-y-4 mt-3 -left-10 py-4 w-48"
                onMouseEnter={handleMouseEnterCountries}
                onMouseLeave={handleMouseLeaveCountries}
              >
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Study in USA
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Study in UK
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                   Study in Canada
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                   Study in Australia
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                  Study in Europe
                </Link>
                <Link
                  href="/"
                  className="hover:bg-[#0097a7] hover:text-white  flex justify-center"
                >
                   Study in Ireland
                </Link>
                
              </div>
            )}
          </div>
        </li>
    
        <li>
          <Link href="/" className="hover:text-white/70 text-[14px]">
            CONTACT US
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-white/70 text-[14px]">
            ABOUT US
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-white/70 text-[14px]">
            FREE COUNSELLING
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-white/70 text-[14px]">
            REGISTER NOW
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-white/70 text-[14px]">
            FEEDBACK
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header2;
