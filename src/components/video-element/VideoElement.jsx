import React, { useContext, useState } from 'react'
import { Video, VideoElementStyled } from './styles/video-element'

import ReactPlayer from 'react-player'
import { ContextData } from '../../context/ContextProvider'

function VideoElement({ src }) {

  const { theme } = useContext(ContextData)
  const [ isLoad, setIsLoad ] = useState(false)
  return (
    <VideoElementStyled background={theme.primaryBackground}>
      <ReactPlayer url={src} controls style={{borderRadius: '.5em', overflow: 'hidden'}}/>
    </VideoElementStyled>
  )
}

export default VideoElement