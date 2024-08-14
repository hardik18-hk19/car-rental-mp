import React from "react";
import CarPng from "../../assets/pngtree-red-classic-car-png-image_6609251.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="dark:bg-dark h-screen w-full sm:grid sm:place-items-center duration-300">
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center h-full">
          <div data-aos="slide-right" data-aos-duration="1500">
            <Image
              src={CarPng}
              alt="Car Image"
              className="sm:scale-15 sm:-translate-x-11 max-h-[350px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                At Our Car Rentals, we pride ourselves on offering a diverse
                fleet of vehicles to meet the unique needs of our clients. From
                compact cars perfect for city driving to luxurious sedans for
                business travel and spacious SUVs for family vacations, we have
                it all. Our extensive selection ensures that no matter the
                occasion, we have the right vehicle to make your journey
                comfortable and enjoyable.
              </p>
              <p data-aos="fade-up" className=" tracking-wide  ">
                WE ARE BEST IN THE BUSINESS !!!
              </p>
              {/* <p data-aos="fade-up" className="button-outline"></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
