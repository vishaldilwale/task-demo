import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PATH } from '../constants/path';
import LoginMobile from '../pages/Auth/loginMobile';
import OTPVerification from '../pages/Auth/loginOTPVerification';
import ProfileDetails from '../pages/Auth/loginProfileDetails';
import AboutUs from '../pages/Auth/loginHearAboutUs';
import InvestDetails from '../pages/Auth/loginInvestDetails';
import PageNotFound from '../pages/PageNotFound';

const AppRoutes=()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginMobile />} />
                <Route path={PATH.login} element={<LoginMobile />} />
                <Route path={PATH.verifyOtp} element={<OTPVerification />} />
                <Route path={PATH.details} element={<ProfileDetails />} />
                <Route path={PATH.source} element={<AboutUs />} />
                <Route path={PATH.investPlan} element={<InvestDetails />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
