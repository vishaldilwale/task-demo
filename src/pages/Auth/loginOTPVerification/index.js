import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';

const OTPVerification = () => {
  const [error, setError] = useState("");
  const [otp, setOtp] = useState([]);
  const [activeInput, setActiverInput] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const digit1Ref = useRef();
  const digit2Ref = useRef();
  const digit3Ref = useRef();
  const digit4Ref = useRef();
  const submitBtnRef = useRef();
  const navigate = useNavigate();
  const refs = {
    "1": digit1Ref,
    "2": digit2Ref,
    "3": digit3Ref,
    "4": digit4Ref,
    "5": submitBtnRef,
  }

  const yellowText = {
    color: "#F15D2A",
    fontWeight: '700'
  };
  const subTitle = {
    fontSize: "22px",
    fontWeight: '400',
    lineHeight: "26px",
    margin: "60px 0px 30px 0px"
  }
  const boldText = {
    fontSize: "14px",
    fontWeight: '700',
    lineHeight: "16px",
  }
  const otpSection = {
    display: "flex",
    alignItems: "center",
    maxWidth: "400px",
    margin: "20px auto 5px auto"
  }
  const resendBtnStyle = {
    fontSize: "14px",
    fontWeight: '400',
    lineHeight: "16.8px",
  }

  const handleInputChange = (e, index) => {
    e.preventDefault();
    const otpValue = e?.target?.value?.replace(/\D/g, "");
    const isSingleDigit = otpValue?.length === 1;
    const isDeleteAction = otpValue?.length === 0;
    if (isSingleDigit) {
      let newArray = [...otp];
      newArray[index] = otpValue;
      setOtp(newArray);
      const nextInputToFocus = activeInput < 4 ? activeInput + 1 : 4;
      if (nextInputToFocus) {
        refs[nextInputToFocus].current.focus();
        setActiverInput(nextInputToFocus)
      }

    } else if (isDeleteAction) {
      let newArray = [...otp];
      newArray[index] = otpValue;
      setOtp(newArray);
    }
  };

  const handleSubmit = () => {
    const isInValid = otp?.length < 4;
    if (isInValid) {
      setError("Invalid mobile number");
    } else {
      navigate("/details")
    };
  };
  const titleText = <h6 style={subTitle}>Welcome to <span style={yellowText}>InCred Money</span></h6>;
  const otpLength = 4;
  const userDetails = localStorage.getItem("user");
  const mobileNumber = JSON.parse(userDetails)?.mobileNumber;


  useEffect(() => {
    digit1Ref.current.focus();
    return () => {
      setBtnDisabled(false);
      setCountdown(30);
    };
  }, []);

  const isValidOtp = useCallback(() => {
    const filledOtpArray = otp?.filter((o) => o);
    const isValid = filledOtpArray?.length === 4;
    return isValid
  }, [otp]);

  const handleResendOtp = () => {
    if (!btnDisabled) {
      setBtnDisabled(true);
      const timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        setBtnDisabled(false);
        setCountdown(30);
      }, 30000);
    }
  };

  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next" disabled={!isValidOtp()} btnRef={submitBtnRef}>
          <div>
            <p className="mt-4">We have sent a verification code to <span style={boldText}>+91 {mobileNumber}</span></p>
            <div style={otpSection}>
              {Array.from(Array(otpLength).keys())?.map((i, index) => {
                return (
                  <input name={index} value={otp[index] || ""} onChange={(e) => handleInputChange(e, index)}
                    ref={refs[index + 1]}
                    className="mr-8 appearance-none block w-14 h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="" />
                )
              })}
            </div>
            <div className='text-end mr-11'>
              <button disabled={btnDisabled} onClick={() => handleResendOtp()} style={resendBtnStyle} type='button'
                className='text-orange-500 border-0 border-b-2 border-[#F15D2A] disabled:text-gray-400 disabled:border-gray-400 '>Resend OTP {btnDisabled && countdown}</button>
            </div>
          </div>
          {error && <p class="mt-2 text-sm text-red-600 dark:text-red-500">{error}.</p>}
        </BannerForm>
      </div>
    </div>
  );
}

export default OTPVerification;

