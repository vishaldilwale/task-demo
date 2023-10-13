// import logo from './logo.svg';
// import './App.css';
// import AuthBG from '../../../assets/images/AuthBG.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import BannerSlider from '../../../components/BannerSlider';
import { getImagePath } from '../../../utils';

const LoginMobile = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const authWrapper = {
    display: "flex",
    flexDirection: "wrap",
    minHeight: "100vh"
  }
  const loginSectionStyle = {
    width: "357px",
    // margin: "auto", 
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    margin: "25% auto 0px auto"
    // justifyContent: "center", 
    // alignItems: "center"
  }
  const logoStyle = {
    height: "73px",
    width: "181px",
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
  const infoText = {
    fontSize: "12px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '300',
    lineHeight: "16px",
    margin: "55px 0px 20px 0px"
  }
  const linkText = {
    fontSize: "12px",
    // fontFamily: 'Acumin Pro',
    fontWeight: '300',
    lineHeight: "16px",
    margin: "20px 0px",
    color: "#0051D3",
    textDecoration: "underline"
  };

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
      const errorMsg= isEmpty ? "Mobile number is required" : "Invalid mobile number";
      setError(errorMsg);
    } else {
      const user = { mobileNumber };
      localStorage.setItem("user",JSON.stringify(user));
      navigate("/verify-otp")
    };
  };
  const titleText = <h6 style={subTitle}>Welcome to <span style={yellowText}>InCred Money</span></h6>


  return (
    
    // <div style={authWrapper}>
    //   <div style={{width:"60%", maxWidth:"100%",...BannerStyle}} >
    //   {/* <div class="bg-auto sm:bg-cover w-full h-auto md:bg-contain lg:bg-auto xl:bg-cover w-3/5 h-full m-w-full" style={BannerStyle} > */}
    //   {/* <div style={BannerStyle} 
    //   // className="bg-contain bg-no-repeat md:(w-full h-full) sm:(w-screen h-auto) min-w-3/5 min-h-2/5"
    //   className="bg-contain bg-no-repeat w-1/5 h-screen"
    //   > */}
    //     </div>
    //   <div style={{width:"40%", maxWidth:"100%"}}> <h2 className="text-dark">Login</h2></div>

    // </div>
    //     <div class="grid gap-0">
    // <div class="grid-cols-6" style={{...BannerStyle}} ></div>
    // <div class="grid-cols-6" style={{...BannerStyle}} ></div>
    //     </div>
    // <div style={authWrapper}>
    // <div className="px-5 pt-14 flex flex-wrap sm:[block,p-10] md:flex md:p-0">
    <div className="p-5 flex flex-wrap md:flex md:p-0">
      {/* <div style={{ width: "60%", maxWidth: "100%" }} >
        <Banner />
      </div> */} 
      <div className='w-full md:w-6/12	 h-1/2 md:h-screen' >
        <Banner />
      </div>
      {/* <div style={{ width: "40%", maxWidth: "100%" }} > */}
      <div className='w-full md:w-6/12	 h-1/2 md:h-screen' >
        {/* <div style={loginSectionStyle}>
          <div>
            <img alt="" style={logoStyle} src={getImagePath("InCredMoneyLogo.svg")} />
            <div style={{ width: "357px" }}>
              <h6 style={subTitle}>Welcome to <span style={yellowText}>InCred Money</span></h6>
              <div className='relative'>
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  +91  &nbsp;|
                </div>
                <input value={mobileNumber} onChange={handleInputChange} className="appearance-none block w-full bg-gray-100 text-gray-700 border-gray-200 rounded py-3 pl-16 leading-tight focus:outline focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Your Phone No." aria-describedby="basic-addon1" />
              </div>
              {error && <p class="mt-2 text-sm text-red-600 dark:text-red-500">{error}.</p>}

              <p style={infoText}>By proceeding, I accept the <span style={linkText}><a href="/">Terms & Conditions</a></span>, and agree to receive messages such as OTPs & important updates on WhatsApp.</p>
              <button
                type="button"
                onClick={()=>handleSubmit()}
                // className="inline-block w-full bg-red px-6 pb-2 pt-2.5 text-xs font-medium uppercase text-black hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                className="w-full bg-blue-700	text-white rounded border-2 px-2 py-3 text-sm hover:bg-blue-800 focus:outline-none font-medium text-center"
              >
                Login
              </button>
            </div>
          </div>
        </div> */}
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
