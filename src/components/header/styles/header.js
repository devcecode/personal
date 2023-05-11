import styled from 'styled-components'

export const HeaderStyled = styled.header`
padding: 0 1em;
`

export const HeaderContainer = styled.div`
max-width: 800px;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
height: 100px;
`

export const Left = styled.div``

export const Right = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const ChangeMode = styled.div`
position: relative;
`

export const ChangeModeContainer = styled.div`
user-select: none;
height: 26px;
width: 44px;
background-color: ${({ background }) => background};
border-radius: 2em;
/* transition: .25s all; */
position: relative;
cursor: pointer;
`

export const ChangeModeIcon = styled.div`
width: 22px;
height: 22px;
background-color: ${({ background }) => background};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
transition: .25s all;
position: absolute;
top: 2px;
`

export const SocialMediaContainer = styled.div`
display: flex;
justify-content: center;
border-radius: 5em;
align-items: center;
justify-content: flex-start;
`

export const Social = styled.a`
color: ${({ color }) => color };
text-decoration: none;
transition: .25s all;
font-size: 1.7em;
margin-left: .25em;
display: flex;
align-items: center;
&:hover {
  color: ${({ hoverColor }) => hoverColor};
}
&:last-child {
  margin-right: 0px;
}
`

export const ShortCut = styled.div`
position: absolute;
bottom: -16px;
color: #dddddd;
font-weight: 300;
font-size: .7em;
color: ${({ color }) => color};
padding-left: .35em;
font-family: 'Product Sans';
`