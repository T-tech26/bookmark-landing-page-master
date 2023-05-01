import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

  const [showNav, setShowNav] = useState('left-[-100%]');
  const [slideTab, setSlideTab] = useState('translate-x-[0%]');
  const [firstTabBorder, setFirstTabBorder] = useState('');
  const [secondTabBorder, setSecondTabBorder] = useState('');
  const [thirdTabBorder, setThirdTabBorder] = useState('');
  const [answerOne, setAnswerOne] = useState('h-0');
  const [answerTwo, setAnswerTwo] = useState('h-0');
  const [answerThree, setAnswerThree] = useState('h-0');
  const [answerFour, setAnswerFour] = useState('h-0');
  const [flipImgOne, setFlipImgOne] = useState('');
  const [flipImgTwo, setFlipImgTwo] = useState('');
  const [flipImgThree, setFlipImgThree] = useState('');
  const [flipImgFour, setFlipImgFour] = useState('');
  const [showError, setShowError] = useState('hidden');
  const [errorBg, setErrorBg] = useState('');
  const [email, setEmail] = useState('');
  const [strokeColorOne, setStrokeColorOne] = useState('stroke-Soft-Blue');
  const [strokeColorTwo, setStrokeColorTwo] = useState('stroke-Soft-Blue');
  const [strokeColorThree, setStrokeColorThree] = useState('stroke-Soft-Blue');
  const [strokeColorFour, setStrokeColorFour] = useState('stroke-Soft-Blue');

  const showMenu = () => {
    showNav === 'left-[-100%]' ? setShowNav('left-[0%]') : setShowNav('left-[-100%]');
  }

  const hideMenu = () => {
    showNav === 'left-[0%]' ? setShowNav('left-[-100%]') : setShowNav('left-[0%]');
  }

  const slideTabs = (tab) => {
    tab === 'tab1' && setSlideTab('translate-x-[0%]');
    tab === 'tab2' && setSlideTab('translate-x-[-100%]');
    tab === 'tab3' && setSlideTab('translate-x-[-200%]');
  }

  useEffect(() => {

    const setBorders = () => {
      slideTab === 'translate-x-[0%]' ? setFirstTabBorder('before:bg-Soft-Red') : setFirstTabBorder('');

      slideTab === 'translate-x-[-100%]' ? setSecondTabBorder('before:bg-Soft-Red') : setSecondTabBorder('');
      
      slideTab === 'translate-x-[-200%]' ? setThirdTabBorder('before:bg-Soft-Red') : setThirdTabBorder('');
    }
    setBorders();
  },[slideTab])

  const showAnswer = (Qus) => {
    if(Qus === 'Qus1' && answerOne === 'h-0') {
      setAnswerOne('h-auto');
      setFlipImgOne('img');
      setStrokeColorOne('stroke-Soft-Red');

    } else {
      setAnswerOne('h-0');
      setFlipImgOne('');
      setStrokeColorOne('stroke-Soft-Blue');
    }
    
    if(Qus === 'Qus2' && answerTwo === 'h-0') {
      setAnswerTwo('h-auto');
      setFlipImgTwo('img');
      setStrokeColorTwo('stroke-Soft-Red');

    } else {
      setAnswerTwo('h-0');
      setFlipImgTwo('');
      setStrokeColorTwo('stroke-Soft-Blue');
    }
    
    if(Qus === 'Qus3' && answerThree === 'h-0') {
      setAnswerThree('h-auto');
      setFlipImgThree('img');
      setStrokeColorThree('stroke-Soft-Red');

    } else {
      setAnswerThree('h-0');
      setFlipImgThree('');
      setStrokeColorThree('stroke-Soft-Blue');
    }
    
    if(Qus === 'Qus4' && answerFour === 'h-0') {
      setAnswerFour('h-auto');
      setFlipImgFour('img');
      setStrokeColorFour('stroke-Soft-Red');

    } else {
      setAnswerFour('h-0');
      setFlipImgFour('');
      setStrokeColorFour('stroke-Soft-Blue');
    }
  }

  const formValidation = (email) => {
    if(!email.includes('@gmail.com')) {
      setShowError('');
      setErrorBg('bg-Soft-Red');
    } else {
      setEmail('');
    }
  }

  const removeErrorMsg = () => {
    setShowError('hidden');
    setErrorBg('');
  }

  return (
    <DataContext.Provider value={{
      showNav, showMenu, hideMenu, slideTab, slideTabs, firstTabBorder, secondTabBorder, thirdTabBorder, answerOne, answerTwo, answerThree, answerFour, showAnswer, flipImgOne, flipImgTwo, flipImgThree, flipImgFour, showError, errorBg, email, setEmail, formValidation, removeErrorMsg, strokeColorOne, strokeColorTwo, strokeColorThree, strokeColorFour
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;