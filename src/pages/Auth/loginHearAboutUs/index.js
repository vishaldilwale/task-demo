// import logo from './logo.svg';
// import './App.css';
// import AuthBG from '../../../assets/images/AuthBG.svg';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import BannerSlider from '../../../components/BannerSlider';
import { getImagePath } from '../../../utils';

const AboutUs = () => {
  const [allSources, setAllSources] = useState([]);
  const [selectedSource, setSelectedSource] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authWrapper = {
    display: "flex",
    flexDirection: "wrap",
    minHeight: "100vh"
  }
  const yellowText = {
    color: "#F15D2A",
    // fontWeight: '700'
  };
  const subTitle = {
    // fontSize: "22px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '400',
    lineHeight: "26px",
    // margin: "60px 0px 30px 0px"
  }
  const boldText = {
    fontSize: "14px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '700',
    lineHeight: "16px",
  }
  const otpSection = {
    // display: "flex",
    // alignItems:"center",
    // justifyContent:"space-between",
    maxWidth: "400px",
    margin: "20px auto"
  };

  const checkIconStyle = { 
    height:"10px",
    width:"13px" 
  }
  const activeIconStyle = { 
    height:"10px",
    width:"13px",
    filter:"brightness(1)"
  }

  const pillStyle = { 
    height:"53px",
    // textAlign:"center",
    // margin:"10px 10px 0px",
    // display:"flex",
    // alignItems:"center",
    // padding: "15px",
    // width: "fit-content",
    // border:"1px solid"
  }
  const pillTextStyle = { 
    fontWeight:"500",
    fontSize:"16px",
  }

  const sources=[
    {
      label:"Facebook/Instagram",
      value:"facebook/instagram"
    },
    {
      label:"Friend",
      value:"friend"
    },
    {
      label:"Google",
      value:"google"
    },
    {
      label:"LinkedIn",
      value:"linkedIn"
    },
    {
      label:"Youtube",
      value:"youtube"
    },
    {
      label:"News article/TV",
      value:"news article/tv"
    },
  ]

  const handleSelect = (selectObj) => {
  const {value}= selectObj;
  setSelectedSource(value);

  // const isExists = selectedSources.find((s)=>s === value);
  // console.log("isExists",isExists,"selectObj",selectObj,"selectedSources",selectedSources);
  // // console.log("isExists",isExists)
  // if(isExists){
  //   const filteredSources = selectedSources.filter((s)=>s !== value);
  //   setSelectedSources(filteredSources);
  //   console.log("filteredSources",filteredSources)
  // }else{
  //   setSelectedSources([...selectedSources,value]);
  // }
  };

  const handleSubmit = () => {
    console.log("selectedtSources", selectedSource);
    navigate("/invest-plan")
  };

  const userDetails = localStorage.getItem("user");
  const fullname = JSON.parse(userDetails)?.fullname;

  const titleText = <h6 style={subTitle} className="block md:hidden text-blue-700 font-normal">Hello <br/> <span className='font-extrabold' style={yellowText}>{fullname}{fullname && ","}</span></h6>;
  const subTitleText = <h6 className='text=[18px] md:text-[22px]' style={subTitle}>Where did you hear about us?</h6>;


  return (
    // <div style={authWrapper}>
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      {/* <div style={{ width: "60%", maxWidth: "100%" }} > */}
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      {/* <div style={{ width: "40%", maxWidth: "100%" }} > */}
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!selectedSource}>
          <div>
          {subTitleText}

            <div style={otpSection}>
        
              {/* {error?.email && errorComponent(error?.email)} */}
              {/* <div className="flex flex-wrap flex-grow"> */}
              <div className="flex flex-2 flex-wrap flex-auto -ml-2">
                {sources?.map((s)=>{
                  const isSelected = selectedSource === s?.value;
                  return(
                    // {/* <div style={pillStyle} className={`flex items-center my-2 p-5 w-min bg-gray-100 grow flex-grow cursor-pointer ${isSelected ? `outline outline-1 outline-blue-800 rounded` : `` }`} onClick={()=>handleSelect(s)}> */}
                    <div style={pillStyle} className={`ml-2 flex flex-grow items-center my-2 p-5 bg-gray-100 cursor-pointer ${isSelected ? `outline outline-1 outline-blue-800 rounded` : `` }`} onClick={()=>handleSelect(s)}>
                    <img style={activeIconStyle} alt="" src={getImagePath(isSelected ? "checkIconActive.svg" : "checkIcon.svg")}/>
                    <h6 className={`ml-3 mr-2 ${isSelected ? `text-blue-800`: `text-gray-400`}`} style={pillTextStyle}>{s?.label}</h6>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </BannerForm>
      </div>
    </div>
  );
}

export default AboutUs;


