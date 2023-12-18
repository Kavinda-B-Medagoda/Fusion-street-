import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/images/photo1.png";
import img2 from "../assets/images/photo2.png";
import img3 from "../assets/images/photo3.png";
import img4 from "../assets/images/photo4.png";
import logo from "../assets/images/Adventures.png";
import "./component.css";
import { Link } from "react-router-dom";

const Carousel2 = () => {
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
        <Link to="/safari">
          <div>
            <article className="relative isolate hover:scale-95 duration-500 flex flex-col justify-end h-[70vh] w-[30vh] overflow-hidden rounded-2xl px-8 pb-8 mx-auto">
              <div className=" hover:scale-95">
                <img
                  src={img4}
                  alt="University of Southern California"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70"></div>
              <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
                Safari
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </div>
            </article>
          </div>
        </Link>

        <div>
          <article className="relative isolate hover:scale-95 duration-500 flex flex-col justify-end h-[70vh] w-[30vh] overflow-hidden rounded-2xl px-8 pb-8 mx-auto">
            <img
              src={img1}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Beaches
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
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Historic
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
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70"></div>
            <h3 className="z-10 my-2 text-2xl font-bold text-opacity-80 text-white">
              Adventure
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

export default Carousel2;
