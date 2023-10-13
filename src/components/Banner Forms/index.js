// import logo from './logo.svg';
// import './App.css';
// import AuthBG from '../../../assets/images/AuthBG.svg';
import { useRef } from 'react';
import BannerSlider from '../../components/BannerSlider';
import { getImagePath } from '../../utils/index';

const BannerForm=(props)=> {
  const {title,onSubmit, btnText, error, btnRef = ()=>{}, disabled=false, children}=props;
  const loginSectionStyle = {
    // width: "365px", 
    // margin: "auto", 
    // height: "100vh", 
    display: "flex", 
    flexDirection: "column", 
    // margin:"25% auto 0px auto"
    margin:"auto",
    justifyContent: "center", 
    // alignItems: "center"
  }
  const logoStyle = {
    // height: "73px",
    // width: "181px",
  }
  const yellowText = {
    color: "#F15D2A",
    fontWeight: '700'
  };
  const subTitle = {
    fontSize: "22px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '400',
    lineHeight: "26px",
    margin: "60px 0px 30px 0px"
  }
  const infoText = {
    // fontSize: "12px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '300',
    lineHeight: "16px",
    margin: "70px 0px 20px 0px",
    // width:"365px",
    // maxWidth:"1%"
  }
  const linkText = {
    fontSize: "12px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '300',
    lineHeight: "16px",
    margin: "20px 0px",
    color: "#0051D3",
    textDecoration: "underline"
  };
  return (
    // <div className='h-fit md:h-screen' style={loginSectionStyle}>
    <div className='h-auto md:h-screen' style={loginSectionStyle}>
      <div className='m-auto w-[100%] md:w-[365px]'>
            <div>
            {/* <img className='w-30 h-20 absolute md:relative top-0 left-0' alt="" style={logoStyle} src={getImagePath("InCredMoneyLogo.svg")} /> */}
            {/* <img className='absolute md:relative top-0 left-0 ' alt="" style={logoStyle} src={getImagePath("InCredMoneyLogo.svg")} /> */}
            <img className='absolute md:relative top-[10px] left-[13px] left-0 h-[49px] w-[120px] md:h-[73px] md:w-[181px] md:top-[0px] md:left-[0px]' alt="" src={getImagePath("InCredMoneyLogo.svg")} />
            </div>
            {/* <div className="w-[80%] md:max-w-full md:w-[365px]" style={{ width: "365px", maxWidth:"88%" }}> */}
            {/* <div className="w-[80%] md:max-w-full md:w-[365px]"> */}
            {/* <div className="mb-12 w-[365px] max-w-fit md:max-w-full md:mb-0"> */}
            {/* <div className="mb-12 w-[365px] max-w-[88%] md:max-w-full md:mb-0"> */}
            {/* <div className="mb-12 w-[365px] max-w-[100%] md:max-w-full md:mb-0"> */}
            <div className="mb-12 md:mb-0">
              <h6 style={subTitle}>
                {/* Welcome to <span style={yellowText}>InCred Money</span> */}
                {title}
                </h6>
              {/* <div className='relative'>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  +91  &nbsp;|
                </div>
                <input value={mobileNumber} onChange={handleInputChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border-gray-200 rounded py-3 pl-16 leading-tight focus:outline focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Your Phone No." aria-describedby="basic-addon1" />
              </div>
              {error && <p class="mt-2 text-sm text-red-600 dark:text-red-500">{error}.</p>} */}
              {children}
              {/* <div className='w-12/14 md:w-fit m-auto absolute inset-x-0 bottom-5 md:relative'> */}
              {/* <div className='w-12/14 md:w-[365px] m-auto absolute inset-x-0 bottom-5 md:relative'> */}
              <div className='pb-5 w-[365px] max-w-[88%] md:max-w-full m-auto absolute inset-x-0 bottom-1 md:relative md:p-0'>
              {/* <p style={infoText}>By proceeding, I accept the <span style={linkText}><a href="/">Terms & Conditions</a></span>, and agree to receive messages such as OTPs & important updates on WhatsApp.</p> */}
              <p className="text-[10.5px] text-gray-500 md:text-[12px] md:text-gray-700" style={infoText}>By proceeding, I accept the <span style={linkText}><a href="/">Terms & Conditions</a></span>, and agree to receive messages such as OTPs & important updates on WhatsApp.</p>
              <button
                type="button"
                disabled={disabled}
                ref={btnRef}
                onClick={()=>onSubmit()}
                // className="inline-block w-full bg-red px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-black hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                // className="disabled:text-white-500 disabled:bg-violet-200 disabled:outline-none w-full bg-blue-700	text-white rounded border-2 px-2 py-3 text-sm hover:bg-blue-800 focus:outline-none font-medium text-center"
                // className="disabled:text-white-500 disabled:bg-violet-200 disabled:outline-none w-full bg-blue-700	text-white rounded px-2 py-3 text-sm hover:bg-blue-800 focus:outline-none font-medium text-center"
                className="disabled:text-white-500 disabled:bg-violet-200 disabled:outline-none w-full bg-blue-700	text-white rounded px-2 py-3 text-sm hover:bg-blue-800 focus:outline-none font-medium text-center"
              >
                {btnText}
              </button>
              </div>
            </div>
        </div>
        </div>
  );
}

export default BannerForm;
