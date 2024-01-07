import 'react'

import { useNavigate } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  let navigate = useNavigate();

  const routeChange = () => { 
    let path = '/login'; 
    navigate(path);
  }


  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      <div className='search'>
          <div className='search-container'>
            <h3 >Where are you going?</h3>
           </div>
          <div className='row-container'>

            <div className='search-container'>
              <h3>Check Hotels</h3>
            </div>
            <div className='search-container'>
              <h3>Check Attractions</h3>
            </div>

          </div>
          <div className='search-container'>
              <button
                className='hero-btn'
                onClick={routeChange}
              >
                Explore
              </button>
          </div>
      </div>
    </div>
  )
}

export default HeroSection;