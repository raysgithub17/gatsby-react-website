import * as React from "react"
import Navbar from "../components/common/navbar"
import Box from "../components/homePage/Box"
import Slider from "../components/homePage/Slider"
import CardBox from "../components/homePage/CardBox"
import Footer from "../components/common/Footer"

const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Box/>
      <Slider/>
      <CardBox/>
      <Footer/>
    </>
  )
}

export default IndexPage


