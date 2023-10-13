// import logo from './logo.svg';
// import './App.css';
// import AuthBG from '../../../assets/images/AuthBG.svg';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import BannerSlider from '../../../components/BannerSlider';
import { getImagePath } from '../../../utils';

const ProfileDetails = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const fullNameRef = useRef();
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

  const validateEmail = (emailValue) => {
    return emailValue?.toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e?.target;
    setUser({
      ...user,
      [name]: value
    });
    const isEmail = name === "email";
    if (isEmail) {
      const isValidEmail = validateEmail(value);
      if (isValidEmail) {
        setError({ ...error, email: "" })
      }
    } else {
      const isFilled = value?.length > 0;
      if (isFilled) {
        setError({ ...error, [name]: "" })
      }
    }

  };

  const handleSubmit = () => {
    const { fullname, email } = user;
    console.log("user", user);
    const requiredFieldsFilled = fullname && email;
    const isEmailValid = validateEmail(email);
    if (!requiredFieldsFilled) {
      let errors = { ...error };
      if (!fullname) {
        errors["fullname"] = "Full Name is required."
      }
      if (!email) {
        errors["email"] = "Email is required."
      }
      setError(errors);
    } else if (!isEmailValid) {
      setError({ ...error, email: "Invalid Email!" })
    } else {
      setError({});
      // console.log("userDetails", user);
      const user = localStorage.getItem("user");
      const updatedUser = {...JSON.parse(user), fullname }
      localStorage.setItem("user",JSON.stringify(updatedUser));
      // localStorage.setItem("user",JSON.stringify(updatedUser));
      navigate("/about-us")
    }
  };
  const titleText = <h6 style={subTitle}>Get Started <br />
    On Your  <span style={yellowText}>Investment Journey!</span></h6>;
  // const digitInput;
  // const logInMobile = localStorage.getItem("login-mobile");

  useEffect(() => {
    // localStorage.removeItem("login-mobile")
    fullNameRef.current.focus();
  }, []);

  const labelComponent = useCallback((label, labelFor, isRequired) => (
    <label class="block text-500 text-sm font-medium mb-2" for={labelFor || ""}>
      {label} {isRequired && "*"}
    </label>
  ), []);
  const errorComponent = useCallback((msg = "") => (
    // <span className="mt-2 text-sm text-red-600 dark:text-red-500 invisible peer-invalid:visible">
    <span className="mt-1 text-sm text-red-600 dark:text-red-500">
      {msg}
    </span>
  ), []);

  const marginComponent = <div className="mb-4" />;

  return (
    // <div style={authWrapper}>
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      {/* <div style={{ width: "60%", maxWidth: "100%" }} > */}
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      {/* <div style={{ width: "40%", maxWidth: "100%" }} > */}
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next">
            <div style={otpSection}>
              {/* <label class="block text-500 text-sm font-bold mb-2" for="fullname">
                Full Name*
              </label> */}
              {labelComponent("Full Name", "fullname", true)}
              <input name="fullname" id="fullname" value={user?.fullname} onChange={(e) => handleInputChange(e)}
                ref={fullNameRef}
                className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Enter Your Name*" />
              {error?.fullname && errorComponent(error?.fullname)}

              {marginComponent}

              {labelComponent("Email", "email", true)}
              <input name="email" value={user?.email} onChange={(e) => handleInputChange(e)}
                type='text'
                id='email'
                autoComplete='email'
                // required
                className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
                // type="text"
                // className='peer relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                //     invalid:border-pink-500 invalid:text-pink-600
                //     focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Email*" />
              {error?.email && errorComponent(error?.email)}

              {marginComponent}

              {labelComponent("Referral Code", "referralCode")}
              <input name="referralCode" value={user?.referralCode} onChange={(e) => handleInputChange(e)}
                id="referralCode"
                className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Enter Referral Code" />

              {marginComponent}
            </div>
        </BannerForm>
      </div>
    </div>
  );
}

export default ProfileDetails;


