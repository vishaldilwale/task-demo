import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import BannerForm from '../../../components/Banner Forms';
import TextInput from '../../../components/Form/TextInput';
import { colors } from '../../../constants';
import helpers from '../../../helpers';

const ProfileDetails = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const fullNameRef = useRef();
  const navigate = useNavigate();

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
  const titleText = <h6 className='text-[22px] font-normal leading-6'>Get Started <br />
    On Your  <span className={`font-bold text-[${colors.yellowTitle}]`}>Investment Journey!</span></h6>;

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);

  const marginComponent = <div className="mb-4" />;

  return (
    <div className="flex flex-wrap sm:block md:flex p-5 md:p-0">
      <div className='hidden w-full md:w-6/12 h-1/2 md:h-screen md:block' >
        <Banner />
      </div>
      <div className='w-full md:w-6/12 h-1/2 md:h-screen max-w-[400px] mx-auto' >
        <BannerForm onSubmit={handleSubmit} title={titleText} btnText="Next">
          <div className='my-[20px] mx-auto'>
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


