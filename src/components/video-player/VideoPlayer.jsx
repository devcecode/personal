import React, { useContext, useState, useRef, useEffect } from 'react'

import { ContextData } from '../../context/ContextProvider.jsx'

import {
  Video, 
  VideoContainer, 
  VideoPlayerContainer, 
  VideoPlayerStyled,
  Loaded,
} from './styles/videoPlayer.js'


function VideoPlayer() {
  const { theme, videoUrl, setShowVideoPlayer } = useContext(ContextData)
  const [ loadedVideo, setLoadedVideo ]  = useState(false)

  const handleLoadedVideo = () => setLoadedVideo(true)

  const close = e => e.target.id === 'video-player' && setShowVideoPlayer(false)

  return (
    <VideoPlayerStyled 
      id="video-player" 
      background={theme.primaryBackground} 
      onClick={close}>
        <h2 style={{color: theme.primaryColor, margin: '2.5em 0', fontFamily: 'Product Sans', fontSize: '1.5em'}}>Implement a optimal Search Engine</h2>
      <VideoPlayerContainer>
        <VideoContainer>

        <Video 
          src={videoUrl}
          onLoadedData={handleLoadedVideo}
          style={!loadedVideo ? { display: 'none'} : { display: 'block' }}
          autoPlay
          controls/>
          
          {!loadedVideo && <Loaded border={theme.primaryBorder}></Loaded>}
        </VideoContainer>
      </VideoPlayerContainer>
    </VideoPlayerStyled>
  )
}

export default VideoPlayer
