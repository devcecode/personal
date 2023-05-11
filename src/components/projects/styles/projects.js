import styled from 'styled-components'

export const ProjectsStyled = styled.div`
padding: 0 1em;
`
export const ProjectsContainer = styled.div`
max-width: 800px;
margin: 0 auto;
`
export const Title = styled.h2`
font-size: 1.5em;
text-align: center;
margin: 2.5em 0;
color: ${({ color }) => color};
font-family: 'Product Sans';
`

export const TheProjectsContainer = styled.div`
`

export const Project = styled.div`
padding: 1em 0;
transition: .25s all;
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;
transition: .25s all;
font-family: 'Product Sans';
`

export const Name = styled.p`
transition: .25s all;
color: ${({ color }) => color};
margin-right: .5em;
font-size: 1.25em;
line-height: 1.5em;
letter-spacing: 0.2px;
@media(min-width: 760px) {
  font-size: 1.25em;
}
`
export const Links = styled.div`
display: flex;
`


export const ButtonPreview = styled.a`
padding: .5em 1em;
text-decoration: none;
color: ${({ color }) => color}8d;
margin-left: .5em;
border-radius: .6em;
border: none;
font-size: 1em;
font-weight: 700;
transition: .25 all;

display: flex;
align-items: center;
justify-content: center;

&:hover {
  color: ${({ color }) => color};
}
`
export const Repository = styled.a`
display: block;
padding: .5em 1em;
text-decoration: none;
color: ${({ color }) => color};
border: 5px solid #ffd3aa;
margin-left: .5em;
border-radius: .6em;
font-size: 1em;
background-color: #ff8e24;
font-weight: 700;
transition: .25 all;

&:hover {
  transform: rotate(-3deg);
}
`
export const Site = styled.a`
display: block;
padding: .5em 1em;
text-decoration: none;
color: ${({ color }) => color};
border: 5px solid #aed6ff;
border-radius: .6em;
font-size: 1em;
background-color: dodgerblue;
font-weight: 700;
transition: .25 all;
margin-left: .5em;
&:hover {
  transform: rotate(-3deg);
}
`

export const Video = styled.a`
display: block;
padding: .5em 1em;
text-decoration: none;
color: ${({ color }) => color};
border: 5px solid #ff9eff;
margin-left: .5em;
border-radius: .6em;
font-size: 1em;
cursor: pointer;

background-color: #ff00ff;
font-weight: 700;
transition: .25 all;
&:hover {
  transform: rotate(-3deg);
}
`