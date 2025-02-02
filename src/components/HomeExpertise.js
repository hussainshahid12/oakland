import React from "react";
import frame1 from "../assets/Frame1.svg";
import frame2 from "../assets/Frame2.svg";
import frame3 from "../assets/Frame3.svg";
import frame4 from "../assets/Frame4.svg";
import Image3 from "../assets/image3.svg";

const HomeExpertise = () => {
  return (
    <>
      <div className="container mx-auto mt-[122px] ">
        <div className="grid grid-cols-1 gap-y-[30px] px-[5px]  md:text-start text-center md:ps-[50px] xl:ps-[0px] ">
          <h2 className=" text-[40px] font-[400px]">Areas of Expertise</h2>
          <p className="text-[18px]  max-w-[757px] leading-[25px] text-[rgba(33,37,41,1)]">
            Whether for small or large-scale projects, we are committed to
            delivering cutting-edge results, contributing to a more sustainable
            and innovative energy future.
          </p>
        </div>
        <div class="mt-[30px]">
          {/* Grid Layout for medium and larger screens  */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[30px] gap-x-[30px p-4 justify-items-center xl:ms-[-70px] hidden md:grid">
            <div class="card text-center flex justify-center items-center p-4">
              <img src={frame1} alt="frame1" />
            </div>
            <div class="card text-center flex justify-center items-center p-4">
              <img src={frame2} alt="frame1" />
            </div>
            <div class="card text-center flex justify-center items-center p-4">
              <img src={frame3} alt="frame1" />
            </div>
            <div class="card text-center flex justify-center items-center p-4">
              <img src={frame4} alt="frame1" />
            </div>
          </div>

          {/* Horizontal Scroll Carousel for small devices */}
          <div class="overflow-x-auto mt-[30px] sm:hidden px-2">
            <div class="flex space-x-[30px]">
              <div class="card flex-shrink-0">
                <img src={frame1} alt="frame1" />
              </div>
              <div class="card flex-shrink-0">
                <img src={frame2} alt="frame1" />
              </div>
              <div class="card flex-shrink-0">
                <img src={frame3} alt="frame1" />
              </div>
              <div class="card flex-shrink-0">
                <img src={frame4} alt="frame1" />
              </div>
            </div>
          </div>
        </div>
        {/* End of Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-[100px]">
          <div></div>

          <div className="col-start-2 col-span-2 lg:max-w-[950px] w-full">
            <p className="lg:text-[18px] text-[18px] leading-[25px] text-[rgba(33,37,41,1)] font-[400px] lg:ps-[100px]  px-[20px] ">
              Leading the market for two decades, we have been experts in energy
              efficiency. With an unwavering commitment to innovation, we offer
              tailored solutions for projects of all sizes. From LED lighting to
              photovoltaic energy and electric mobility, our dedicated team
              works tirelessly to deliver cutting-edge results. We are committed
              to shaping a more sustainable and efficient energy future.
            </p>
          </div>
        </div>
      </div>

      <div className="conatiner-fluid bg-[rgba(244,244,244,1)] mt-[200px]">
        <div className=" container grid grid-cols-1 lg:grid-cols-3 mx-auto">
          <div>
            <img src={Image3} alt="image3" className="max-w-[380]" />
          </div>

          <div className="mt-[153.5px] col-start-2 col-span-2 lg:max-w-[787px] w-full">
            <h2 className=" text-[40px] font-[400px] leading-[48.4px]">
              Deep knowledge in the field
            </h2>
            <p className="mt-[40px] text-[18px] leading-[25px] text-[rgba(66,70,73,1)]">
              Our extensive experience and deep expertise in the energy sector
              have positioned us as leaders in the industry. With two decades of
              market leadership, we have honed our knowledge in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to a level that sets us apart. Our team's profound
              understanding of these domains enables us to provide innovative,
              tailored solutions that not only meet but exceed the expectations
              of our clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExpertise;
