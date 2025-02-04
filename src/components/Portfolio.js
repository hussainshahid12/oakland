import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/whiteLogo.svg";
import bgframe from "../assets/Frame5.svg";
import inovation from "../assets/inovation.svg";
import expertise from "../assets/expertise.svg";
import star from "../assets/star.svg";
import frame11 from "../assets/Frame11.svg";
import frame12 from "../assets/Frame12.svg";
import frame13 from "../assets/Frame13.svg";
import frame14 from "../assets/Frame14.svg";
import frame15 from "../assets/Frame15.svg";
import frame16 from "../assets/Frame16.svg";
import Footer from "./Footer";

const items = [
  {
    title: "Deloitte Building, London",
    category: "Energy Efficiency, LED Lighting",
    imageUrl: frame11,
    alt: "Interior view of Deloitte Building, London",
  },
  {
    title: "Car Chargers, Oakland",
    category: "Electric Mobility",
    imageUrl: frame12,
    alt: "Car Chargers, Oakland",
  },
  {
    title: "Amazon Headquarters, UK",
    category: "LED Lighting",
    imageUrl: frame13,
    alt: "Interior view of Amazon Headquarters, UK",
  },
  {
    title: "Astrazeneca Lab Facilities, Nevada",
    category: "LED Lighting",
    imageUrl: frame14,
    alt: "Interior view of Astrazeneca Lab Facilities, Nevada",
  },
  {
    title: "Gertie's BBQ, Las Vegas",
    category: "Energy Efficiency, LED Lighting",
    imageUrl: frame15,
    alt: "Interior view of Gertie's BBQ, Las Vegas",
  },
  {
    title: "Car Chargers, Portugal",
    category: "Electric Mobility",
    imageUrl: frame16,
    alt: "Car Chargers, Portugal",
    highlighted: true,
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category.includes(selectedCategory));

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Optional: close the menu when clicking outside
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Main Section with Background Image */}
      <div className="relative px-[30px] sm:px-[100px] h-[800px] flex flex-col gap-[300px]">
        <img
          src={bgframe}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Fixed Navbar */}
        <div className="flex justify-between items-center relative z-10  mt-[23px]">
          <div>
            <Link to="/">
              <img src={logo} className="py-[26px]" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="flex gap-[30px] items-center text-[18px] font-[400] leading-[25px] hidden lg:flex text-white">
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

          {/* Mobile Menu Hamburger Icon */}
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
            <Link to="/contact" onClick={closeMenu}>
              <p className="cursor-pointer bg-[#808082] text-white px-[40px] py-[11px] rounded-full">
                Contact
              </p>
            </Link>
          </div>
        )}
      </div>

      {/* Section: The Distinction that Sets Us Apart */}
      <div className="mt-[140px] lg:px-[100px] px-[30px]">
        <h2 className="mt-[48px] max-w-[818px] leading-[48.4px] text-[40px] font-[400] text-[rgba(66,70,73,1)]">
          The distinction that sets us Apart in the industry
        </h2>
        <div className="mt-[64px]">
          <p className="max-w-[772px] leading-[25px] text-[18px] font-[400]">
            In a highly competitive industry, what distinguishes a company is
            not just its offerings but its unwavering commitment to excellence
            and innovation. At Oakland C.E., we understand that to rise above
            the competition, we must constantly strive for distinction in every
            aspect of our business. Our journey in the energy sector has been
            defined by innovation and expertise.
          </p>
        </div>
      </div>

      {/* Section: Key Qualities */}
      <div className="mt-[64px] lg:px-[100px] px-[30px]">
        <div className="flex flex-wrap gap-4 justify-between">
          {/* Inovation */}
          <div className="w-full sm:w-[48%] md:w-[23%] p-4 flex items-center gap-2">
            <img
              src={inovation}
              alt="Inovation Icon"
              className="w-10 h-10 object-contain"
            />
            <span className="text-[32px] text-gray-700 leading-[38.72px] font-[400] lg:ps-[32px]">
              Inovation
            </span>
          </div>

          {/* Expertise */}
          <div className="w-full sm:w-[48%] md:w-[23%] p-4 flex items-center gap-2">
            <img
              src={expertise}
              alt="Expertise Icon"
              className="w-10 h-10 object-contain"
            />
            <span className="text-[32px] text-gray-700 leading-[38.72px] font-[400] lg:ps-[32px]">
              Expertise
            </span>
          </div>

          {/* Quality */}
          <div className="w-full sm:w-[48%] md:w-[23%] p-4 flex items-center gap-2">
            <img
              src={star}
              alt="Quality Icon"
              className="w-10 h-10 object-contain"
            />
            <span className="text-[32px] text-gray-700 leading-[38.72px] font-[400] lg:ps-[32px]">
              Quality
            </span>
          </div>

          {/* Empty container for layout */}
          <div className="w-full sm:w-[48%] md:w-[23%] p-4 hidden xl:block"></div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-[120px] lg:px-[100px] px-[30px] bg-[rgba(244,244,244,1)] pb-[70px]">
        <div className="container-fluid pt-[64px]">
          <div className="flex justify-start space-x-4 mb-8">
            {[
              "All",
              "LED Lighting",
              "Energy Efficiency",
              "Electric Mobility",
            ].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 lg:px-[40px] lg:py-[16px] rounded-full text-[18px] leading-[25px] font-[400] ${
                  selectedCategory === category
                    ? "bg-gray-300"
                    : "bg-white border"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden max-w-[424px]"
              >
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[18px] leading-[25px] font-[400]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-[20px] font-[400]">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end space-x-2 2xl:pe-[50px] mt-[64px]">
            <button className="px-3 py-1 bg-gray-300 rounded-full">1</button>
            <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              2
            </button>
            <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              3
            </button>
            <button className="px-3 py-1 bg-gray-100 border border-gray-300 rounded-full">
              Próximo
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-[140px] lg:px-[100px] px-[30px] max-w-[799px]">
        <h2 className="text-[40px] font-[400] leading-[48.4px]">
          Get in touch with us
        </h2>
        <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] md:max-w-[787px] 2xl:max-w-[1100px]">
          If you're ready to explore how our expertise in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility can benefit your
          projects, don't hesitate to reach out. We're here to listen,
          collaborate, and provide you with tailored solutions that align with
          your specific needs and goals.
        </p>

        <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] max-w-[150px] h-[25px] ">
          Contact us{" "}
          <span>
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Portfolio;
