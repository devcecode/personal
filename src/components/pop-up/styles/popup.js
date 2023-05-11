import styled from 'styled-components'

export const PopupStyled    = styled.div`
position: fixed;
top: 150px;
right: 0px;
width: 300px;
padding: 1em;
border-top-left-radius: 1em;
border-bottom-left-radius: 1em;
background-color: ${({ background }) => background};

display: flex;
justify-content: center;
display: none;

@media(min-width: 800px) {
  display: block;
}
`
export const PopupContainer = styled.div``

export const Message = styled.p`
margin-bottom: .5em;
font-family: 'Product Sans';
color: ${({ color }) => color};
font-size: .85em;
line-height: 1.25em;
`

export const ProgressContainer = styled.div`
border-radius: 2px;
background-color: #1e90ff20;
`
export const Progress = styled.div`
height: 4px;
background-color: dodgerblue;
border-radius: 2px;
`

export const Title = styled.h2`
margin-bottom: .5em;
font-size: 1em;
font-family: 'Product Sans';
color: ${({ color }) => color};
`