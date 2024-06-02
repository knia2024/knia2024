import { useState } from 'react'

import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Project from './components/Project'
import Contacts from './components/contacts'

function App() {
  

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Project />
      <Contacts />

    </div>
  )
}

export default App
