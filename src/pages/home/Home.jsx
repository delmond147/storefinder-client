import React from "react";
import Carousel from "../../components/carousel/Carousel";
import SearchBar from "../../components/header/SearchBar";
import Team from "../team/Team";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <SearchBar />
      <Team />
      <Footer />
    </>
  );
}
