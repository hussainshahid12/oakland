import React from "react";
import logo from "../assets/logoAbout.svg";
import meeting from "../assets/aboutImage2.svg";
import bgframe from "../assets/Frame20.svg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="px-[30px]  sm:px-[100px] bg-[rgba(244,244,244,1)] h-[640px] flex flex-col  gap-[300px] ">
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
          <h1 className="text-[64px] leading-[77.44px font-[400]]">About us</h1>
          <p className="mt-[48px] max-w-[535px] leading-[25px] text-[18px] font-[400]">
            Learn more about Oakland C.E. and our commitment to excellence,
            innovation, and sustainability.
          </p>
        </div>
      </div>
      <div className=" mt-[100px] px-[100px]">
        <div>
          <h2 className="mt-[48px] max-w-[778px] leading-[48.4px] text-[40px] font-[400] text-[rgba(66,70,73,1)]">
            Innovation.<br></br>
            Guiding our journey from the start.
          </h2>
        </div>
        <div className="xl:flex xl:justify-end  pt-[100px]">
          <img src={meeting} alt="meeting" />
        </div>
        <div className="mt-[140px]">
          <p className="mt-[48px] max-w-[757px] leading-[25px] text-[18px] font-[400]">
            Innovation has been at the heart of our journey right from the
            beginning. At Oakland C.E., we believe that staying at the forefront
            of technology and sustainable practices is essential. We've
            consistently sought innovative solutions in energy efficiency, LED
            lighting, photovoltaic energy, and electric mobility to shape a
            brighter and greener future.
            <p className="mt-[20px]">
              Our commitment to innovation drives us to continually explore new
              avenues, refine our processes, and deliver pioneering results for
              our clients. Join us in embracing innovation as we chart a course
              towards a more sustainable and efficient energy landscape.
            </p>
          </p>
        </div>
      </div>

      <div className="mt-[100px] px-[100px]">
        <img src={bgframe} alt="bgframe" className="w-full" />

        <div className="mt-[60px] xl:flex xl:justify-end">
          <p className="mt-[48px] max-w-[757px] leading-[25px] text-[18px] font-[400]">
            From our company's inception, innovation has been ingrained in our
            DNA. It's not just a buzzword; it's the driving force behind
            everything we do. Our founders were visionaries who understood that
            to make a real impact in the energy sector, we needed to lead with
            innovation.
            <p className="mt-[20px]">
              This commitment to cutting-edge solutions has allowed us to
              consistently push the boundaries of what's possible in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility. We've fostered a culture that encourages creativity,
              embraces change, and thrives on challenges. As we continue to
              grow, our dedication to innovation remains unwavering, ensuring
              that we remain a trailblazer in the industry.
            </p>
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
