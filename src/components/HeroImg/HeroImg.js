import React from 'react';
import landingPage from '../../assets/landing-page.jpg'
import mobLanding from '../../assets/landing-mob.png'
import './HeroImg.css'

const HeroImg = () => {
  return (
      <>
    <div class="img-landing ">
    <a href="/pages/product-page/product-page.html">
    <img src={landingPage} alt="" class="img-landing-desktop normal-shadow"/>
    <img src={mobLanding} alt="" class="img-landing-mob normal-shadow"/>
  </a>
  </div>
      </>
  )
}

export default HeroImg