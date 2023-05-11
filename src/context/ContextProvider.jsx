import React, { createContext, useState } from 'react'
import { themeSchema } from '../theme-schema/themeSchema'

const videoUrl = 'https://res.cloudinary.com/dwqar4k0g/video/upload/v1683806254/me/search-engine.webm'

const darkMode     = window.localStorage.getItem('dark-mode')
const currentTheme = !darkMode ? themeSchema.light : themeSchema.night

export const ContextData = createContext()

export const ContextProvider = ({ children }) => {

  const [ theme, setTheme ] = useState(currentTheme)
  const [ modalVisibility, setModalVisibility ] = useState('')
  const [ showVideoPlayer, setShowVideoPlayer ] = useState(false)

  return (
    <ContextData.Provider value={{
      themeSchema,
      videoUrl,
      theme,
      setTheme,
      modalVisibility,
      setModalVisibility,
      showVideoPlayer,
      setShowVideoPlayer
    }}>
      { children }
    </ContextData.Provider>
  )
}