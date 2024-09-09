import React from 'react'
import { Link, useParams } from 'react-router-dom'
const ChatItem = ({name,newMessagesAlert,members,chatId,isOnline}) => {
  const params = useParams()
  return (
    <Link to={`chat/${chatId}`} className={`w-[80%] ${params.chatId===chatId && 'bg-black text-white'} rounded-lg`}>
    <div className='flex flex-row items-center justify-between p-3 hover:bg-slate-300 rounded-lg'>
        <div className='basis-3/4 flex flex-col items-start justify-center'>
            {name}
            
        </div>
        <div className='basis-1/4'>
            <div className={`${isOnline && 'w-1 p-1 rounded-full bg-green-600'}`}></div>
        </div>

    </div>
    </Link>
  )
}

export default ChatItem