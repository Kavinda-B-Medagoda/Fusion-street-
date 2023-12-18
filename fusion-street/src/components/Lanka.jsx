import React from "react";
import lanka from "../assets/images/lanka.png";
import { Link } from "react-router-dom";

const Lanka = () => {
  return (
    <div className="max-w-[1920px] mx-auto h-[70vh] md:h-[100vh]">
      <article class="relative isolate flex flex-col justify-end px-8 pb-8 h-full">
        <div className=" text-5xl lg:text-7xl font-extrabold absolute top-60 lg:top-40 lg:left-[158px] z-[100] ">
          <span className="bg-gradient-to-b from-red-600 to-slate-500 bg-clip-text text-transparent">
            Sri Lanka
          </span>
        </div>
        <img
          src={lanka}
          alt="University of Southern California"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40"></div>

        <div class="z-10 gap-y-1 absolute lg:overflow-hidden left-0 bottom-28 lg:bottom-44 text-xs lg:text-lg lg:leading-6 px-14 lg:px-40 text-justify text-gray-300">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla Lorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </div>
        {/* <div>sss</div> */}
        <Link to="/understanding">
          <button className="bg-gradient-to-l from-[#E8641E] to-[#9e552d] absolute right-[105px] lg:right-[158px] bottom-10 lg:bottom-20 shadow-2xl rounded-sm px-10 py-3 lg:px-20 lg:py-6 text-xs lg:text-lg text-white hover:scale-105 duration-300">
            understanding sri lanka
          </button>
        </Link>
      </article>
    </div>
  );
};

export default Lanka;
