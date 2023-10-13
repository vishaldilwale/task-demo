// import logo from './logo.svg';
// import './App.css';
// import  AuthBG  from '../../../assets/images/AuthBG.svg';
import { useEffect, useState } from 'react';
import { getImagePath } from '../../utils/index';

const BannerSlider=()=> {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides=[
        {
            img:getImagePath("assetImg.svg"),
            title:"₹ 1,185+ Crs ",
            subTitle:"Asset Under Management"
        },
        {
            img:getImagePath("defaultsImg.svg"),
            title:"0%",
            subTitle:"Defaults till date"
        },
        {
            img:getImagePath("returnsImg.svg"),
            title:"10%-12% XIRR ",
            subTitle:"Avg. Returns Earned"
        },
        {
            img:getImagePath("paymentsImg.svg"),
            title:"100%",
            subTitle:"On Time Payments"
        },
    ]
const sliderWrapper={
display:"flex",
// margin:"60px auto"
// width:"300px"
}
// const imgStyle={
//     height:"76px",
//     width:"76px",
//     marginRight:"20px"
// }
  const headerStyle={
    color: 'white',
// fontSize: "24px",
// fontFamily: 'Acumin Pro',
fontWeight: '700',
  }
  const subTitle={
    color: 'white',
// fontSize: "16px",
// fontFamily: 'Acumin Pro',
fontWeight: '400',
margin:"5px 0px",
// minWidth: "293px",
// width:"293px"
  };

 const sliderTextWrapper={
     margin:"auto 0 auto 20px",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 10 seconds (10,000 milliseconds)

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [slides?.length]);

//   return (
// <div className='mt-2 md:mt-7 relative' style={sliderWrapper}>

// {/* <div className='mt-2 md:mt-7' style={sliderWrapper}> */}
//         {/* <img alt="" className='m-auto h-11 w-11 md:h-16 md:w-16' src={slides[0]?.img}/> */}
//         <img alt="" className='h-11 w-11 md:h-16 md:w-16' src={slides[0]?.img}/>
//     <div style={sliderTextWrapper}>
//         <h6 style={headerStyle}>{slides[0]?.title}</h6>
//         <h6 style={subTitle}>{slides[0]?.subTitle}</h6>
//     </div>
//     </div>
// </div>
//   );
  return (
// {/* <div className="relative mt-9 md:mt-9 mb-36"> */}
// {/* <div className="relative mt-4 mb-36 m:mb-20 m:mt-5"> */}
// {/* <div className="relative mt-4 mb-5 md:mb-[20px] md:mt-12"> */}
<div className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* <h2 className="text-2xl font-bold">{slide.title}</h2>
          <p>{slide.subTitle}</p> */}
          <div className='flex'>
           <img alt="" className='h-11 w-11 md:h-20 md:w-20' src={slide?.img}/>
           <div style={sliderTextWrapper}>
        {/* <h6 className='' style={headerStyle}>{slide?.title}</h6> */}
        <h6 className='text-[16px] md:text-[24px]' style={headerStyle}>{slide?.title}</h6>
        {/* <h6 className='' style={subTitle}>{slide?.subTitle}</h6> */}
        <h6 className='text-[12px] md:text-[16px]' style={subTitle}>{slide?.subTitle}</h6>
     </div>
     </div>
        </div>
      ))}
    </div>
  );
}

export default BannerSlider;
