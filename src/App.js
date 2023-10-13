import './App.css';
import LoginMobile from './pages/Auth/loginMobile';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OTPVerification from './pages/Auth/loginOTPVerification';
import ProfileDetails from './pages/Auth/loginProfileDetails';
import AboutUs from './pages/Auth/loginHearAboutUs';
import PageNotFound from './pages/PageNotFound';
import InvestDetails from './pages/Auth/loginInvestDetails';

function App() {
  return (
    // <div className="App">
    //   <LoginMobile/>
    // </div>
      <Router>
      <Routes>
        {/* <Route path="/" element={<LoginMobile />}> */}
          <Route index element={<LoginMobile />} />
          <Route path="/login" element={<LoginMobile />} />
          <Route path="/verify-otp" element={<OTPVerification />} />
          <Route path="/details" element={<ProfileDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/invest-plan" element={<InvestDetails />} />
          <Route path="*" element={<PageNotFound />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
