import React, { useContext} from 'react'
import { ModalContainer, ModalStyled } from './styles/modal'
import { ContextData } from '../../context/ContextProvider.jsx'

function Modal({ Component }) {
  const { theme, modalVisibility, setModalVisibility } = useContext(ContextData)

  const handleChangeModalVisibility = e => {
    e.stopPropagation()
    if(e.target.id === 'modal') {
      setModalVisibility('')
    }
  }

  return (
    <ModalStyled 
    onClick={handleChangeModalVisibility} 
    background={theme.primaryBackground}>
      <ModalContainer id="modal">{ Component }</ModalContainer>
    </ModalStyled>
  )
}

export default Modal