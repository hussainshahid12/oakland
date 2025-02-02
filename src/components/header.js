import React from "react";
import logo from "../assets/Logo Variations.svg";
import bgContainer from "../assets/Rectangle2.svg";

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-[rgba(33,37,41,1)] px-4 sm:px-6 md:px-10 w-full ">
          <div className="flex flex-col h-full justify-between">
            <div>
              <img
                src={logo}
                className="py-[26px] px-6 md:px-[100px]"
                alt="logo"
              />
            </div>

            <div className="py-[26px] px-6 sm:px-8 md:px-[100px] flex flex-col gap-12">
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

          {/* Menu Items Positioned at the Top */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex gap-3 md:gap-6 lg:gap-8 text-white w-full justify-center items-center hidden lg:flex">
            <p className="cursor-pointer mt-2 hover:underline">About Us</p>
            <p className="cursor-pointer mt-2 hover:underline">Services</p>
            <p className="cursor-pointer mt-2 hover:underline">Portfolio</p>
            <p className="cursor-pointer bg-[rgba(255,255,255,0.3)] px-[40px] py-[10px] rounded-full mt-2 hover:bg-white hover:text-black transition-all">
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
