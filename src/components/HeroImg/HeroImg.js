import React from 'react';
import landingPage from '../../assets/landing-page.jpg'
import mobLanding from '../../assets/landing-mob.png'
import './HeroImg.css'
import { Link } from 'react-router-dom';

export const HeroImg = () => {
  return (
      <>
    <div className="img-landing ">
    <Link to="/products">
    <img src={landingPage} alt="" className="img-landing-desktop normal-shadow"/>
    <img src={mobLanding} alt="" className="img-landing-mob normal-shadow"/>
  </Link>
  </div>
      </>
  )
}

