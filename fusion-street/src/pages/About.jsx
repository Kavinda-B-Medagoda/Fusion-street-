import React from "react";
import img4 from "../assets/images/about-hero.png";
import people from "../assets/images/people.png";
import temple from "../assets/images/temple.png";
import river from "../assets/images/river.png";
import village from "../assets/images/village.png";
import f0 from "../assets/images/fusion-0.png";
import f1 from "../assets/images/fusion-1.png";
import f2 from "../assets/images/fusion-2.png";
import f3 from "../assets/images/fusion-3.png";
import f4 from "../assets/images/fusion4.png";
import f5 from "../assets/images/fusion5.png";

const About = () => {
  return (
    <div className="bg-black mx-auto max-w-[1920px] ">
      <section className="location-hero bg-black h-[40vh] lg:h-[100vh] lg:pt-28 mb-10">
        <article className="relative isolate flex flex-col justify-end h-full w-full overflow-hidden p-8  mx-auto">
          <img
            src={img4}
            alt="University of Southern California"
            class="absolute inset-0 h-full w-full object-scale-down lg:object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/30"></div>
          <h3 className="z-10 my-4 text-4xl lg:text-5xl font-bold text-opacity-90 text-center text-white">
            Understanding Sri Lankan Culture
          </h3>
        </article>
      </section>

      <section className="max-w-[1920px] h-auto lg:h-screen lg:pt-36 lg:px-[158px] px-10 pb-10">
        <div className=" lg:flex flex-col gap-6 h-full">
          <div className="lg:flex gap-4 h-1/2">
            <article className="relative isolate flex h-full flex-col justify-end rounded-xl lg:w-4/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={temple}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                History
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-3/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam era
              </div>
            </article>
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-2/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={people}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Demographics
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-2/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam era.
              </div>
            </article>
          </div>
          <div className="lg:flex gap-4 h-1/2">
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-2/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={river}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Geography
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-2/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                reprehenderit!
              </div>
            </article>
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-4/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={village}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Nature
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-3/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                ipsam.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] h-auto lg:h-screen lg:pt-36 lg:px-[158px] px-10 pb-10">
        <div className=" lg:flex flex-col gap-6 h-full">
          <div className="lg:flex gap-4 h-1/2">
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-4/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={f1}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Culture
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-3/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam era
              </div>
            </article>
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-2/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={f0}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full  object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Slangs
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-2/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam era.
              </div>
            </article>
          </div>
          <div className="lg:flex gap-4 h-1/2">
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-2/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={f2}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full  object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Things to avoid
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-2/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                reprehenderit!
              </div>
            </article>
            <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-4/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
              <img
                src={f3}
                alt="University of Southern California"
                class="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
              <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
                Culture shocks
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-3/5 h-20 leading-4 text-gray-300">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                ipsam.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] h-auto lg:h-[70vh] lg:pt-36 lg:px-[158px] px-10 pb-20">
        <div className="lg:flex gap-4 h-full">
          <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-4/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
            <img
              src={f4}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
            <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
              Apps you will need
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-3/5 h-20 leading-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam era
            </div>
          </article>
          <article className="relative isolate flex flex-col justify-end rounded-xl lg:w-2/6 overflow-hidden mb-20 lg:mb-0 p-8 mx-auto">
            <img
              src={f5}
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/60"></div>
            <h3 className="z-10 my-2 lg:text-2xl font-bold text-opacity-90 text-white">
              Important contacts
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-xs lg:text-sm lg:w-2/5 h-20 leading-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              era.
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
