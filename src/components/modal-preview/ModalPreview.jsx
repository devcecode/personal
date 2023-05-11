import React, { useContext } from 'react'
import { ContextData } from '../../context/ContextProvider'
import { ModalContainer, ModalStyled } from './styles/modal-preview'

function ModalPreview({ Component }) {
  const { theme, modalVisibility, setModalVisibility } = useContext(ContextData)

  const handleChangeModalVisibility = e => {
    e.stopPropagation()
    if(e.target.id === 'modal-preview') {
      setModalVisibility('')
    }
  }

  return (
    <ModalStyled 
    onClick={handleChangeModalVisibility} 
    background={theme.primaryBackground}>
      <ModalContainer id="modal-preview">{ Component }</ModalContainer>
    </ModalStyled>
  )
}

export default ModalPreview