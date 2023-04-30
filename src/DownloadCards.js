import Chrome from './images/logo-chrome.svg';
import Firefox from './images/logo-firefox.svg';
import Opera from './images/logo-opera.svg';
import Dot from './images/bg-dots.svg';

const DownloadCards = () => {
  return (
    <>
      <div
        className=' w-[15rem] h-auto p-5 flex items-center justify-between flex-col rounded-xl shadow-md'
      >
        <div
          className=' flex flex-col items-center mb-5'
        >
          <img 
            className=' w-20 mb-4'
            src={Chrome} 
            alt="chrome-logo" 
          />
          <h4
            className=' text-Very-Dark-Blue text-lg font-[500] mb-1'
          >
            Add to Chrome
          </h4>
          <p
            className=' text-sm text-Grayish-Blue'
          >
            Minimum version 62
          </p>
        </div>
        
        <img 
          className=' w-full'
          src={Dot} 
          alt='dot' 
        />

        <button
          className=' text-white text-sm bg-Soft-Blue px-5 py-3 rounded-md mt-5 hover:text-Soft-Blue hover:bg-opacity-0 hover:border-2 hover:border-Soft-Blue hover:px-[18px] hover:py-[10px]'
        >
          Add & Install Extension
        </button>
      </div>

      <div
        className=' w-[15rem] h-auto p-5 flex items-center justify-between flex-col rounded-xl shadow-md md:mt-20'
      >
        <div
          className=' flex flex-col items-center mb-5'
        >
          <img 
            className=' w-20 mb-4'
            src={Firefox} 
            alt="firefox-logo" 
          />
          <h4
            className=' text-Very-Dark-Blue text-lg font-[500] mb-1'
          >
            Add to Firefox
          </h4>
          <p
            className=' text-sm text-Grayish-Blue'
          >
            Minimum version 55
          </p>
        </div>

        <img 
          className=' w-full'
          src={Dot} 
          alt='dot' 
        />

        <button
          className=' text-white text-sm bg-Soft-Blue px-5 py-3 rounded-md mt-5 hover:text-Soft-Blue hover:bg-opacity-0 hover:border-2 hover:border-Soft-Blue hover:px-[18px] hover:py-[10px]'
        >
          Add & Install Extension
        </button>
      </div>

      <div
        className=' w-[15rem] h-auto p-5 flex items-center justify-between flex-col rounded-xl shadow-md md:mt-40'
      >
        <div
          className=' flex flex-col items-center mb-5'
        >
          <img 
            className=' w-20 mb-4'
            src={Opera} 
            alt="opera-logo" 
          />
          <h4
            className=' text-Very-Dark-Blue text-lg font-[500] mb-1'
          >
            Add to Opera
          </h4>
          <p
            className=' text-sm text-Grayish-Blue'
          >
            Minimum version 46
          </p>
        </div>

        <img 
          className=' w-full'
          src={Dot} 
          alt='dot' 
        />

        <button
          className=' text-white text-sm bg-Soft-Blue px-5 py-3 rounded-md mt-5 hover:text-Soft-Blue hover:bg-opacity-0 hover:border-2 hover:border-Soft-Blue hover:px-[18px] hover:py-[10px]'
        >
          Add & Install Extension
        </button>
      </div>
    </>
  )
}

export default DownloadCards;