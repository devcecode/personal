import styled from 'styled-components'

export const VideoPlayerStyled = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 10000;
background-color: #333333;
display: flex;
flex-direction: column;
height: 100vh;

align-items: center;
overflow-y: auto;

&::-webkit-scrollbar {
  display: none;
}
`

export const VideoPlayerContainer = styled.div`
position: relative;
margin: 1.5em;
`

export const VideoControls = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
z-index: 10000000000;
padding: 1em;
`

export const Top = styled.div``

export const Bottom = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
`
export const Left = styled.div`
display: flex;
align-items: center;
`
export const Right = styled.div``

export const VideoContainer = styled.div`
position: relative;
`

export const Loaded = styled.div`
width: 54px;
height: 54px;
margin: 0 auto;
border: 5px solid transparent;
border-top-color: #ffffff;
border-right-color: #ffffff;
border-bottom-color: #ffffff;
border-radius: 50%;
animation: myAnimation 1s linear infinite;

@keyframes myAnimation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
`

export const Video = styled.video`
display: block;
object-fit: contain;
width: 90%;
margin: 0 auto;
max-width: 1300px;
height: auto;
border-radius: .5em;
`

export const CloseVideoPlayer = styled.button`
position: fixed;
top: 20px;
right: 20px;
z-index: 1000000;
border: none;
width: 40px;
height: 40px;
border-radius: 50%;
background-color: transparent;
cursor: pointer;

&:hover {
  background-color: #ffffff30;
}

display: flex;
justify-content: center;
align-items: center;
`

