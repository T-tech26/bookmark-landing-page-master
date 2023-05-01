import { useContext } from 'react';
import DataContext from './context/DataContext';

const FAQs = () => {

  const { 
    answerOne, answerTwo, answerThree, answerFour, showAnswer, flipImgOne, flipImgTwo, flipImgThree, flipImgFour, strokeColorOne, strokeColorTwo, strokeColorThree, strokeColorFour 
  } = useContext(DataContext);

  return (
    <div
      className=' w-full h-auto flex flex-col items-center'
    >
      <div
        className=' w-full h-auto py-3 sm:w-[25rem] border-b-[1px] border-Grayish-Blue'
      >
        <h3
          className=' w-full h-auto flex items-center justify-between text-lg text-Very-Dark-Blue font-[500] py-3 hover:text-Soft-Red cursor-pointer'
          onClick={() => showAnswer('Qus1')}
        >
          What is Bookmark?

          <span>
            <svg 
              className={
                `cursor-pointer custom-transition ${flipImgOne} ${strokeColorOne} hover:stroke-Soft-Red`
              }
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="12"
              onClick={() => showAnswer('Qus4')}
            >
              <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8"/>
            </svg>
          </span>
        </h3>

        <p
          className={
            `text-base text-Grayish-Blue custom-transition ${answerOne} overflow-y-hidden`
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
        </p>
      </div>

      <div
        className=' w-full h-auto py-3 sm:w-[25rem] border-b-[1px] border-Grayish-Blue'
      >
        <h3
          className=' w-full h-auto flex items-center justify-between text-lg text-Very-Dark-Blue font-[500] py-3 hover:text-Soft-Red cursor-pointer'
          onClick={() => showAnswer('Qus2')}
        >
          How can I request a new browser?

          <span>
            <svg 
              className={
                `cursor-pointer custom-transition ${flipImgTwo} ${strokeColorTwo} hover:stroke-Soft-Red`
              }
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="12"
              onClick={() => showAnswer('Qus4')}
            >
              <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8"/>
            </svg>
          </span>
        </h3>

        <p
          className={
            `text-base text-Grayish-Blue custom-transition ${answerTwo} overflow-y-hidden`
          }
        >
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </p>
      </div>

      <div
        className=' w-full h-auto py-3 sm:w-[25rem] border-b-[1px] border-Grayish-Blue'
      >
        <h3
          className=' w-full h-auto flex items-center justify-between text-lg text-Very-Dark-Blue font-[500] py-3 hover:text-Soft-Red cursor-pointer'
          onClick={() => showAnswer('Qus3')}
        >
          Is there a mobile app?

          <span>
            <svg 
              className={
                `cursor-pointer custom-transition ${flipImgThree} ${strokeColorThree} hover:stroke-Soft-Red`
              }
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="12"
              onClick={() => showAnswer('Qus4')}
            >
              <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8"/>
            </svg>
          </span>
        </h3>

        <p
          className={
            `text-base text-Grayish-Blue custom-transition ${answerThree} overflow-y-hidden`
          }
        >
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.
        </p>
      </div>

      <div
        className=' w-full h-auto py-3 sm:w-[25rem] border-b-[1px] border-Grayish-Blue'
      >
        <h3
          className=' w-full h-auto flex items-center justify-between text-lg text-Very-Dark-Blue font-[500] py-3 hover:text-Soft-Red cursor-pointer'
          onClick={() => showAnswer('Qus4')}
        >
          What about other Chromium browsers?
          <span>
            <svg 
              className={
                `cursor-pointer custom-transition ${flipImgFour} ${strokeColorFour} hover:stroke-Soft-Red`
              }
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="12"
              onClick={() => showAnswer('Qus4')}
            >
              <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8"/>
            </svg>
          </span>
        </h3>

        <p
          className={
            `text-base text-Grayish-Blue custom-transition ${answerFour} overflow-y-hidden`
          }
        >
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.
        </p>
      </div>

      <button
        className=' text-white text-base bg-Soft-Blue px-5 py-3 rounded-lg mt-16 hover:text-Soft-Blue hover:bg-opacity-0 hover:border-2 hover:border-Soft-Blue hover:p-[18px] hover:py-[10px]'
      >
        More Info
      </button>

    </div>
  )
}

export default FAQs;