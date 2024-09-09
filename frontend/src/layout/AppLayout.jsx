import React from 'react'
import Header from './Header'
import ChatList from '../components/ChatList'
import { chats } from '../constants/DuplicateChats'
import Profile from '../components/Profile'
const AppLayout = ()=> (WrappedComponent) => {
return (props)=>{
  return (
    <div>
        <Header />
        <div className='grid grid-cols-3 h-screen'>
          <ChatList chats={chats} />
        <WrappedComponent {...props} /> 
        <Profile />
        </div>
        
    </div>
  )
}
}


export default AppLayout