import React, { useState, useContext } from 'react'

import { Links, Name, ButtonPreview, Project, ProjectsContainer, ProjectsStyled, Repository, Site, TheProjectsContainer, Title, Video } from './styles/projects'

import Modal from '../modal/Modal.jsx'
import ModalPreview from '../modal-preview/ModalPreview.jsx'
import VideoElement from '../video-element/VideoElement.jsx'
import Preview from '../preview/Preview.jsx'

import { ContextData } from '../../context/ContextProvider'

import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'

const projects = [
    {
      "name": "Chat App of cero to Hero, no create-react-app, no create-vite, just webpack: React Context, globalStyles, styled-components, express, socket.io and More!",
      "repository": "https://github.com/devcecode/chat-app",
      "site": "https://devce-chat-app.up.railway.app",
      "video": "",
      "preview": " ",
      "images": [ one, two, three, four, five ]
    },
    {
    "name": "Employment Project(Rimac) - React Js",
    "repository": "https://github.com/devcecode/devce-rimac-app",
    "site": "https://devce-rimac-project.netlify.app/",
    "video": "",
    "preview": " ",
    "images": ["https://res.cloudinary.com/ddiahqich/image/upload/v1664201522/me/Rimac-mobile_rnvkrk.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201514/me/Rimac-desktop_ueflck.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201516/me/Rimac-home-mobile_ywykae.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201523/me/Rimac-home-desktop_yz7agz.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664214868/me/Rimac-welcome-mobile_qkdiul.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664214868/me/Rimac-welcome-desktop_wx8enu.png"]
  },
  {
    "name": "React Native - Complete Simple App",
    "repository": "",
    "site": "",
    "video": 'https://www.youtube.com/watch?v=sUTf_QE_eVg',
    "preview": " ",
    "images": ["https://res.cloudinary.com/ddiahqich/image/upload/v1664202048/me/Screenshot_from_2022-09-26_09-15-33_cxznmu.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664202048/me/Screenshot_from_2022-09-26_09-16-27_w7hvfw.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664202048/me/Screenshot_from_2022-09-26_09-18-07_di0wfq.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664202048/me/Screenshot_from_2022-09-26_09-19-18_bcpp5w.png"]
  },
  // {
  //   "name": "Complete Store App with MongoDB, Express, React Js and Node Js",
  //   "repository": "",
  //   "site": "https://devce-store.web.app/",
  //   "video": "",
  //   "preview": " ",
  //   "images": ["https://res.cloudinary.com/ddiahqich/image/upload/v1664201531/me/store-home-desktop_l1h6jk.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201532/me/store-home-login_v4wusm.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201530/me/store--products_ckf9yx.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201528/me/store-add--_hzb3xa.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201526/me/store-add-full_unsk1n.png"]
  // },
  {
    "name": "Complete Soccer App With (React And  public Rest API)",
    "repository": "",
    "site": "https://devce-cups.web.app/",
    "video": "",
    "preview": " ",
    "images": ["https://res.cloudinary.com/ddiahqich/image/upload/v1664201530/me/soccer-night-mobile_zvcdbf.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201530/me/soccer-night_mrwmoz.png"]
  },
  {
    "name": "Netflix Clone",
    "repository": "https://github.com/devcecode/netflix-clone",
    "site": "https://netflix-881d2.firebaseapp.com/",
    "video": "",
    "preview": " ",
    "images": ["https://res.cloudinary.com/ddiahqich/image/upload/v1664201522/me/netflix-mobile_zikyr1.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201534/me/netflix-desktop_glm4c0.png"]
  },
  {
    "name": "Food App",
    "repository": "https://github.com/devcecode/delish",
    "site": "https://delish-e62dd.firebaseapp.com/",
    "video": "",
    "preview": " ",
    "images": ["https://res.cloudinary.com/ddiahqich/image/upload/v1664201515/me/Delish-mobile_la2mhy.png", "https://res.cloudinary.com/ddiahqich/image/upload/v1664201523/me/Delish-dektop_aqisas.png"]
  },
  {
    "name": "Show/Hide Password",
    "repository": "https://github.com/devcecode/show-hide-password",
    "site": "https://show-hide-password.firebaseapp.com/",
    "video": "",
    "preview": "",
    "images": []
  }
]

function Projects() {

  const { theme, modalVisibility, setModalVisibility } = useContext(ContextData)

  const [ url, setUrl ]       = useState('')
  const [ images, setImages ] = useState([])

  const handleVideoClick = e => {
    setUrl(e.target.id)
    setModalVisibility('secondary-video')
  }

  return (
    <ProjectsStyled>
      {
        modalVisibility === 'secondary-video' && 
        (<Modal Component={<VideoElement src={url} />}/>)
      }

      {
        modalVisibility === 'preview' && 
        (<ModalPreview Component={<Preview src={url} images={images}/>}/>)
      }

      <ProjectsContainer>
        <Title color={theme.primaryColor}>👊 Projects.</Title>
        <TheProjectsContainer>
          {
            projects.map((p,i) => (
              <Project background={theme.secondaryBackground} key={i}>
                <Name color={theme.primaryColor}>{p.name}</Name>
                <Links>
                  {
                    p.preview && (
                      <ButtonPreview 
                      href="#" 
                      border={theme.border} 
                      color={theme.primaryColor} 
                      background={theme.border} 
                      onClick={e => {
                        e.preventDefault()
                        setImages(p.images)
                        setModalVisibility('preview')
                      }}>
                        <ion-icon name="eye-outline" style={{fontSize: '1.75em'}}></ion-icon>
                      </ButtonPreview>
                    )
                  }
                  {
                    p.repository && (
                      <Repository 
                      href={p.repository} 
                      target="_blank" 
                      border={theme.border} 
                      color={theme.primaryColor} 
                      background={theme.border}>
                        Repo
                      </Repository>) 
                  }
                  {
                    p.video && (
                      <Video 
                      href="#" 
                      id={p.video} 
                      border={theme.border} 
                      color={theme.primaryColor} 
                      background={theme.border} 
                      onClick={handleVideoClick}>
                        Video
                      </Video>
                    )
                  }
                  {
                    p.site && (
                      <Site 
                      href={p.site} 
                      target="_blank" 
                      border={theme.border} 
                      color={theme.primaryColor} 
                      background={theme.border}>
                        Site
                      </Site>
                    )
                  }
                </Links>
              </Project>
            ))
          }
        </TheProjectsContainer>
      </ProjectsContainer>
    </ProjectsStyled>
  )
}

export default Projects