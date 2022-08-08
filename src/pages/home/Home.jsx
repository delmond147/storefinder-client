import React from "react";
import SearchBar from "../../components/header/SearchBar";
import Team from "../team/Team";
import Carousel from "../../components/carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <SearchBar />
      <Team />
    </>
  );
}
