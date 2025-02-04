import React, { useState } from "react";
import logo from "../assets/whiteLogo.svg";
import { Link } from "react-router-dom";
import serviceImage from "../assets/serviceimage2.svg";
import Footer from "./Footer";

const Faq = [
  {
    heading: "Illumination",
    data: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quod numquam aliquid ullam debitis esse dolorum, quasi distinctio sit, libero velit accusantium dolores nulla quo? Tempora velit repellendus delectus! Assumenda cumque magnam obcaecati reprehenderit, molestiae saepe nisi ab, iure voluptatum harum sapiente. Quos accusamus eum labore excepturi! Officiis, recusandae explicabo.",
  },
  {
    heading: "Sustainable Energy",
    data: "Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.",
  },
  {
    heading: "Electric Mobility",
    data: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quod numquam aliquid ullam debitis esse dolorum, quasi distinctio sit, libero velit accusantium dolores nulla quo? Tempora velit repellendus delectus! Assumenda cumque magnam obcaecati reprehenderit, molestiae saepe nisi ab, iure voluptatum harum sapiente. Quos accusamus eum labore excepturi! Officiis, recusandae explicabo.",
  },
  {
    heading: "Consulting",
    data: "Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Optional: close the menu when clicking outside
  const closeMenu = () => setIsMenuOpen(false);

  const handleFaqSec = (index) => {
    // Toggle the FAQ item
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <div className="px-[30px] sm:px-[100px] bg-[#212529] h-[640px] flex flex-col gap-[270px]">
        {/* Navbar Section */}
        <div className="flex justify-between items-center py-6">
          <div>
            <img src={logo} className="py-[26px]" alt="logo" />
          </div>
          {/* Desktop Menu */}
          <div className="flex gap-[30px] items-center text-[18px] font-[400px] leading-[25px] hidden lg:flex text-white">
            <Link to="/about">
              <p className="cursor-pointer mt-2 hover:underline">About us</p>
            </Link>
            <Link to="/services">
              <p className="cursor-pointer mt-2 hover:underline">Services</p>
            </Link>
            <Link to="/portfolio">
              <p className="cursor-pointer mt-2 hover:underline">Portfolio</p>
            </Link>
            <Link to="/contact">
              <p className="cursor-pointer bg-[#808082] text-white px-[40px] py-[11px] rounded-full mt-2">
                Contact
              </p>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <i
                className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"} text-3xl`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-75 text-white p-6 flex flex-col items-center space-y-6 z-20"
            onClick={closeMenu} // Close the menu when clicking outside
          >
            <Link to="/about" onClick={closeMenu}>
              <p className="cursor-pointer text-[18px] hover:underline">
                About us
              </p>
            </Link>
            <Link to="/services" onClick={closeMenu}>
              <p className="cursor-pointer text-[18px] hover:underline">
                Services
              </p>
            </Link>
            <Link to="/portfolio" onClick={closeMenu}>
              <p className="cursor-pointer text-[18px] hover:underline">
                Portfolio
              </p>
            </Link>
            <Link to="/contact">
              <p className="cursor-pointer bg-[#808082] text-white px-[40px] py-[11px] rounded-full mt-2">
                Contact
              </p>
            </Link>
          </div>
        )}

        {/* Page Content */}
        <div>
          <h1 className="text-[64px] leading-[77.44px] font-[400] text-white">
            Services
          </h1>
          <p className="mt-[48px] max-w-[535px] leading-[25px] text-[18px] font-[400] text-white">
            Discover our comprehensive range of services tailored to meet your
            energy efficiency, LED lighting, photovoltaic energy, and much more.
          </p>
        </div>
      </div>

      {/* Section 1 Faq Section */}
      <section className="px-4 md:px-20 pt-32 py-16">
        {/* Main Div of FAQ */}
        <div>
          {/* 1 FAQ Div */}
          {Faq.map((e, i) => (
            <div
              className="flex flex-col gap-8 p-5 border-t-2 cursor-pointer"
              onClick={() => handleFaqSec(i)}
              key={i}
            >
              <div className="flex justify-between">
                <h3 className="text-[48px] text-HeadingClr font-400">
                  {e.heading}
                </h3>
                <i class="fa-solid fa-arrow-down flex flex-col items-center justify-center text-[30px] text-[#A6A6AB] leading-[58.08px] w-[68px] "></i>
              </div>

              {/* Show the paragraph only if this FAQ is the one clicked */}
              <p
                className={`${
                  openIndex === i ? "flex" : "hidden"
                } text-center text-18 font-400 text-ParaClr`}
              >
                {e.data}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className=" mt-[104px] px-[30px]  sm:px-[100px]">
        <div className="xl:flex xl:justify-end  ">
          <img src={serviceImage} alt="meeting" />
        </div>
      </div>

      <div className="mt-[104px] lg:px-[100px] px-[30px] max-w-[799px]">
        <h2 className="text-[40px] font-[400px] leading-[48.4px]">
          Proudly helping businesses
        </h2>
        <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] md:max-w-[787px] 2xl:max-w-[1100px]">
          Explore our portfolio of remarkable projects where innovation and
          sustainability converge. Discover how we've transformed energy
          landscapes and elevated standards in the industry.
        </p>

        <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] max-w-[200px] h-[25px] ">
          View our Portfolio{" "}
          <span>
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </p>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Services;
