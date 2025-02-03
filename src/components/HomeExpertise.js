import React from "react";
import frame1 from "../assets/Frame1.svg";
import frame2 from "../assets/Frame2.svg";
import frame3 from "../assets/Frame3.svg";
import frame4 from "../assets/Frame4.svg";
import Image3 from "../assets/image3.svg";

import Footer from "./Footer";

const HomeExpertise = () => {
  return (
    <>
      <div className="container-fluid mx-auto mt-[140px]  md:px-[70px] lg:px-[100px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 hidden md:grid">
          <div>
            <img src={frame1} alt="frame1" className="w-full" />
          </div>
          <div>
            <img src={frame2} alt="frame2" className="w-full" />
          </div>
          <div>
            <img src={frame3} alt="frame3" className="w-full" />
          </div>
          <div>
            <img src={frame4} alt="frame4" className="w-full" />
          </div>
        </div>
        {/* Horizontal Scroll Carousel for small devices */}
        <div class="overflow-x-auto mt-[30px] sm:hidden px-2">
          <div class="flex space-x-[30px]">
            <div class="card flex-shrink-0">
              <img src={frame1} alt="frame1" />
            </div>
            <div class="card flex-shrink-0">
              <img src={frame2} alt="frame2" />
            </div>
            <div class="card flex-shrink-0">
              <img src={frame3} alt="frame3" />
            </div>
            <div class="card flex-shrink-0">
              <img src={frame4} alt="frame4" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 mt-[100px]">
          <div></div>

          <div className="col-start-2 col-span-3 ">
            <div className="max-w-[1200px] h-[100px]  mx-auto">
              <p className="lg:text-[18px] text-[18px] leading-[25px] text-[rgba(33,37,41,1)] font-[400px] lg:ps-[100px]  px-[20px] ">
                Leading the market for two decades, we have been experts in
                energy efficiency. With an unwavering commitment to innovation,
                we offer tailored solutions for projects of all sizes. From LED
                lighting to photovoltaic energy and electric mobility, our
                dedicated team works tirelessly to deliver cutting-edge results.
                We are committed to shaping a more sustainable and efficient
                energy future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  md:px-[70px] lg:px-[100px] bg-[rgba(244,244,244,1)] mt-[250px] pb-[20px]">
        <div className="grid grid-cols-1 lg:grid-cols-4   gap-[70px] 2xl:gap-[155px]">
          <div className="lg:w-full py-[100px] 2xl:py-0 px-[20px] 2xl:px-0  ">
            <img
              src={Image3}
              alt="image3"
              className="w-full object-cover 2xl:mt-[-100px] "
            />
          </div>
          <div className="lg:col-start-2 lg:col-span-3 flex flex-col gap-5  lg:mt-[100px] xl:mt-[153.5px] px-[20px] 2xl:px-0">
            <h2 className="text-[40px] font-[400px] leading-[48.4px]">
              Deep knowledge in the field
            </h2>
            <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] md:max-w-[787px] 2xl:max-w-[1100px]">
              Our extensive experience and deep expertise in the energy sector
              have positioned us as leaders in the industry. With two decades of
              market leadership, we have honed our knowledge in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to a level that sets us apart. Our team's profound
              understanding of these domains enables us to provide innovative,
              tailored solutions that not only meet but exceed the expectations
              of our clients.
            </p>

            <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] max-w-[150px] h-[25px] ">
              Learn more{" "}
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid   mt-[100px]   px-[20px] sm:px-[100px] ">
        <div className="max-w-[1200px] ">
          <h2 className="text-[40px] font-[400px] leading-[48.4px]">
            Get in touch with us
          </h2>
          <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] md:max-w-[787px] 2xl:max-w-[1100px]">
            If you're ready to explore how our expertise in energy efficiency,
            LED lighting, photovoltaic energy, and electric mobility can benefit
            your projects, don't hesitate to reach out. We're here to listen,
            collaborate, and provide you with tailored solutions that align with
            your specific needs and goals.
          </p>
          <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)] max-w-[150px] h-[25px] ">
            Contact us{" "}
            <span>
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default HomeExpertise;
