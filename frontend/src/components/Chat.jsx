import React from 'react'
import AppLayout from '../layout/AppLayout'
import {AttachFile,Send} from '@mui/icons-material'
import { sampleMessages } from '../constants/DuplicateChats'
import { useInputValidation } from '6pp'
import MessageComponent from './MessageComponent'
const Chat = () => {
  const message = useInputValidation('')
  const user = {
    _id:3,
    username:'guna'
  }
  return (
    <div className='flex flex-col items-center justify-end pb-16'>
      <div className='w-full flex flex-col m-4'>
      {sampleMessages?.map((i)=>{
        return <MessageComponent key={i._id} message={i} user={user} />
      })}
      </div>
      <div className='flex flex-row items-center justify-center w-full'>
        <AttachFile className='basis-1/12' />
        <input className='basis-10/12 bg-slate-300 rounded-md h-[35px]' placeholder='Enter meesage here' value={message.value} onChange={message.changeHandler}  />
        <div className='basis-1/12 flex flex-row items-center justify-center'>
        <Send />
        </div>
      </div>
    </div>
  )
}

export default AppLayout()(Chat)