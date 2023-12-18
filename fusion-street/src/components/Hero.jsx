import React from "react";
import hero_img from "../assets/images/Leopord.png";
// import { Parallax } from "react-parallax";

const scrollToSection = () => {
  const targetSection = document.getElementById("carousel");

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <div
      id="home"
      className="max-w-[1920px] relative mx-auto lg:h-[100vh] h-[40vh] mt-[75px] "
    >
      <img
        src={hero_img}
        alt="University of Southern California"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div className="flex h-full items-center absolute top-0 ">
        <div className="flex-1 relative flex flex-col items-center lg:px-[182px]">
          <h2 className=" text-white tracking-normal text-center font-light lg:leading-10 opacity-80 text-sm px-2 lg:text-3xl lg:w-11/12 lg:text-left mx-auto italic">
            “ Immerse yourself in a colorful culture and find adventure as you
            travel in Sri Lanka guided by us”
          </h2>
          <button
            onClick={scrollToSection}
            className="px-10 py-2 lg:px-20 lg:py-7 hover:scale-105 shadow-stone-950 duration-300  mt-10 shadow-xl rounded-sm text-gray-300 text-sm lg:text-2xl opacity-100 text-opacity-100 bg-[#09898E]"
          >
            explore
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Hero;
