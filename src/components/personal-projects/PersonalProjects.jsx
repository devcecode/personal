import React, { useContext, useEffect } from 'react'
import { PersonalProjectsContainer, 
         PersonalProjectsStyled,
         Project,
         Projects,
         Title
       } from './styles/personal-projects'

import { ContextData } from '../../context/ContextProvider.jsx'

import spinner from '../../images/loader-spinner.svg'
import { useLocation } from 'react-router-dom'

function PersonalProjects() {

  const { theme } = useContext(ContextData)

  return (
    <PersonalProjectsStyled>
      <PersonalProjectsContainer>
        <Title color={theme.primaryColor}>🚀 Personal Projects</Title>
        <Projects>
          <Project 
          href="https://picart.live/" 
          target="_blank" 
          background={theme.secondaryBackground} 
          color={theme.primaryColor} 
          hoverBackground={theme.thirdBackground}>
            Picart
          </Project>

          <Project 
          href="https://ismple.netlify.app/" 
          target="_blank" 
          background={theme.secondaryBackground} 
          color={theme.primaryColor} 
          hoverBackground={theme.thirdBackground}>
            Ismple
          </Project>
        </Projects>
      </PersonalProjectsContainer>
    </PersonalProjectsStyled>
  )
}

export default PersonalProjects