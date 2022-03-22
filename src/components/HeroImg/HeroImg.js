import React from 'react';
import landingPage from '../../assets/landing-page.jpg'

const HeroImg = () => {
  return (
      <>
    <div class="img-landing ">
    <a href="/pages/product-page/product-page.html">
    <img src={landingPage} alt="" class="img-landing-desktop normal-shadow"/>
    <img src="/assets/landing-mob.png" alt="" class="img-landing-mob normal-shadow"/>
  </a>
  </div>
      </>
  )
}

export default HeroImg