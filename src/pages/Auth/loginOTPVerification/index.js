import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import OTPInput from '../../../components/Form/OTPInput';
import { colors } from '../../../constants';

const OTPVerification = () => {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState([]);
  const submitBtnRef = useRef();
  const navigate = useNavigate();

  const handleOtpChange=(value)=>{
    console.log("value",value);
    setOtp(value)
  }

  const handleSubmit = () => {
    const isInValid = otp?.length < 4;
    if (isInValid) {
      setError("Invalid mobile number");
    } else {
      navigate("/details")
    };
  };

  const isValidOtp = useCallback(() => {
    const filledOtpArray = otp?.filter((o) => o);
    const isValid = filledOtpArray?.length === 4;
    return isValid
  }, [otp]);

  const titleText = <h6 className='text-[22px] font-normal leading-6'>Welcome to <span className={`font-bold text-[${colors.yellowTitle}]`}>InCred Money</span></h6>;
  const userDetails = localStorage.getItem("user");
  const mobileNumber = JSON.parse(userDetails)?.mobileNumber;

  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!isValidOtp()} btnRef={submitBtnRef}>
            <div className='max-w-[400px] my-[20px] mx-auto'>
              <OTPInput error={error} onChange={handleOtpChange} verificationTo={`+91 ${mobileNumber}`}/>
            </div>
        </BannerForm>
      </div>
    </div>
  );
}

export default OTPVerification;

