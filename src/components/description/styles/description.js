import styled from "styled-components";

export const DescriptionStyled = styled.div`
margin: 3em 0;
`
export const DescriptionContainer = styled.div`
text-align: center;
`

export const Paragraph = styled.p`
display: flex;
justify-content: center;
font-family: 'Product Sans';
line-height: 2.3em;
color: ${({ color }) => color};
font-size: 1.2em;
`

export const ImageContainer = styled.div`
display: inline-block;
width: 140px;
height: 140px;
background: ${({ background }) => background};
/* background-color: #e6e6e6; */
border-radius: 50%;
padding: .25em;
cursor: pointer;
user-select: none;
transition: .25s transform;

&:hover {
  transform: scale(.95);
}
`

export const Image = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
object-fit: cover;
overflow: hidden;
border: 4px solid ${({ border }) => border};
`


export const Tags = styled.div`
margin: 2.5em 0;
@media(min-width: 760px) {
  margin: 5em 0;
}
`
export const TagsContainer = styled.div`
  grid-gap: 4px;
  @media(min-width: 760px) {
    grid-template-columns: repeat(12, 1fr);
    display: grid;
}
`

export const TagLink = styled.button`
color: ${({ color }) => color};
text-decoration: none;
font-size: 1.2em;
border: none;
cursor: pointer;
border: none;
width: 100%;
margin-bottom: 8px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
padding: 1em;
background-color: ${({ defaultBackground }) => defaultBackground};
font-family: 'Product Sans';

&:hover {
  background-color: ${({ hover }) => hover};
}

@media(min-width: 760px) {
  background-color: ${({ background }) => background};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 0;
  margin: 0;
  min-height: 200px;
  &:nth-child(1) {
    border-top-left-radius: 1em;
    grid-area: 1 / 1 / span 3 / span 6;
  }
  &:nth-child(2) {
    grid-area: 4 / 1 / span 3 / span 6;
    border-bottom-left-radius: 1em;
  }
  
  &:nth-child(3) {
    border-top-right-radius: 1em;
    border-bottom-right-radius: 1em;
    grid-area: 1 / 7 / span 6 / span 6;
  }
}
`

export const Span = styled.span`
font-size: 2em;
margin-right: .5em;
@media(min-width: 760px) {
  margin-right: 0;
  margin-bottom: .5em;
}
`