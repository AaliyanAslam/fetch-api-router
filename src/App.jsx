import React from 'react'
import { Outlet } from 'react-router-dom'
import DrawerAppBar from './components/Navbar'

const App = () => {
  return (
<>
<DrawerAppBar/>
<Outlet />
</>


  )
}

export default App