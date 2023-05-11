import React, { useEffect, useState, useContext } from 'react'
import { ContextData } from '../../context/ContextProvider.jsx';

import { 
  PopupStyled,
  PopupContainer,
  Message,
  Progress,
  Title,
  ProgressContainer
 } from './styles/popup';
function Popup({ message, time }) {

  const { theme } = useContext(ContextData)

  const [ progress, setProgress ] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => prev - 1)
    }, (time * 10) / 1000)

    return () => clearInterval(interval)

  }, [time])


  return (
    <PopupStyled background={theme.secondaryBackground}>
      <PopupContainer>
        <Title color={theme.primaryColor}>Gracias por conectarte desde:</Title>
        <Message color={theme.primaryColor}>{message}</Message>
        <ProgressContainer>
          <Progress style={{width: `${progress}%`}}></Progress>
        </ProgressContainer>
      </PopupContainer>
    </PopupStyled>
  )
}

export default Popup
