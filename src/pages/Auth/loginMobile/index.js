import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import MobileInput from '../../../components/Form/MobileInput';
import { colors } from '../../../constants';

const LoginMobile = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const number = e?.target?.value?.replace(/\D/g, "");
    const isInValid = number?.length > 10;
    if (!isInValid) {
      setMobileNumber(number);
      setError("");
    }
  };

  const handleSubmit = () => {
    const isInValid = mobileNumber?.length < 10;
    const isEmpty = mobileNumber?.length === 0;
    if (isInValid || isEmpty) {
      const errorMsg = isEmpty ? "Mobile number is required" : "Invalid mobile number";
      setError(errorMsg);
    } else {
      const user = { mobileNumber };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/verify-otp")
    };
  };
  const titleText = <h6 className='text-[22px] font-normal leading-6'>Welcome to <span className={`font-bold text-[${colors.yellowTitle}]`}>InCred Money</span></h6>


  return (
    <div className="p-5 flex flex-wrap md:flex md:p-0">
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next">
          <MobileInput type="number" value={mobileNumber} onChange={handleInputChange} error={error}/>
        </BannerForm>
      </div>
    </div>
  );
}

export default LoginMobile;
