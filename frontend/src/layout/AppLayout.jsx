import React from 'react'
import Header from './Header'
import ChatList from '../components/ChatList'
import { chats } from '../constants/DuplicateChats'
const AppLayout = ()=> (WrappedComponent) => {
return (props)=>{
  return (
    <div>
        <Header />
        <div className='grid grid-cols-3 h-screen gap-3'>
          <ChatList chats={chats} />
        <WrappedComponent {...props} /> 
        <div className='bg-gray-600'>Third</div>
        </div>
        
    </div>
  )
}
}


export default AppLayout