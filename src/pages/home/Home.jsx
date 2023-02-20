import React from 'react'
import Footer from './Components/footer'
import Gurantee from './Components/gurantee'
import ImgSlider from './Components/imgSlider'
import Slider from './Components/slider'

function Home() {
  return (
    <div>
      <Slider />
      <Gurantee/>
      <ImgSlider/>
      <Footer />
    </div>
  )
}

export default Home