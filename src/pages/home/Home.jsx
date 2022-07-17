import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import SearchBar from '../../components/header/SearchBar'
import Category from '../category/Category'
import Team from '../team/Team'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Stores from '../../components/Stores';


export default function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <SearchBar />
            <Category />
            <Stores /> 
            <Team />
            <Footer />
        
        </>
    )
}
