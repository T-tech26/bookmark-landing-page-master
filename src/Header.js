import PageLogo from './images/logo-bookmark.svg';
import NavIcon from './images/icon-hamburger.svg';
import { useContext } from 'react'
import DataContext from './context/DataContext';

const Header = () => {

  const { showMenu } = useContext(DataContext);
 
  return (
    <header 
      className=' w-full h-auto px-8 sm:px-12 py-8 lg:px-36'
    >
      <section
        className=' w-full h-auto flex items-center justify-between'
      >
        <img 
          src={PageLogo} 
          alt="logo" 
        />

        <img 
          className=' md:hidden cursor-pointer'
          src={NavIcon} 
          alt="nav-icon" 
          onClick={showMenu}
        />

        <div
          className=' w-3/4 md:w-[65%] xl:w-1/2 h-auto hidden md:block pl-20'
        >
          <ul
            className=' flex item-center justify-between items-center'
          >
            <li
              className=' text-sm uppercase text-Very-Dark-Blue tracking-wider font-[500] hover:text-Soft-Red cursor-pointer'
            >
              features
            </li>
            <li
              className=' text-sm uppercase text-Very-Dark-Blue tracking-wider font-[500] hover:text-Soft-Red cursor-pointer'
            >
              pricing
            </li>
            <li
              className=' text-sm uppercase text-Very-Dark-Blue tracking-wider font-[500] hover:text-Soft-Red cursor-pointer'
            >
              contact
            </li>

            <button 
              className=' text-sm uppercase text-white font-[500] py-3 px-10 bg-Soft-Red rounded-md shadow-lg hover:text-Soft-Red hover:bg-opacity-0 hover:border-2 hover:border-Soft-Red hover:py-[10px] hover:px-[38px]'
            >
              login
            </button>
          </ul>

        </div>
      </section>
    </header>
  )
}

export default Header;