import { getImagePath } from '../../utils/index';

const BannerForm = (props) => {
  const { title, onSubmit, btnText, btnRef = () => { }, disabled = false, children } = props;
  const loginSectionStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    justifyContent: "center",
  }
  const subTitle = {
    fontSize: "22px",
    fontWeight: '400',
    lineHeight: "26px",
    margin: "60px 0px 30px 0px"
  }
  const infoText = {
    fontWeight: '300',
    lineHeight: "16px",
    margin: "70px 0px 20px 0px",
  }
  const linkText = {
    fontSize: "12px",
    fontWeight: '300',
    lineHeight: "16px",
    margin: "20px 0px",
    color: "#0051D3",
    textDecoration: "underline"
  };
  return (
    <div className='h-auto md:h-screen' style={loginSectionStyle}>
      <div className='m-auto w-[100%] md:w-[365px]'>
        <div>
          <img className='absolute md:relative top-[10px] left-[13px] left-0 h-[49px] w-[120px] md:h-[73px] md:w-[181px] md:top-[0px] md:left-[0px]' alt="" src={getImagePath("InCredMoneyLogo.svg")} />
        </div>
        <div className="mb-12 md:mb-0">
          <h6 style={subTitle}>
            {title}
          </h6>
          {children}
          <div className='pb-5 w-[365px] max-w-[88%] md:max-w-full m-auto absolute inset-x-0 bottom-1 md:relative md:p-0'>
            <p className="text-[10.5px] text-gray-500 md:text-[12px] md:text-gray-700" style={infoText}>By proceeding, I accept the <span style={linkText}><a href="/">Terms & Conditions</a></span>, and agree to receive messages such as OTPs & important updates on WhatsApp.</p>
            <button
              type="button"
              disabled={disabled}
              ref={btnRef}
              onClick={() => onSubmit()}
              className="disabled:text-white-500 disabled:bg-violet-200 disabled:outline-none w-full bg-blue-700	text-white rounded px-2 py-3 text-sm hover:bg-blue-800 focus:outline-none font-medium text-center"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerForm;
