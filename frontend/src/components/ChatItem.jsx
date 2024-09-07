import React from 'react'
import { Link } from 'react-router-dom'
const ChatItem = ({name,newMessagesAlert,members,chatId,isOnline}) => {
  return (
    <Link to={`chat/${chatId}`} className='w-full'>
    <div className='flex flex-row items-center justify-center w-full p-3 hover:bg-slate-300'>
        <div className='basis-3/4 flex flex-col items-center justify-center'>
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