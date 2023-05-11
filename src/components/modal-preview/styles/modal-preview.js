import styled from 'styled-components'

export const ModalStyled = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 10000;
background-color: #50505050;
backdrop-filter: saturate(50%) blur(45px);
`

export const ModalContainer = styled.div`
width: 100%;
overflow-y: scroll;
padding-bottom: 1em;
padding-top: 48px;
height: 100vh;

&::-webkit-scrollbar {
  display: none;
}
`