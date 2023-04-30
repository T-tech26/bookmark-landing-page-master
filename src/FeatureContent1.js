import FeatureImage1 from './images/illustration-features-tab-1.svg';

const FeatureContent1 = () => {

  return (
    <div
      className={
        `w-full h-auto flex flex-col    justify-between items-center pb-20 md:pb-0 md:flex-row md:items-center md:justify-between mb-20`
      }
    >
      <div
        className="w-full h-auto flex px-12 justify-center md:mb-0 md:w-1/2 relative before:block before:absolute before:left-[0%] before:content-[''] before:bg-Soft-Blue before:bottom-[-20%] before:w-4/5 before:h-[90%] before:z-0 before:rounded-r-full sm:before:w-[70%]"
      >
        <img 
          className='relative w-full sm:w-[30rem]'
          src={FeatureImage1} 
          alt="feature1" 
        />
      </div>

      <div
        className=" w-full h-auto text-center px-12 mx-auto sm:w-[30rem] md:w-1/2 md:px-5 md:text-left"
      >
        <h2
          className=" text-2xl font-[500] text-Very-Dark-Blue mb-5 md:text-3xl"
        >
          Bookmark in one click
        </h2>

        <p
          className="text-Grayish-Blue md:w-[20rem] xl:w-[25rem] text-sm mb-5 md:text-base"
        >
          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
        </p>

        <button
          className=' hidden md:block md:px-5 md:py-3 md:bg-Soft-Blue text-white font-[500] rounded-md hover:text-Soft-Blue hover:bg-opacity-0 hover:border-2 hover:border-Soft-Blue hover:px-[18px] hover:py-[10px]'
        >
          More Info
        </button>
      </div>
    </div>
  )
}

export default FeatureContent1;