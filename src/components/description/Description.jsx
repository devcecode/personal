import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContextData } from '../../context/ContextProvider.jsx'

import profilePicture from '../../images/profile_picture.png'

import VideoPlayer from '../video-player/VideoPlayer.jsx'

import { 
  DescriptionContainer, 
  DescriptionStyled, 
  Paragraph, 
  Tags, 
  TagsContainer, 
  TagLink, 
  Span, 
  Image, 
  ImageContainer 
} from './styles/description'

const tags = [
  {
    name: "Skills",
    icon: "💪"
  },
  {
    name: "Projects",
    icon: "👊"
  },
  {
    name: "Personal Projects",
    icon: "🚀"
  }
]


function Description() {

  const navigate = useNavigate()
  const [ isClear, setIsClear ] = useState(false)
  const { theme, videoUrl, showVideoPlayer, setShowVideoPlayer } = useContext(ContextData)
  

  const handleProfileClick = e => {
    setShowVideoPlayer(true)
    window.localStorage.setItem('clear', videoUrl)
    setIsClear(false)
  }

  useEffect(() => {
    const clear = window.localStorage.getItem('clear')

    if(clear) {
      if(clear !== videoUrl) {
        setIsClear(true)
      }else {
        setIsClear(false)
      }
    }else {
      setIsClear(true)
    }
  }, [videoUrl])

  useEffect(() => {
    console.log(showVideoPlayer)
  }, [showVideoPlayer])

  return (
    <DescriptionStyled>
      <DescriptionContainer>
        {showVideoPlayer && (<VideoPlayer />)}
        <ImageContainer 
          onClick={handleProfileClick} 
          background={isClear ? 'linear-gradient(to right, #ffd000, #f600c6)' : theme.thirdBackground}>
            <Image
              src={profilePicture}
              border={theme.primaryBackground}
            />
        </ImageContainer>
        <Paragraph color={theme.primaryColor}>Hola soy <b> Carlos,</b></Paragraph>
        <Paragraph color={theme.primaryColor}>Me gusta la Pizza y jugar al Futbol.</Paragraph>
        <Paragraph color={theme.primaryColor}>Me dedico al <b>desarrollo de Software</b>.</Paragraph>
      </DescriptionContainer>

      <Tags>
          <TagsContainer>
            {
              tags.map((t,i) => (
                <TagLink 
                  key={i}
                  color={theme.primaryColor} 
                  defaultBackground={theme.primaryBackground} 
                  background={theme.secondaryBackground} 
                  hover={theme.thirdBackground} 
                  border={theme.border}
                  className={t.name.toLowerCase() === 'personal-projects'}
                  onClick={e => navigate(`/${t.name.toLowerCase().replace(' ', '-')}`)}>
                <Span>{t.icon}</Span> {t.name}
              </TagLink>
              ))
            }
          </TagsContainer>
        </Tags>
    </DescriptionStyled>
  )
}

export default Description