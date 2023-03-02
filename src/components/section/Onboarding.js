import React from 'react';
import { arrowDownDark, logo } from '../../assets/icons';

import Slider from 'react-slick';

import CustomizePayment from './CustomizePayment';
import TravelPackage from './TravelPackage';

const Onboarding = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    nextArrow: null,
    dotsClass: 'button__bar',
    arrows: false,
  };

  return (
    <section className="bg-off-white px-6 py-10 lg:p-10 overflow-y-scroll ">
      <article>
        <img className="h-8 w-28" src={logo} alt="travelbay's log" />
      </article>

      <div className="mt-8">
        <Slider {...settings}>
          <TravelPackage />
          <CustomizePayment />
        </Slider>
      </div>

      <div className="flex justify-center lg:hidden mt-12">
        <img src={arrowDownDark} alt="down arrow icon" />
      </div>
    </section>
  );
};

export default Onboarding;
