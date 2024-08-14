import { FaSearch } from "react-icons/fa";
import { Button } from "/components/ui/button";
import { Input } from "/components/ui/input";
import { Search, SearchIcon } from "lucide-react";
import CarLeft from "../../Assets/pngtree-yellow-car-side-view-flat-style-vector-png-image_6561005.png";
import CarRight from "../../Assets/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.webp";
import CarBottom from "../../Assets/pngtree-car-back-vector-png-image_6450939.png";
import CarTop from "../../Assets/pngimg.com - chrysler_PNG14.png";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div
      className="flex items-center gap-3 flex-col justify-center pt-14 pb-7 "
      id="Hero"
    >
      <h2 className="font-bold text-[46px] text-center">
        Find<span className="text-primary"> Rental Cars</span> <br></br>
        Near You
      </h2>
      <h2 className="text-xl text-gray-400 items-center">
        Explore Best Rental Cars & Services near you.{" "}
      </h2>
      {/* <div className="mt-4 flex gap-4 items-center">
        <Input
          placeholder="  Search"
          className="rounded-full md:w-[350px] border outline-0 h-7 ml-1"
        />
        {/* <Button className="rounded-full h-[35px] w-[30px] flex items-center bg-primary  ">
          {/* Search is an lucide react icon }
          <FaSearch className=" text-white h-5" />
        </Button> }
      </div> */}
      <div className="hidden md:flex flex-row justify-between mt-8">
        <Image
          src={CarTop}
          data-aos="fade-up"
          data-aos-delay="700"
          height={250}
          width={250}
        />{" "}
        <Image
          src={CarRight}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          height={250}
          width={250}
        />
        <Image
          src={CarLeft}
          data-aos="fade-left"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
          data-aos-delay="600"
          height={250}
          width={250}
        />
        <Image
          src={CarBottom}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="700"
          height={250}
          width={250}
        />
      </div>
    </div>
  );
}

export default Hero;
