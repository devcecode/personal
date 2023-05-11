import React, { useContext, useEffect, useState } from 'react'
import Description from '../description/Description.jsx'
import { HomeContainer, HomeStyled } from './styles/home.js'
import Popup from '../pop-up/Popup.jsx';

function Home() {

  const [ isShowed, setIsShowed ] = useState(false)
  const [ message, setMessage ]   = useState('')
  
  const time = 2000;
  
  useEffect(() => {
    if('userAgent' in navigator) setMessage(navigator.userAgent)
  }, [])
  
  useEffect(() => {
    if(message) {
      setIsShowed(true)
      setTimeout(() => {
        setIsShowed(false)
      }, time)
    }
  }, [ message ])

  return (
    <HomeStyled>
      <HomeContainer>
        {/* { isShowed && (<Popup time={time} message={message}/>) } */}
        <Description />
      </HomeContainer>
    </HomeStyled>
  )
}

export default Home