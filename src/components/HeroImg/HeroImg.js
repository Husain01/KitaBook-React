import React from 'react';
import landingPage from '../../assets/landing-page.jpg'
import mobLanding from '../../assets/landing-mob.png'
import './HeroImg.css'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
      <>
    <div class="img-landing ">
    <Link to="/products">
    <img src={landingPage} alt="" class="img-landing-desktop normal-shadow"/>
    <img src={mobLanding} alt="" class="img-landing-mob normal-shadow"/>
  </Link>
  </div>
      </>
  )
}

export default HeroImg