import { useEffect, useState } from 'react';
import { bannerSlides } from '../../constants/data';

const BannerSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerSlides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className='flex'>
            <img alt="" className='h-11 w-11 md:h-20 md:w-20' src={slide?.img} />
            <div className='my-auto ml-[20px] mr-0'>
              <h6 className='text-[16px] md:text-[24px] text-white font-bold'>{slide?.title}</h6>
              <h6 className='text-[12px] md:text-[16px] text-white font-normal my-[5px]'>{slide?.subTitle}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerSlider;
