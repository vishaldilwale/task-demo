import BannerSlider from '../../components/BannerSlider';
import { getImagePath } from '../../utils/index';

const Banner = () => {
  const BannerStyle = {
    backgroundImage: `url(${getImagePath("AuthBG.svg")})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#283A97",
    display: "flex",
    justifyContent: "center",
  };

  const yellowText = {
    fontWeight: '700'
  };
  const headerStyle = {
    fontWeight: '500',
    width: "293px",
  }
  const pillStyle = {
    border: "1px solid",
    fontWeight: '400',
  };
  const pills = ["Senior Secured Bonds", "Listed", "Anytime Liquidity"];
  return (
    <div className='h-auto md:h-screen'>
      <div className='h-[240px] md:h-screen mt-12 md:mt-0 items-start md:items-center' style={{ ...BannerStyle }} >
        <div className="px-4 py-2 md:p-0 mt-0 md:-mt-12">
          <h1 className="text-white text-[28px] md:text-[38px] leading-7 md:leading-9" style={headerStyle}>Earn <span className='text-white md:text-[#FFA376]' style={yellowText} >10-12% p.a. </span>
            fixed returns</h1>
          <div>
            <h4 className="mt-2 text-white font-bold hidden md:block text-[13px] md:text-[18px] md:mt-8">Start with minimum ₹10,000 </h4>
            <div className="mt-4 mb-2 md:my-5" style={{ display: "flex", flexWrap: "wrap" }}>
              {pills.map((p) => { return <p style={pillStyle} className='h-[18px] text-[10px] mb-2 rounded-full px-3 py-0 mr-2 bg-white text-blue-600 md:border-2 md:border-white md:text-white md:bg-transparent md:text-[14px] md:h-[32px] md:py-1'>{p}</p> })}
            </div>
            <h4 className="mt-2 text-white font-bold block md:hidden text-[13px] md:text-[18px]">Start with minimum ₹10,000 </h4>
          </div>
          <div className='mt-4 mb-5 md:mb-[20px] md:mt-12'>
            <BannerSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
