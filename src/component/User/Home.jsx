import React from 'react'
import "./Home.css"
import NavBar from './NavBar'
import FlashCard from './flashCard'
import Product from './Product'
import Category from './Category'
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom'

const Home = () => {
    const { id } = useParams();

    // console.log(id);
    return (
        <>

            <NavBar id={id}/>
            <FlashCard/>
            <Category/>
            <Product/>
            <Footer/>
        </>
    )
}

export default Home