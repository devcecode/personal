import styled from 'styled-components'

export const VideoElementStyled = styled.div`
border-radius: .5em;
overflow: hidden;
background-color: red;
border: 1px solid #ffffff;
background-color: ${({ background }) => background};
`

export const Video = styled.video`
display: block;
max-width: 100%;
max-height: 80vh;
object-fit: contain;
`