import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import { getImagePath } from '../../../utils';

const AboutUs = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const navigate = useNavigate();

  const yellowText = {
    color: "#F15D2A",
  };
  const subTitle = {
    fontWeight: '400',
    lineHeight: "26px",
  }
  const otpSection = {
    maxWidth: "400px",
    margin: "20px auto"
  };


  const activeIconStyle = {
    height: "10px",
    width: "13px",
    filter: "brightness(1)"
  }

  const pillStyle = {
    height: "53px",
  }
  const pillTextStyle = {
    fontWeight: "500",
    fontSize: "16px",
  }

  const sources = [
    {
      label: "Facebook/Instagram",
      value: "facebook/instagram"
    },
    {
      label: "Friend",
      value: "friend"
    },
    {
      label: "Google",
      value: "google"
    },
    {
      label: "LinkedIn",
      value: "linkedIn"
    },
    {
      label: "Youtube",
      value: "youtube"
    },
    {
      label: "News article/TV",
      value: "news article/tv"
    },
  ]

  const handleSelect = (selectObj) => {
    const { value } = selectObj;
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
    navigate("/invest-plan")
  };

  const userDetails = localStorage.getItem("user");
  const fullname = JSON.parse(userDetails)?.fullname;

  const titleText = <h6 style={subTitle} className="block md:hidden text-blue-700 font-normal">Hello <br /> <span className='font-extrabold' style={yellowText}>{fullname}{fullname && ","}</span></h6>;
  const subTitleText = <h6 className='text=[18px] md:text-[22px]' style={subTitle}>Where did you hear about us?</h6>;


  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!selectedSource}>
          <div>
            {subTitleText}

            <div style={otpSection}>
              <div className="flex flex-2 flex-wrap flex-auto -ml-4">
                {sources?.map((s) => {
                  const isSelected = selectedSource === s?.value;
                  return (
                    <div style={pillStyle} className={`ml-4 flex flex-grow items-center my-2 p-5 bg-gray-100 cursor-pointer ${isSelected ? `outline outline-1 outline-blue-800 rounded` : ``}`} onClick={() => handleSelect(s)}>
                      <img style={activeIconStyle} alt="" src={getImagePath(isSelected ? "checkIconActive.svg" : "checkIcon.svg")} />
                      <h6 className={`ml-3 mr-2 ${isSelected ? `text-blue-800` : `text-gray-400`}`} style={pillTextStyle}>{s?.label}</h6>
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


