import styled from 'styled-components'

export const PersonalProjectsStyled    = styled.div``

export const PersonalProjectsContainer = styled.div`
width: 98%;
max-width: 960px;
margin: 0 auto;
`

export const Title = styled.h2`
text-align: center;
font-size: 1.5em;
margin: 2.5em 0;
color: ${({ color }) => color};
font-family: 'Product Sans';
`

export const Projects = styled.div`
margin-top: 60px;
display: flex;
justify-content: center;
`
export const Project = styled.a`
display: block;
margin-bottom: 16px;
border-radius: 16px;
font-family: 'Roboto';
background-color: ${({ background }) => background};
margin-right: 16px;
min-height: 200px;
display: flex;
align-items: center;
justify-content: center;
color: ${({ color }) => color };
text-decoration: none;
padding: 2.5em;
font-family: 'Product Sans';
font-size: 1.2em;

&:hover {
  background-color: ${({ hoverBackground }) => hoverBackground};
}

`