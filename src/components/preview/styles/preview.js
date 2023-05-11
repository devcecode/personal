import styled from "styled-components";

export const PreviewStyled = styled.div`
width: 95%;
max-width: 960px;
margin: 0 auto;
`

export const Top = styled.div`
overflow-x: scroll;
margin-bottom: 2em;
padding-bottom: 1em;
&::-webkit-scrollbar {
  display: none;
}
`
export const TopContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
/* width: 150%; */
`

export const Miniature = styled.div`
margin: 0 .5em;
border-radius: .25em;
overflow: hidden;
margin-bottom: 1em;
opacity: .35;
&:hover {
  opacity: 1;
}
&:last-child {
  margin-right: 0;
}
`

export const MiniatureImage = styled.img`
display: block;
max-height: 100px;
max-width: 100px;
cursor: pointer;
`

export const Bottom = styled.div`
display: flex;
justify-content: center;
`

export const MainImage = styled.img`
/* max-width: 100%; */
max-height: 700px;
max-width: 100%;
@media(min-width: 1200px) {
  max-width: 180%;
}
object-fit: contain;
/* border-radius: .75em; */
`