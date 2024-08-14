"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./_components/Services";
import BusinessList from "./_components/BusinessList";
import CategoryList from "./_components/CategoryList";
import Contact from "./_components/Contact_home";
import Hero from "./_components/Hero";
import About from "./_components/About";
import GlobalApi from "./_services/GlobalApi";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  // Used to get all Categgory List

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  // Used to get all Business List

  const getAllBusinessList = () => {
    GlobalApi.getBusinessList().then((resp) => {
      setBusinessList(resp.businessLists);
    });
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title={"Best Cars"} />
      <Contact />
    </div>
  );
}
