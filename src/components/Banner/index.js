// import logo from './logo.svg';
// import './App.css';
// import AuthBG from '../../../assets/images/AuthBG.svg';
import BannerSlider from '../../components/BannerSlider';
import { getImagePath } from '../../utils/index';

const Banner=()=> {
  const authWrapper = {
    // display: "flex",
    // flexDirection: "wrap",
    // minHeight: "100vh",
    margin:'auto'
  }
  const BannerStyle = {
    backgroundImage: `url(${getImagePath("AuthBG.svg")})`,
    // border:"2px solid red"
    // height:"300px"
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#283A97",
    // minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",

    // width:"100%", 
    // height:"100vh"

  };
  const bannerSection = {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // height: "100%",
  }
  const yellowText = {
    // color: "#FFA376",
    fontWeight: '700'
  };
  const headerStyle = {
    // color: 'white',
    // fontSize: "38px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '500',
    // minWidth: "293px",
    width: "293px",
    // lineHeight:"38px"
  }
  const subTitle = {
    color: 'white',
    // fontSize: "18px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '700',
    // margin: "20px 0px"
    // minWidth: "293px",
    // width:"293px"
  }
  const pillStyle = {
    // border: "1px solid white",
    border: "1px solid",
    // borderRadius: "30px",
    // color: "white",
    // fontSize: "14px",
    // // fontFamily: 'Acumin Pro',
    fontWeight: '400',
    // marginRight: "10px",
    // width: "fit-content",
    // padding: "2px 13px",
  };
  const pills = ["Senior Secured Bonds", "Listed", "Anytime Liquidity"];
  // className='text-sm mb-2 border-2 border-white rounded-full text-white px-3 py-1 mr-2'
  return (
    // <div style={authWrapper}>
    //   <div style={{width:"60%", maxWidth:"100%",...BannerStyle}} >
    //   {/* <div class="bg-auto sm:bg-cover w-full h-auto md:bg-contain lg:bg-auto xl:bg-cover w-3/5 h-full m-w-full" style={BannerStyle} > */}
    //   {/* <div style={BannerStyle} 
    //   // className="bg-contain bg-no-repeat md:(w-full h-full) sm:(w-screen h-auto) min-w-3/5 min-h-2/5"
    //   className="bg-contain bg-no-repeat w-1/5 h-screen"
    //   > */}
    //     </div>
    //   <div style={{width:"40%", maxWidth:"100%"}}> <h2 className="text-dark">Login</h2></div>

    // </div>
    //     <div class="grid gap-0">
    // <div class="grid-cols-6" style={{...BannerStyle}} ></div>
    // <div class="grid-cols-6" style={{...BannerStyle}} ></div>
    //     </div>
    // <div style={authWrapper}>
    <div className='h-auto md:h-screen'>
      <div className='h-[240px] md:h-screen mt-12 md:mt-0 items-start md:items-center' style={{ ...BannerStyle }} >
        {/* <div className="px-4 py-2 md:p-0" style={bannerSection}> */}
        <div className="px-4 py-2 md:p-0 mt-0 md:-mt-12">
          {/* <div style={{ margin: "auto" }}> */}
            {/* <h1 style={headerStyle}>Earn <span className='text-white md:text-[#FFA376]' style={yellowText} >10-12% p.a. </span>
              fixed returns</h1> */}
            <h1 className="text-white text-[28px] md:text-[38px] leading-7 md:leading-9" style={headerStyle}>Earn <span className='text-white md:text-[#FFA376]' style={yellowText} >10-12% p.a. </span>
              fixed returns</h1>
            <div>
              <h4 className="mt-2 text-white font-bold hidden md:block text-[13px] md:text-[18px] md:mt-8">Start with minimum ₹10,000 </h4>
              {/* <div className="my-1 md:my-5" style={{ display: "flex", margin: "20px 0px", flexWrap:"wrap" }}> */}
              <div className="mt-4 mb-2 md:my-5" style={{ display: "flex", flexWrap:"wrap" }}>
                {/* {pills.map((p) => { return <p className='mb-2' style={pillStyle}>{p}</p> })} */}
                {pills.map((p) => { return <p style={pillStyle} className='h-[18px] text-[10px] mb-2 rounded-full px-3 py-0 mr-2 bg-white text-blue-600 md:border-2 md:border-white md:text-white md:bg-transparent md:text-[14px] md:h-[32px] md:py-1'>{p}</p> })}
              </div>
              <h4 className="mt-2 text-white font-bold block md:hidden text-[13px] md:text-[18px]">Start with minimum ₹10,000 </h4>
            </div>

            <div className='mt-4 mb-5 md:mb-[20px] md:mt-12'>
            <BannerSlider/>

            </div>
            {/* <BannerSlider/> */}
          {/* </div> */}
        </div>
      </div>
     </div>
  );
}

export default Banner;
