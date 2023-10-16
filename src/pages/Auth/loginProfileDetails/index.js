import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import TextInput from '../../../components/Form/TextInput';
import helpers from '../../../helpers';

const ProfileDetails = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const fullNameRef = useRef();
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
  const otpSection = {
    maxWidth: "400px",
    margin: "20px auto"
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e?.target;
    setUser({
      ...user,
      [name]: value
    });
    const isEmail = name === "email";
    if (isEmail) {
      const isValidEmail = helpers.validateEmail(value);
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
    const requiredFieldsFilled = fullname && email;
    const isEmailValid = helpers.validateEmail(email);
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
      const user = localStorage.getItem("user");
      const updatedUser = { ...JSON.parse(user), fullname }
      localStorage.setItem("user", JSON.stringify(updatedUser));
      navigate("/source")
    }
  };
  const titleText = <h6 style={subTitle}>Get Started <br />
    On Your  <span style={yellowText}>Investment Journey!</span></h6>;

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  // const labelComponent = useCallback((label, labelFor, isRequired) => (
  //   <label class="block text-500 text-sm font-medium mb-2" for={labelFor || ""}>
  //     {label} {isRequired && "*"}
  //   </label>
  // ), []);
  // const errorComponent = useCallback((msg = "") => (
  //   <span className="mt-1 text-sm text-red-600 dark:text-red-500">
  //     {msg}
  //   </span>
  // ), []);

  const marginComponent = <div className="mb-4" />;

  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next">
          <div style={otpSection}>
            {/* {labelComponent("Full Name", "fullname", true)}
            <input name="fullname" id="fullname" value={user?.fullname} onChange={(e) => handleInputChange(e)}
              ref={fullNameRef}
              className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Enter Your Name*" />
            {error?.fullname && errorComponent(error?.fullname)} */}
            <TextInput
            name="fullname" id="fullname" value={user?.fullname}
            onChange={(e) => handleInputChange(e)}
            ref={fullNameRef}
            type="text"
            isRequired
              placeholder="Enter Your Name"
              label="Full Name"
              labelFor="fullname"
              error={error?.fullname && error?.fullname}
            />

            {marginComponent}

            {/* {labelComponent("Email", "email", true)}
            <input name="email" value={user?.email} onChange={(e) => handleInputChange(e)}
              id='email'
              autoComplete='email'
              className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
              placeholder="Email*" />
            {error?.email && errorComponent(error?.email)} */}

            <TextInput
            name="email" id="email" value={user?.email}
            onChange={(e) => handleInputChange(e)}
            isRequired
              placeholder="Email"
              label="Email"
              labelFor="Email"
              error={error?.email && error?.email}
            />

            {marginComponent}

            {/* {labelComponent("Referral Code", "referralCode")}
            <input name="referralCode" value={user?.referralCode} onChange={(e) => handleInputChange(e)}
              id="referralCode"
              className="appearance-none block w-full h-14 bg-gray-100 p-5 text-gray-700 border-gray-200 rounded py-3 leading-tight focus:outline focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Enter Referral Code" /> */}
                <TextInput
            name="referralCode" id="referralCode" value={user?.referralCode}
            onChange={(e) => handleInputChange(e)}
              placeholder="Enter Referral Code"
              label="Referral Code"
              labelFor="referralCode"
            />

            {marginComponent}
          </div>
        </BannerForm>
      </div>
    </div>
  );
}

export default ProfileDetails;


