"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar2 = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (pathname?: String) => path === pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-auto p-5 border-b top-0 border-gray-800 flex bg-black  flex-col md:flex-row justify-between items-center text-gray-400">
      <div className="mb-4 md:mb-0 flex justify-between w-full md:w-auto">
        <Link href="/">
          <Image
            alt="brainwave Logo"
            src="/brainwave.svg"
            width={200}
            height={100}
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-400 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex md:w-1/3 p-2 md:items-center justify-between`}
      >
        <div className="mb-2 md:mb-0 md:ml-4">
          <Link
            href="/features"
            className={
              isActive("/features")
                ? "transition-colors duration-300 delay-150 text-white"
                : "text-gray-400"
            }
          >
            <h4 className="transition-colors duration-300 delay-150 hover:text-white">
              Features
            </h4>
          </Link>
        </div>
        <div className="mb-2 md:mb-0 md:ml-4">
          <Link
            href="/pricing"
            className={
              isActive("/pricing")
                ? "transition-colors duration-300 delay-150 text-white"
                : "text-gray-400"
            }
          >
            <h4 className="transition-colors duration-300 delay-150 hover:text-white">
              Pricing
            </h4>
          </Link>
        </div>
        {/* <div className="mb-2 md:mb-0 md:ml-4">
          <Link
            href="/roadmap"
            className={
              isActive("/roadmap")
                ? "transition-colors duration-300 delay-150 text-white"
                : "text-gray-400"
            }
          >
            <h4 className="transition-colors duration-300 delay-150 hover:text-white">
              Roadmap
            </h4>
          </Link>
        </div> */}
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex-row md:flex md:w-[15%] p-2 md:items-center justify-between`}
      >
        <div className="mb-2 md:mb-0 md:ml-4 transition-colors duration-300 delay-150 hover:text-white">
          <Link
            href="/signup"
            className={
              isActive("/signup")
                ? "transition-colors duration-300 delay-150 text-white"
                : "text-gray-400"
            }
          >
            <h4 className="transition-colors duration-300 delay-150 hover:text-white">
              New user
            </h4>
          </Link>
        </div>
        <div className="md:ml-4 transition-colors duration-300 delay-150 hover:text-white">
          <Link href="/signin">
            <h4>Sign In</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
