import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as Linked } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="text-white bg-black fixed top-0 left-0 w-full z-50">
      <nav
        className="mx-auto flex max-w-[1920px] items-center justify-between p-6 lg:px-[158px]"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <div className="logo w-2/3 pl-7 lg:pl-0">
              <img src={logo} alt="" />
            </div>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7 mr-7" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Link to="home" smooth={true} duration={500}>
            <Linked
              to="/"
              className="text-sm font-light leading-6 text-opacity-80 text-white
          hover:text-opacity-100 duration-200"
            >
              Home
            </Linked>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <Linked
              to="/"
              className="text-sm font-light leading-6 text-opacity-80 text-white
          hover:text-opacity-100 duration-200"
            >
              Explore
            </Linked>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <a
              href="#aboutUs"
              className="text-sm font-light leading-6 text-opacity-80 text-white hover:text-opacity-100 duration-200"
            >
              About us
            </a>
          </Link>
          <Link to="carousel" smooth={true} duration={500}>
            <a
              href="#contactUs"
              className="text-sm font-light leading-6 text-opacity-80 text-white hover:text-opacity-100 duration-200"
            >
              Contact us
            </a>
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between text-lg">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <div className="logo w-2/3">
                <img src={logo} alt="" />
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root duration-300">
            <div className="-my-6 divide-y divide-gray-500/10 duration-300">
              <div className="space-y- py-6">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <a
                    href="#carousel"
                    className="-mx-3 block rounded-lg text-opacity-80 px-3 py-2 text-base leading-7 hover:bg-gray-50 text-white"
                  >
                    Home
                  </a>
                </Link>

                <Link
                  to="carousel"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <a
                    href="#explore"
                    className="-mx-3 block rounded-lg text-opacity-80 px-3 py-2 text-base font-light leading-7  hover:bg-gray-50 text-white"
                  >
                    Explore
                  </a>
                </Link>
                <Link
                  to="carousel"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <a
                    href="#aboutUs"
                    className="-mx-3 block rounded-lg text-opacity-80 px-3 py-2 text-base font-light leading-7  hover:bg-gray-50 text-white"
                  >
                    About us
                  </a>
                </Link>
                <Link
                  to="carousel"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <a
                    href="#contactUs"
                    className="-mx-3 block rounded-lg text-opacity-80 px-3 py-2 text-base font-light leading-7  hover:bg-gray-50 text-white"
                  >
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
