import { useEffect, useState } from 'react';
import { getImagePath } from '../../utils/index';

const BannerSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: getImagePath("assetImg.svg"),
      title: "₹ 1,185+ Crs ",
      subTitle: "Asset Under Management"
    },
    {
      img: getImagePath("defaultsImg.svg"),
      title: "0%",
      subTitle: "Defaults till date"
    },
    {
      img: getImagePath("returnsImg.svg"),
      title: "10%-12% XIRR ",
      subTitle: "Avg. Returns Earned"
    },
    {
      img: getImagePath("paymentsImg.svg"),
      title: "100%",
      subTitle: "On Time Payments"
    },
  ]

  const headerStyle = {
    color: 'white',
    fontWeight: '700',
  }
  const subTitle = {
    color: 'white',
    fontWeight: '400',
    margin: "5px 0px",
  };

  const sliderTextWrapper = {
    margin: "auto 0 auto 20px",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides?.length]);

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className='flex'>
            <img alt="" className='h-11 w-11 md:h-20 md:w-20' src={slide?.img} />
            <div style={sliderTextWrapper}>
              <h6 className='text-[16px] md:text-[24px]' style={headerStyle}>{slide?.title}</h6>
              <h6 className='text-[12px] md:text-[16px]' style={subTitle}>{slide?.subTitle}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerSlider;
