// import logo from './logo.svg';
// import './App.css';
// import AuthBG from '../../../assets/images/AuthBG.svg';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import BannerSlider from '../../../components/BannerSlider';
import { getImagePath } from '../../../utils';

const InvestDetails = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authWrapper = {
    display: "flex",
    flexDirection: "wrap",
    minHeight: "100vh"
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

  const investOptions=[
    {
      label:"Less than ₹1 Lakh",
      value:"1"
    },
    {
      label:"₹1-5 Lakh",
      value:"1-5"
    },
    {
      label:"More than ₹5 Lakh",
      value:"5"
    },
  ]

  const handleSelect = (selectObj) => {
  const {value}= selectObj;
  setSelectedOption(value);
  };

  const handleSubmit = () => {
    console.log("selectedtSources", selectedOption);
    alert("Success")
    navigate("/")
  };

  const userDetails = localStorage.getItem("user");
  const fullname = JSON.parse(userDetails)?.fullname;

  const titleText = <h6 style={subTitle} className="block md:hidden">Hello <br/> <span style={yellowText}>{fullname}{fullname && ","}</span></h6>;
  const subTitleText = <h6 style={subTitle}>How much do you plan to invest?</h6>;


  return (
    // <div style={authWrapper}>
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      {/* <div style={{ width: "60%", maxWidth: "100%" }} > */}
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      {/* <div style={{ width: "40%", maxWidth: "100%" }} > */}
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!selectedOption}>
          <div>
         {subTitleText}
            <div style={otpSection}>        
              {/* {error?.email && errorComponent(error?.email)} */}
              <div className="flex flex-wrap flex-grow">
                {investOptions?.map((s)=>{
                  const isSelected = selectedOption === s?.value;
                  return(
                    <div style={pillStyle} className={`flex items-center mr-0 my-2 p-5 w-full bg-gray-100 flex-grow cursor-pointer ${isSelected ? `outline outline-1 outline-blue-800 rounded` : `` }`} onClick={()=>handleSelect(s)}>
                    <img style={activeIconStyle} alt="" src={getImagePath(isSelected ? "checkIconActive.svg" : "checkIcon.svg")}/>
                    <h6 className={`ml-3 mr-2 ${isSelected? `text-blue-600`: `text-gray-400`}`} style={pillTextStyle}>{s?.label}</h6>
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

export default InvestDetails;


