import { useContext } from 'react';
import ErrorImg from './images/icon-error.svg';
import DataContext from './context/DataContext';

const ContactSection = () => {

  const { showError, errorBg, email, setEmail, formValidation, removeErrorMsg } = useContext(DataContext);

  return (
    <section
      className=" w-full h-auto px-12 bg-Soft-Blue py-12"
    >
      <div
        className=" w-full h-auto sm:w-[30rem] flex flex-col items-center sm:mx-auto gap-3"
      >
        <h4
         className=" text-slate-300 text-sm font-[500] uppercase tracking-widest"
        >
          35,000+ already joined
        </h4>

        <h4
          className=" text-white text-2xl font-[500] text-center mb-4"
        >
          Stay up-to-date with what we’re doing
        </h4>

        <form
          className=" w-full h-48 flex flex-col justify-center relative gap-4 sm:flex-row sm:justify-between sm:items-center sm:h-20"
          onSubmit={(e) => e.preventDefault()}
        >
          <label 
            className=" absolute left-[1999px]"
            htmlFor="email"
          >
            Email
          </label>

          <div
            className={
              `sm:flex-grow p-[2px] ${errorBg} rounded-lg`
            }
          >
            <div
              className=" sm:py-3 rounded-lg px-5 py-5 bg-White flex justify-between items-center"
            >
              <input 
                className=" w-full h-auto outline-none border-none"
                id="email"
                type="email" 
                placeholder="Enter your email address"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                onFocus={removeErrorMsg}
              />
              
              <img 
                className={
                  `${showError}`
                }
                src={ErrorImg} 
                alt="error-icon" 
              />
            </div>
            <p
              className={
                `text-white text-xs italic px-5 ${showError}`
              }
            >Whoops, make sure it's an email</p>
          </div>

          <button
            className=" w-full h-16 text-white text-base font-[500] bg-Soft-Red rounded-lg sm:w-40 sm:h-12 hover:text-Soft-Red hover:bg-White hover:border-2 hover:border-Soft-Red hover:py-[18px] sm:hover:py-[10px]"
            type='submit'
            onClick={() => formValidation(email)}
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection;