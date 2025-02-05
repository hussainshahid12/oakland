import React, { useState } from "react";
import logo from "../assets/Logo Variations.svg";
import bgContainer from "../assets/Rectangle2.svg";
import { Link } from "react-router-dom"; // If you're using react-router for navigation

const Header = () => {
  // State for toggling the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[rgba(33,37,41,1)] px-4 sm:px-6 md:px-10 w-full">
          <div className="flex flex-col h-[85%] justify-between">
            {/* Mobile Menu Toggle */}
            <div className="lg:hidden absolute top-6 right-6 flex items-center justify-between w-[50px] h-[50px] z-50">
              {/* Hamburger Icon - Show when mobile menu is closed */}
              {!isMobileMenuOpen ? (
                <button
                  onClick={toggleMobileMenu}
                  className="text-white focus:outline-none"
                >
                  <div className="w-6 h-1 bg-white mb-2"></div>
                  <div className="w-6 h-1 bg-white mb-2"></div>
                  <div className="w-6 h-1 bg-white"></div>
                </button>
              ) : (
                // Cross Icon - Show when mobile menu is open
                <button
                  onClick={toggleMobileMenu}
                  className="text-white focus:outline-none "
                >
                  <i class="fa-solid fa-xmark text-[30px]"></i>
                </button>
              )}
            </div>

            {/* Mobile First Column Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden absolute top-0 left-0 w-full h-[100vh] bg-black bg-opacity-90 text-white p-6">
                {/* Close Button (cross icon) */}

                {/* Menu Items */}
                <div className="flex flex-col gap-4 text-lg mt-10">
                  <Link to="/about" className="cursor-pointer hover:underline">
                    About Us
                  </Link>
                  <Link
                    to="/services"
                    className="cursor-pointer hover:underline"
                  >
                    Services
                  </Link>
                  <Link
                    to="/portfolio"
                    className="cursor-pointer hover:underline"
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/contact"
                    className="cursor-pointer bg-[rgba(255,255,255,0.3)] px-[40px] py-[10px] rounded-full mt-2 hover:bg-white hover:text-black transition-all"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}

            {/* Content Section */}
            <div>
              <Link to="/">
                <img
                  src={logo}
                  className="py-[26px] px-6 md:px-[100px]"
                  alt="logo"
                />
              </Link>
            </div>

            <div className="py-[26px] px-6 sm:px-8 md:px-[100px] flex flex-col gap-12  ">
              <h1 className="text-white text-2xl md:text-[64px] text-[32px] sm:text-[48px] w-full sm:w-[292px] leading-[77.44px]">
                Redefining Energy
              </h1>
              <p
                className="text-white max-w-[535px] sm:max-w-full"
                style={{ lineHeight: "25px" }}
              >
                As market leaders for 20 years, we are experts in energy
                efficiency, providing tailored, concrete solutions to meet your
                needs.
              </p>

              <Link to="/portfolio">
                <button className="w-full sm:w-[217px] h-[57px] bg-white font-bold rounded-full">
                  <span
                    className="text-[14px] font-normal"
                    style={{
                      lineHeight: "25px",
                      color: "#212529",
                    }}
                  >
                    View our Portfolio
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Section */}
        <div className="relative flex justify-center items-center w-full sm:w-full">
          <img
            src={bgContainer}
            alt="bgContainer"
            className="w-full h-full object-cover"
          />

          {/* Desktop Menu Items */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-6 lg:gap-8 text-white w-full justify-center items-center hidden lg:flex">
            <Link to="/about">
              {" "}
              <p className="cursor-pointer mt-2 hover:underline">About Us</p>
            </Link>
            <Link to="/services">
              {" "}
              <p className="cursor-pointer mt-2 hover:underline">Services</p>
            </Link>
            <Link to="/portfolio">
              {" "}
              <p className="cursor-pointer mt-2 hover:underline">Portfolio</p>
            </Link>
            <Link to="/contact">
              <p className="cursor-pointer bg-[rgba(255,255,255,0.3)] px-[40px] py-[10px] rounded-full mt-2 hover:bg-white hover:text-black transition-all">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
