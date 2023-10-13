import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';

const LoginMobile = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
  const titleText = <h6 style={subTitle}>Welcome to <span style={yellowText}>InCred Money</span></h6>


  return (
    <div className="p-5 flex flex-wrap md:flex md:p-0">
      <div className='w-full md:w-6/12	 h-1/2 md:h-screen' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12	 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next">
          <div className='relative'>
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              +91  &nbsp;|
            </div>
            <input value={mobileNumber} onChange={handleInputChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border-gray-200 rounded py-3 pl-16 leading-tight focus:outline focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Your Phone No." aria-describedby="basic-addon1" />
          </div>
          {error && <p class="mt-2 text-sm text-red-600 dark:text-red-500">{error}.</p>}
        </BannerForm>
      </div>
    </div>
  );
}

export default LoginMobile;
