import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import SelectablePills from '../../../components/SelectablePills';
import { hearAboutUsOptions } from '../../../constants/data';

const AboutUs = () => {
  const [selectedSource, setSelectedSource] = useState("");
  const navigate = useNavigate();

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

  const titleText = <h6 className="block md:hidden text-blue-700 text-[28px] font-normal leading-8">Hello <br /> <span className={`font-bold text-[#F15D2A]`}>{fullname}{fullname && ","}</span></h6>;
  const subTitleText = <h6 className='text-[18px] md:text-[22px] font-semibold md:font-normal'>Where did you hear about us?</h6>;

  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!selectedSource}>
          <div>
            {subTitleText}

            <div className="max-w-[400px] my-[20px] mx-auto">
                            <SelectablePills isInline options={hearAboutUsOptions} selected={selectedSource} handleSelect={handleSelect}/>
            </div>
          </div>
        </BannerForm>
      </div>
    </div>
  );
}

export default AboutUs;


