import React from "react";
import img4 from "../assets/images/location-hero.png";
import card1 from "../assets/images/card.png";
import card2 from "../assets/images/card-1.png";
import card3 from "../assets/images/card-2.png";
import card4 from "../assets/images/card-3.png";
import card5 from "../assets/images/card-4.png";

const Locations = () => {
  return (
    <div className=" bg-black lg:px-[158px] mx-auto max-w-[1920px]">
      <section className="location-hero bg-black h-[60vh] lg:h-[100vh] lg:pt-28">
        <article className="relative isolate flex flex-col justify-end rounded-xl h-5/6 w-full overflow-hidden p-8 mx-auto">
          <img
            src={img4}
            alt="University of Southern California"
            class="absolute inset-0 h-full w-full object-scale-down lg:object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70"></div>
          <h3 className="z-10 my-2 text-4xl lg:text-6xl font-bold text-opacity-90 text-white">
            Safari Locations
          </h3>
          <div className="z-10 gap-y-1 overflow-hidden text-sm lg:text-xl leading-4 text-gray-300">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </div>
        </article>
      </section>
      <section className="lg:flex h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className=" flex-1 px-5">
          <img src={card1} alt="" />
        </div>
        <div className=" flex-1 px-5 py-10 ">
          <h2 className=" text-white text-opacity-100 text-2xl lg:text-3xl mb-5">
            Udawalawa
          </h2>
          <p className=" text-white text-opacity-80 lg:text-lg h-40 lg:h-auto overflow-scroll lg:overflow-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim{" "}
          </p>
        </div>
      </section>
      <section className="lg:flex h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className=" lg:order-2 flex-1 px-5">
          <img src={card2} alt="" />
        </div>
        <div className=" flex-1 px-5 py-10">
          <h2 className=" text-white text-opacity-100 text-2xl lg:text-3xl mb-5">
            Udawalawa
          </h2>
          <p className=" text-white text-opacity-80 lg:text-lg h-40 lg:h-auto overflow-scroll lg:overflow-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim{" "}
          </p>
        </div>
      </section>
      <section className="lg:flex h-[70vh] lg:h-[80vh]  overflow-hidden">
        <div className=" flex-1 px-5">
          <img src={card3} alt="" />
        </div>
        <div className=" flex-1 px-5 py-10">
          <h2 className=" text-white text-opacity-100 text-2xl lg:text-3xl mb-5">
            Udawalawa
          </h2>
          <p className=" text-white text-opacity-80 lg:text-lg h-40 lg:h-auto overflow-scroll lg:overflow-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim{" "}
          </p>
        </div>
      </section>
      <section className="lg:flex h-[70vh] lg:h-[80vh] overflow-hidden ">
        <div className=" lg:order-2 flex-1 px-5">
          <img src={card4} alt="" />
        </div>
        <div className=" flex-1 px-5 py-10">
          <h2 className=" text-white text-opacity-100 text-2xl lg:text-3xl mb-5">
            Udawalawa
          </h2>
          <p className=" text-white text-opacity-80 lg:text-lg h-40 lg:h-auto overflow-scroll lg:overflow-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim{" "}
          </p>
        </div>
      </section>
      <section className="lg:flex h-[70vh] lg:h-[80vh] overflow-hidden">
        <div className=" flex-1 px-5">
          <img src={card1} alt="" />
        </div>
        <div className=" flex-1 px-5 py-10">
          <h2 className=" text-white text-opacity-100 text-2xl lg:text-3xl mb-5">
            Udawalawa
          </h2>
          <p className=" text-white text-opacity-80 h-40 lg:text-lg lg:h-auto overflow-scroll lg:overflow-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Locations;
