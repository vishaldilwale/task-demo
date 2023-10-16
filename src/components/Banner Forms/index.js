import { PATH } from '../../constants/path';
import { getImagePath } from '../../utils/index';

const BannerForm = (props) => {
  const { title, onSubmit, btnText, btnRef = () => { }, disabled = false, children } = props;
  return (
    <div className='h-auto flex flex-col justify-center m-auto md:h-screen' >
      <div className='m-auto w-[100%] md:w-[365px]'>
        <div>
          <img className='absolute md:relative top-[10px] left-[13px] left-0 h-[49px] w-[120px] md:h-[73px] md:w-[181px] md:top-[0px] md:left-[0px]' alt="" src={getImagePath("InCredMoneyLogo.svg")} />
        </div>
        <div className="mb-12 md:mb-0">
          <h6 className='font-normal text-[22px] leading-7 mt-[60px] mb-[30px] mx-auto'>
            {title}
          </h6>
          {children}
          <div className='pb-5 w-[365px] max-w-[88%] md:max-w-full m-auto absolute inset-x-0 bottom-1 md:relative md:p-0'>
            <p className="text-[10.5px] leading-4 font-light text-gray-500 mt-[70px] mb-[20px] mx-auto md:text-[12px] md:text-gray-700">By proceeding, I accept the <span className={`text-[12px] text-[#0051D3] font-light leading-4 underline my-[20px]`}>
              <a rel="noreferrer" target="_blank" href={PATH.termsAndConditions}>Terms & Conditions</a>
              </span>, and agree to receive messages such as OTPs & important updates on WhatsApp.</p>
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
