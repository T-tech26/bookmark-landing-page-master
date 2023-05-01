import Whitelogo from './Whitelogo';
import DataContext from './context/DataContext';
import NavCloseIcon from './images/icon-close.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import { useContext } from 'react';

const MobileNav = () => {

  const { showNav, hideMenu } = useContext(DataContext);

  return (
    <nav
      className={
        `w-full h-screen absolute top-0 ${showNav} bg-Very-Dark-Blue opacity-[95%] flex items-center justify-center p-10`
      }
    >
      <div
        className=' w-full h-full flex flex-col sm:w-[25rem]'
      >
        <div
          className=' w-full h-auto flex items-center justify-between'
        >
          <Whitelogo />
          <img 
            className=' cursor-pointer'
            src={NavCloseIcon} 
            alt="nav-close-icon" 
            onClick={hideMenu}
          />
        </div>

        <div
          className=' w-full flex-grow pt-16'
        >
          <ul
            className=' w-full flex-grow'
          >
            <li
              className=' text-center text-white text-lg uppercase tracking-widest py-5 border-y-[1px] border-Grayish-Blue cursor-pointer hover:text-Soft-Red'
            >
              features
            </li>
            <li
              className=' text-center text-white text-lg uppercase tracking-widest py-5 border-b-[1px] border-Grayish-Blue cursor-pointer hover:text-Soft-Red'
            >
              pricing
            </li>
            <li
              className=' text-center text-white text-lg uppercase tracking-widest py-5 border-b-[1px] border-Grayish-Blue cursor-pointer hover:text-Soft-Red'
            >
              contact
            </li>
          </ul>
            <button
              className=' w-full py-5 mt-8 border-white border-2 rounded-lg text-white text-lg font-[500] uppercase tracking-[3px] cursor-pointer hover:text-Soft-Red'
            >
              login
            </button>
        </div>

        <div
          className=' w-full flex items-center justify-center gap-10 '
        >
          <img 
            className=''
            src={facebook} 
            alt="facebook-icon" 
          />
          <img 
            className=''
            src={twitter} 
            alt="twitter-icon" 
          />
        </div>
      </div>
    </nav>
  )
}

export default MobileNav;