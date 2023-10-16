import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import SelectablePills from '../../../components/SelectablePills';
import { investOptions } from '../../../constants/data';

const InvestDetails = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSelect = (selectObj) => {
    const { value } = selectObj;
    setSelectedOption(value);
  };

  const handleSubmit = () => {
    alert("Success")
    navigate("/")
  };

  const userDetails = localStorage.getItem("user");
  const fullname = JSON.parse(userDetails)?.fullname;

  const titleText = <h6 className="block md:hidden text-blue-700 text-[28px] font-normal leading-8 mt-10 mb-8 md:mb-0">Hello <br /> <span className={`font-bold text-[#F15D2A]`}>{fullname}{fullname && ","}</span></h6>;
  const subTitleText = <h6 className='text-[18px] md:text-[22px] font-semibold md:font-normal'>How much do you plan to invest?</h6>;

  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!selectedOption}>
          <div>
            {subTitleText}
            <div className='max-w-[400px] my-[20px] mx-auto'>
              <SelectablePills options={investOptions} selected={selectedOption} handleSelect={handleSelect}/>
            </div>
          </div>
        </BannerForm>
      </div>
    </div>
  );
}
export default InvestDetails;


