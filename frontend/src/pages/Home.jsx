import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from "../components/NewsLetterBox";


const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <LatestCollection></LatestCollection>
        <BestSeller></BestSeller>
        <OurPolicy></OurPolicy>
        <NewsLetterBox></NewsLetterBox>
      
    </div>
  )
}

export default Home

