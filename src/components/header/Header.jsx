import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ContextData } from '../../context/ContextProvider.jsx'

import { ChangeMode, ChangeModeContainer, ChangeModeIcon, HeaderContainer, HeaderStyled, Left, Right, ShortCut, Social, SocialMediaContainer } from './styles/header'

const Header = () => {
  const { pathname }      = useLocation()
  const { theme, setTheme, themeSchema } = useContext(ContextData)
  

  const handleChangeMode = e => {
    const darkMode = window.localStorage.getItem('dark-mode')
    if(!darkMode) {
      window.localStorage.setItem('dark-mode', themeSchema.night)
      setTheme(themeSchema.night)
    }else {
      window.localStorage.removeItem('dark-mode')
      setTheme(themeSchema.light)
    }
  }

  useEffect(() => {
    window.onkeydown = e => {
      if(e.ctrlKey && e.key.toLowerCase() === 'M'.toLowerCase()) {
        e.preventDefault()
        handleChangeMode()
      }
    }
  }, [])

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Left>
          

          {
            pathname === '/' ? (
              <h1 style={{color: theme.primaryColor, fontFamily: 'Roboto', fontSize: '1.5em'}}>Devce Code</h1>
            ) : 
            (
              <Link 
              to="/" 
              style ={{backgroundColor: theme.thirdBackground, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '.5em', borderRadius: '50%', textDecoration: 'none'}}>
                <ion-icon style={{color: theme.primaryColor}} name="arrow-back-outline"></ion-icon>
              </Link>
            )
          }
        </Left>

        <Right>
          <ChangeMode>
            <ChangeModeContainer
            background={theme.thirdBackground}
            border={theme.primaryBorder}
            onClick={handleChangeMode}>
              <ChangeModeIcon 
              background={theme.primaryBackground}
              style={{left: theme.move}}>
                {
                  theme === themeSchema.light ? (
                    <ion-icon 
                    style={{color: theme.primaryColor}} 
                    name="sunny-outline"></ion-icon>
                  ) : (
                    <ion-icon 
                    style={{color: theme.primaryColor}} 
                    name="moon"></ion-icon>
                  )
                }
              </ChangeModeIcon>
            </ChangeModeContainer>
            <ShortCut color={theme.primaryColor}>Ctrl + M</ShortCut>
          </ChangeMode>

          {
            pathname === '/' && (
              <SocialMediaContainer background={theme.thirdBackground}>
                {/* {
                  pathname === '/' && (<Button border={mode.border} color={mode.primaryColor} onClick={handleModalVisibility}>como logramos esto</Button>)
                } */}


                <Social href="https://instagram.com/devcecode" 
                target="_blank" 
                color={theme.primaryColor} 
                hoverColor={theme.secondaryColor} 
                border={theme.border}>
                  <ion-icon name="logo-instagram"></ion-icon>
                </Social>

                <Social 
                href="https://github.com/devcecode" 
                target="_blank" 
                color={theme.primaryColor} 
                hoverColor={theme.secondaryColor} 
                border={theme.border}>
                  <ion-icon name="logo-github"></ion-icon>
                </Social>
              </SocialMediaContainer>
            )
          }
        </Right>
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header