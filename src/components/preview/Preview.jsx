import React from 'react'
import { useState } from 'react'
import { Bottom, MainImage, Miniature, MiniatureImage, PreviewStyled, Top, TopContainer } from './styles/preview'
function Preview({ images }) {

  const [ currentImage, setCurrentImage ] = useState(images[0])
  
  return (
    <PreviewStyled>
      <Top>
        <TopContainer>
          {
            images.map((image, i) => (
              <Miniature style={currentImage === image ? {opacity: 1} : {}}>
                <MiniatureImage 
                src={image} 
                onClick={e => setCurrentImage(e.target.src)}/>
              </Miniature>
            ))
          }
        </TopContainer>
      </Top>
      <Bottom>
        <MainImage 
        src={currentImage} 
        onLoad={e => { e.target.style.border = '1px solid #ffffff10' }}/>
      </Bottom>
    </PreviewStyled>
  )
}

export default Preview