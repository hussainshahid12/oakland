import React from "react";
import logo from "../assets/logoAbout.svg";
import Image3 from "../assets/image3.svg";
import Footer from "./Footer";

const contact = () => {
  return (
    <>
      <div className="  px-[30px]  sm:px-[100px] bg-[rgba(244,244,244,1)] h-[640px] flex flex-col  gap-[300px] ">
        <div className="flex justify-between">
          <div>
            <img src={logo} className="py-[26px]  " alt="logo" />
          </div>
          <div className="flex  gap-[30px] items-center text-[18px] font-[400px] leading-[25px] hidden lg:flex">
            <p className="cursor-pointer mt-2 hover:underline">About us</p>
            <p className="cursor-pointer mt-2 hover:underline">Services</p>
            <p className="cursor-pointer mt-2 hover:underline">Portfolio</p>
            <p className="cursor-pointer bg-black text-white px-[40px] py-[11px] rounded-full mt-2">
              Contact
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[64px] leading-[77.44px font-[400]]">
            {" "}
            Contact us
          </h1>
          <p className="mt-[48px] max-w-[535px] leading-[25px] text-[18px] font-[400]">
            Our team is here to assist you on your journey towards a sustainable
            and efficient energy future.
          </p>
        </div>
      </div>

      <div className=" px-[30px]  sm:px-[100px] mt-[100px] lg:flex">
        <div className="lg:w-[30%]">
          <div>
            <h2 className="font-[400] text-[40px] leading-[48.4px] max-w-[148px] text-[rgba(66,70,73,1)]">
              Location
            </h2>
            <p className="mt-[40px] text-[18px] font-[400] leading-[25px]">
              Avenida Marta Lopes, Nº2 <br></br> 8400-401 Vila Real, Portugal
            </p>
          </div>

          <div className="mt-[50px]">
            <h2 className="font-[400] text-[40px] leading-[48.4px]  text-[rgba(66,70,73,1)]">
              Open hours
            </h2>
            <p className="mt-[40px] text-[18px] font-[400] leading-[25px]">
              Weekdays - 9:00am to 6:00pm <br></br> Weekends - Closed
            </p>
          </div>
        </div>

        <div className="lg:w-[70%]">
          <div>
            <h2 className="font-[400] text-[40px] leading-[48.4px] max-w-[148px] text-[rgba(66,70,73,1)] xl:ps-[10px]  lg:mt-[0px] mt-[40px]">
              Form
            </h2>
          </div>
          <div className="mt-[40px] lg:flex lg:flex-wrap">
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Name"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Email"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Phone"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] p-[10px]">
              <input
                type="text"
                placeholder="Address"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[100%] p-[10px]">
              <textarea
                placeholder="Message"
                className="px-[20px] py-[10px] w-full border border-gray-300 rounded-md focus:border-blue-500 resize-none h-[300px]"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="lg:w-[100%] p-[10px] flex items-center">
              <input type="checkbox" id="agree" className="mr-2" />
              <label htmlFor="agree" className="text-[16px]">
                I agree to the terms and conditions
              </label>
            </div>

            {/* Submit Button */}
            <div className="lg:w-[100%] p-[10px]">
              <button
                type="submit"
                className="bg-black text-white px-[40px] py-[12px] rounded-full mt-4 w-full sm:w-auto"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:px-[100px] xl:flex mt-[100px] h-[518px]">
        <div className="xl:w-[70%] h-full mb-[20px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988672637!2d-0.2664034848794909!3d51.528739805029666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1738585815841!5m2!1sen!2s"
            frameBorder="0"
            allowFullScreen
            className="rounded-md h-full"
            title="Google Map"
          ></iframe>
        </div>
        <div className="xl:w-[30%] text-start h-full ps-[20px] xl:ps-[0px] hidden xl:flex">
          <img
            src={Image3}
            alt="Image3"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Footer with margin to ensure separation */}
      <div className="mt-[30px]">
        <Footer />
      </div>
    </>
  );
};

export default contact;
