import React from "react";
import SearchBar from "../../components/header/SearchBar";
import Team from "../team/Team";
import CarouselContainer from "../../components/CarouselContainer";

export default function Home() {
  return (
    <>
      <CarouselContainer />
      <SearchBar />
      <Team />
    </>
  );
}
