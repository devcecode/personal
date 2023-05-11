import styled from 'styled-components'

export const SkillsStyled    = styled.div`
padding: 0 1em;
`

export const SkillsContainer = styled.div`
max-width: 800px;
margin: 0 auto;
`
export const Title           = styled.h2`
font-size: 1.5em;
text-align: center;
color: ${({ color }) => color};
margin: 2.5em 0;
font-family: 'Product Sans';
`

export const SkillsContent = styled.div`
overflow-x: auto;
margin: 0 auto;
width: 100%;
max-width: 800px;
padding-bottom: 2.5em;

&::-webkit-scrollbar {
  /* width: 4px;
  height: 4px; */
  display: none;
}
&::-webkit-scrollbar-track {
  background: ${({ scrollBarTrackColor }) => scrollBarTrackColor};
  border-radius: 1em;
}

&::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background: ${({ scrollBarThumbColor }) => scrollBarThumbColor};
}
`

export const AllSkills = styled.div`
width: 100%;
min-width: 1200px;
`

export const Skill = styled.div`
border-radius: 1em;
padding: 2.5em;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Product Sans';
&:hover {
  cursor: pointer;
  background-color: ${({ background}) => background };
}
`