import React from 'react';
import AppRoutes from './routes';

function App() {
  return (
    //   <Router>
    //   <Routes>
    //       <Route index element={<LoginMobile />} />
    //       <Route path="/login" element={<LoginMobile />} />
    //       <Route path="/verify-otp" element={<OTPVerification />} />
    //       <Route path="/details" element={<ProfileDetails />} />
    //       <Route path="/about-us" element={<AboutUs />} />
    //       <Route path="/invest-plan" element={<InvestDetails />} />
    //       <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </Router>
    <React.Fragment>
    <AppRoutes />
  </React.Fragment>
  );
}

export default App;
