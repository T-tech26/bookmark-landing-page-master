import { useContext } from "react";
import DataContext from "./context/DataContext";

const FeatureHeading = () => {

  const { slideTabs, firstTabBorder, secondTabBorder, thirdTabBorder } = useContext(DataContext);

  return (
    <div
        className=" w-full h-auto px-12 flex flex-col items-center md:flex-row md:items-center md:justify-evenly md:px-20 lg:px-40 mb-10"
      >
        <h3
          className={
            `text-base w-full text-center text-Grayish-Blue cursor-pointer py-4 border-b-2 relative border-t-2 md:border-t-0 before:block before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:translate-x-[-50%] before:w-1/3 before:h-1 hover:before:bg-Soft-Red md:w-2/5 md:before:w-4/5 hover:text-Soft-Red ${firstTabBorder}`
          }
          onClick={() => slideTabs('tab1')}
        >
          Simple Bookmarking
        </h3>
        <h3
          className={
            `text-base w-full text-center text-Grayish-Blue cursor-pointer py-4 border-b-2 relative before:block before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:translate-x-[-50%] before:w-1/3 before:h-1 hover:before:bg-Soft-Red md:w-2/5 md:before:w-4/5 hover:text-Soft-Red ${secondTabBorder}`
          }
          onClick={() => slideTabs('tab2')}
        >
          Speedy Searching
        </h3>
        <h3
          className={
            `text-base w-full text-center text-Grayish-Blue cursor-pointer py-4 border-b-2 relative before:block before:absolute before:content-[''] before:bottom-0 before:left-1/2 before:translate-x-[-50%] before:w-1/3 before:h-1 hover:before:bg-Soft-Red md:w-2/5 md:before:w-4/5 hover:text-Soft-Red ${thirdTabBorder}`
          }
          onClick={() => slideTabs('tab3')}
        >
          Easy Sharing
        </h3>
      </div>
  )
}

export default FeatureHeading;