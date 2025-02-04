import React, { useState } from "react";
import logo from "../assets/logoAbout.svg";
import Image3 from "../assets/image3.svg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Optional: close the menu when clicking outside
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <>
      <div className="px-[30px] sm:px-[100px] bg-[rgba(244,244,244,1)] min-h-[640px] flex flex-col gap-[250px]">
        {/* Navbar Section */}
        <div className="flex justify-between items-center py-6">
          <div>
            <img src={logo} className="py-[26px]" alt="logo" />
          </div>
          {/* Desktop Menu */}
          <div className="flex gap-[30px] items-center text-[18px] font-[400px] leading-[25px] hidden lg:flex">
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
              <p className="cursor-pointer bg-black text-white px-[40px] py-[11px] rounded-full mt-2">
                Contact
              </p>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black">
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
              <p className="cursor-pointer bg-black text-white px-[40px] py-[11px] rounded-full mt-2">
                Contact
              </p>
            </Link>
          </div>
        )}

        {/* Page Content */}
        <div className="py-[30px]">
          <h1 className="text-[64px] leading-[77.44px] font-[400]">
            Privacy and Cookies Policy
          </h1>
          <p className="mt-[48px] max-w-[600px] leading-[25px] text-[18px] font-[400]">
            This privacy is designed to inform you about how we collect, use,
            and protect your personal information when you interact with our
            website.
          </p>
        </div>
      </div>

      <div className="lg:px-[100px] px-[30px] lg:max-w-[70%]  mt-[100px]">
        <div>
          <h1 className="text-[40px] leading-[48.4px] font-[400] ">
            1.Information we collect
          </h1>
          <p className="mt-[48px]  leading-[25px] text-[18px] font-[400]  ">
            We gather various types of information to enhance and optimize our
            services. This includes personal information such as your name,
            email address, phone number, and mailing address, collected when you
            register for an account, contact us, or use our services. We also
            gather usage information, which encompasses details about your
            interactions with our website and services, including your IP
            address, browser type, device information, pages visited, and
            actions taken.
          </p>
        </div>

        <div className="mt-[64px]">
          <h1 className="text-[40px] leading-[48.4px] font-[400] ">
            2.How we use your information
          </h1>
          <p className="mt-[48px]  leading-[25px] text-[18px] font-[400]  ">
            We gather various types of information to enhance and optimize our
            services. This includes personal information such as your name,
            email address, phone number, and mailing address, collected when you
            register for an account, contact us, or use our services. We also
            gather usage information, which encompasses details about your
            interactions with our website and services, including your IP
            address, browser type, device information, pages visited, and
            actions taken.
          </p>
        </div>

        <div className="mt-[64px]">
          <h1 className="text-[40px] leading-[48.4px] font-[400] ">
            3.Communication
          </h1>
          <p className="mt-[48px]  leading-[25px] text-[18px] font-[400]  ">
            We may employ your contact information to communicate with you
            concerning our services, provide updates, and convey important
            notices. You have the option to opt out of marketing communications
            at any time.
          </p>
        </div>

        <div className="mt-[64px]">
          <h1 className="text-[40px] leading-[48.4px] font-[400] ">
            4. Cookies and Tracking Technologies
          </h1>
          <p className="mt-[48px]  leading-[25px] text-[18px] font-[400]  ">
            To better understand your browsing behavior and improve your website
            experience, we utilize cookies and similar tracking technologies.
            Cookies are small data files stored on your device that facilitate
            our comprehension of your preferences. By utilizing our website, you
            implicitly consent to our use of cookies, as detailed in our Cookies
            Policy. You maintain the ability to manage your cookie preferences
            through your browser settings.
          </p>
        </div>

        <div className="mt-[64px]">
          <h1 className="text-[40px] leading-[48.4px] font-[400] ">
            5. Security
          </h1>
          <p className="mt-[48px]  leading-[25px] text-[18px] font-[400]  ">
            We prioritize data security and employ reasonable measures to
            safeguard your information from unauthorized access, disclosure,
            alteration, or destruction. While we diligently strive to protect
            your data, it's important to acknowledge that no method of
            transmission over the internet or electronic storage is entirely
            secure. Consequently, we cannot provide absolute security
            guarantees.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Privacy;
