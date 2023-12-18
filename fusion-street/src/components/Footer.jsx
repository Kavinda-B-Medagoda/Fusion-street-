import React from "react";
import logo from "../assets/images/logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer class=" shadow bg-[#111111] pt-7">
      <div class="w-full max-w-[1920px] mx-auto p-4 md:py-8 lg:px-[158px]">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} class="h-12 my-2 mx-auto opacity-90" alt="Logo" />
          </a>
          <ul class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
            <Link to="home" smooth={true} duration={800}>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6 text-white">
                  Home
                </a>
              </li>
            </Link>
            <Link to="carousel" smooth={true} duration={800}>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6 text-white">
                  Explore
                </a>
              </li>
            </Link>
            <Link to="home" smooth={true} duration={800}>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6 text-white">
                  Contact us
                </a>
              </li>
            </Link>
            <Link to="home" smooth={true} duration={800}>
              <li>
                <a href="#" class="hover:underline text-white">
                  About us
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <hr class="my-6 sm:mx-auto bg-black bg-opacity-90 lg:my-8" />
        <span class="flex gap-1 justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://fusionstreet.com/" class="hover:underline">
            FusionStreet.
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
