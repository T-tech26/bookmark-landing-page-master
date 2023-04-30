import HeroImage from './images/illustration-hero.svg';  
   
const Hero = () => {
  return (
    <section 
      className=' w-full h-auto flex flex-col-reverse items-center md:flex-row md:justify-between md:items-center my-16'
    >
      <div
        className=" w-full sm:w-[30rem] h-auto px-12 md:w-[30rem] lg:pl-36 lg:pr-0 text-center md:text-left"
      >
        <h1
          className=" text-[1.775rem] text-Very-Dark-Blue font-[500] mb-5 md:text-3xl lg:text-4xl"
        >A Simple Bookmark Manager</h1>

        <p
          className=" text-Grayish-Blue text-sm mb-5 md:text-base"
        >
            A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <div
          className=" flex item-center justify-center md:block"
        >
          <button
            className=" text-[.7rem] text-white font-[500] p-3 bg-Soft-Blue mr-2 rounded-md lg:text-sm hover:text-Soft-Blue hover:bg-opacity-0 hover:border-2 hover:border-Soft-Blue hover:p-[10px]"
          >
            Get it on Chrome
          </button>
          <button
            className=" text-[.7rem] text-Grayish-Blue font-[500] p-3 rounded-md shadow-lg lg:text-sm hover:border-2 hover:border-Very-Dark-Blue hover:p-[10px] hover:text-Very-Dark-Blue"
          >
            Get it on Firefox
          </button>
        </div>
      </div>

      <div
        className=" w-full mb-16 md:mb-0 lg:pr-8 md:w-1/2 relative before:block before:absolute before:right-[-15%] before:content-[''] before:bg-Soft-Blue before:bottom-0 before:w-[90%] before:h-3/4 before:z-0 before:rounded-l-full"
      >
        <img
          className=" relative w-full"
          src={HeroImage} 
          alt="hero" 
        />
      </div>
    </section>
  )
}

export default Hero;