import React, { useState } from 'react'
import "./Home.css"
import NavBar from './NavBar'
import FlashCard from './flashCard'
import Product from './Product'
import Category from './Category'
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom'

const Home = () => {
    const { id } = useParams();

    const [pid, setpid] = useState("");

    // console.log(id);
    return (
        <>

            <NavBar id={id} pid={pid} />
            <FlashCard />
            <Category />
            <Product id={id} setpid={setpid} />
            <Footer />
        </>
    )
}

export default Home