import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/images/loc1.png";
import img2 from "../assets/images/loc2.png";
import img3 from "../assets/images/loc3.png";
import img4 from "../assets/images/loc4.png";
import logo from "../assets/images/logo.svg";

const Camping = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="max-w-[1920px] mx-auto bg-[#141414] lg:px-[182px] py-10 lg:py-20 lg:h-[100vh]"
      id="carousel"
    >
      <img src={logo} className=" mx-auto opacity-90 mb-10" alt="" />
      <Carousel
        responsive={responsive}
        draggable={false}
        infinite={true}
        removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
      >
        <div>
          <article className="relative isolate hover:scale-95 duration-500 flex flex-col justify-end h-[70vh] w-[30vh] overflow-hidden rounded-2xl px-8 pb-8 mx-auto">
            <img
              src={img4}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Location 01
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-4 text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </div>
          </article>
        </div>
        <div>
          <article className="relative isolate hover:scale-95 duration-500 flex flex-col justify-end h-[70vh] w-[30vh] overflow-hidden rounded-2xl px-8 pb-8 mx-auto">
            <img
              src={img1}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Location 02
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-4 text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </div>
          </article>
        </div>
        <div>
          <article className="relative isolate hover:scale-95 duration-500 flex flex-col justify-end h-[70vh] w-[30vh] overflow-hidden rounded-2xl px-8 pb-8 mx-auto">
            <img
              src={img2}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Location 03
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-4 text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </div>
          </article>
        </div>
        <div>
          <article className="relative isolate hover:scale-95 duration-500 flex flex-col justify-end h-[70vh] w-[30vh] overflow-hidden rounded-2xl px-8 pb-8 mx-auto">
            <img
              src={img3}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Location 04
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-4 text-gray-300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
            </div>
          </article>
        </div>
      </Carousel>
    </div>
  );
};

export default Camping;
