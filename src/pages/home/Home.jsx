import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import SearchBar from '../../components/header/SearchBar'
import Category from '../category/Category'
import Team from '../team/Team'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import StoreListing from '../../components/StoreListing';
import {Alert} from 'react-bootstrap'

export default function Home({ docs }) {
    return (
        <>
            <Navbar />
            <Carousel />
            <SearchBar />
            <Category />
            {docs ? <StoreListing /> : <Alert variant="danger">No stores available at this moment</Alert>}
            <Team />
            <Footer />
        
        </>
    )
}
