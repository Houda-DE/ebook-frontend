import Authentication from '../component/Authentication'
import Welcome from '../component/Welcome'
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar'
import { useState } from 'react'

export default function Home() {

  const [open , setOpen] = useState(false)

  return (
    <div style={{minHeight : '100vh' , backgroundColor : '#222629' , minWidth : '100vw' , maxWidth : '100vw' , position : 'relative'}}>
      <Navbar setOpen = {setOpen}/>
      <Sidebar/>
      <Welcome/>
      <div style={{position : 'absolute' , top : '75px' , left : '40%'}}>
        {
          open === true ? 
            <Authentication open={open} setOpen={setOpen}/>
          : ""
        }
      </div>
    </div>
  )
}
