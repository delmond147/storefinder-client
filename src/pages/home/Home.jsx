import React from 'react';
// import SearchBar from '../../components/header/SearchBar';
import Team from '../team/Team';
import Carousel from '../../components/carousel/Carousel';
import Header from '../../components/Header';

export default function Home() {
  return (
    <>
      <Carousel />
      {/* <SearchBar /> */}
      <Header />
      <Team />
    </>
  );
}
