import React from 'react'
import Footer from './Components/footer'
import Slider from './Components/slider'
import img from '../../images/uncle.png'

function Home() {
  return (
    <div>
      <Slider />
      {/* <div>
        <h1 className='text-center mt-5'>OUR SERVICES</h1>
        <p className='text-center mt-3 container' style={{ width: '50%' }} >With an outstanding track-record, we are equipped with hands-on team of Professional Consultants and Industry gurus on our Advisory Board.
          We take pride as a “broad-based consulting firm”, offering the following services:</p>
      </div> */}
      <div className="d-flex justify-content-center mt-5 mb-5 m-5">
        <div style={{ border: '1px solid black', backgroundColor: 'rgb(12, 63, 23)', width: '50%' }} className="image text-center p-5 text-white">
          <h3 style={{ fontSize: '1rem' }}>THE FUMICON GUARANTEE</h3><br />
          <h1 style={{ fontSize: '2rem' }}>WE’RE NOT HAPPY, UNTIL YOU’RE HAPPY.</h1><br />
          <p>With off-schedule return visits and a 30-day money back guarantee, partnering with Orkin means pest free peace of mind.</p>
        </div>

        <div style={{ backgroundColor: '#efeff0', width: '50%' }} className="image p-5 text-dark d-flex justify-content-between">
          <div>
            
          <h1 style={{ fontSize: '2rem' , color:'rgb(12, 63, 23)' }}>10K+</h1>
          <h1 style={{ fontSize: '1rem' }}>Industrial</h1><br />
          <h1 style={{ fontSize: '2rem' , color:'rgb(12, 63, 23)'}}>50K+</h1>
          <h1 style={{ fontSize: '1rem' }}>Commercial</h1><br />
          <h1 style={{ fontSize: '2rem' , color:'rgb(12, 63, 23)' }}>1M </h1>
          <h1 style={{ fontSize: '1rem' }}>Domestic</h1><br />
          </div>
          <div>
            <img style={{width:'10rem'}}  src={img} alt="" />
          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Home