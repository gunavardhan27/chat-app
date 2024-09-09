import React from 'react'
import ChatItem from './ChatItem'

const ChatList = ({chats}) => {
    const onlineUsers = ['1']
  return (
    <div className='flex flex-col items-start justify-start m-2'>
        {chats?.map(data=>{
            const {_id,name,members} = data
            const isOnline=members?.some(member=>onlineUsers.includes(member))
            return <ChatItem name={name} newMessagesAlert={{count:4,chatId:_id}} members={members} chatId={_id} isOnline={isOnline} />
        })}
    </div>
  )
}

export default ChatList