import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiCarWheel, GiNotebook } from "react-icons/gi";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary  group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "We Offer the Best Possible Price in the whole Town.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Bokking Process is Very easy.No need to woory about frauds as we are a trusted site.",
    aosDelay: "500",
  },
  {
    name: "On Road Assistance",
    icon: (
      <GiCarWheel className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "We provide the fastest on road road assistance in case of any problem in the vehicles.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center mt-10">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-primary duration-300 text-primary hover:text-black rounded-lg"
              >
                <div className="grid place-items-center hover:text-black ">
                  {skill.icon}
                </div>
                <h1 className="text-2xl font-bold ">{skill.name}</h1>
                <p className="">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
