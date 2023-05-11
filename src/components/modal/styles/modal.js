import styled from 'styled-components'

export const ModalStyled = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 10000;
background-color: rgba(0,0,0,.75);
`

export const ModalContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

height: 100vh;
width: 100%;
`