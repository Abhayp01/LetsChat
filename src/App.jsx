import { useState } from 'react'
import Contacts from './components/contact/contact'
import Chat from './components/chat/chat'
function App() {


  return (
    <>
    <div className='h-screen flex' >
    <Contacts/>  
    <Chat/>
    </div>
    </>
  )
}

export default App
