import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

const OTPInput = forwardRef(function(props, ref) {
    const {onChange,otpLength=4,verificationTo="",focus=true,error,}=props;
    const [otp, setOtp] = useState([]);
    const [activeInput, setActiverInput] = useState(1);

    const [btnDisabled, setBtnDisabled] = useState(false);
    const [countdown, setCountdown] = useState(30);
   
    const digit1Ref = useRef();
    const digit2Ref = useRef();
    const digit3Ref = useRef();
    const digit4Ref = useRef();
    const submitBtnRef = useRef();
    const refs = {
      "1": digit1Ref,
      "2": digit2Ref,
      "3": digit3Ref,
      "4": digit4Ref,
      "5": submitBtnRef,
    }
      const errorComponent = useCallback((msg = "") => (
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">{msg}.</p>
      ), []);

      const otpSection = {
        display: "flex",
        alignItems: "center",
        maxWidth: "400px",
        margin: "20px auto 5px auto"
      };
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
          onChange(newArray)
          const nextInputToFocus = activeInput < 4 ? activeInput + 1 : 4;
          if (nextInputToFocus) {
            refs[nextInputToFocus].current.focus();
            setActiverInput(nextInputToFocus)
          }
    
        } else if (isDeleteAction) {
          let newArray = [...otp];
          newArray[index] = otpValue;
          setOtp(newArray);
          onChange(newArray)
        }
      };

      useEffect(() => {
        focus && digit1Ref.current.focus();
        return () => {
          setBtnDisabled(false);
          setCountdown(30);
        };
      }, []);
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
        <div>
              <div>
            <p className="mt-4 text-sm leading-4">We have sent a verification code to <span className="font-bold">{verificationTo}</span></p>
            <div style={otpSection}>
              {Array.from(Array(otpLength).keys())?.map((i, index) => {
                return (
                  <input name={index} value={otp[index] || ""} onChange={(e) => handleInputChange(e, index)}
                    ref={refs[index + 1]}
                    className="mr-8 appearance-none block w-14 h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="" />
                )
              })}
            </div>
            <div className='text-end mr-9'>
              <button disabled={btnDisabled} onClick={() => handleResendOtp()} style={resendBtnStyle} type='button'
                className='text-orange-500 border-0 border-b-2 border-[#F15D2A] disabled:text-gray-400 disabled:border-gray-400 '>Resend OTP {btnDisabled && countdown}</button>
            </div>
          </div>
          {error && errorComponent(error)}
        </div>
    );
  })

export default OTPInput;
