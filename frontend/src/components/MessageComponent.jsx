import React from 'react'
import {fileFormat} from '../lib/feature'
const MessageComponent = ({message,user}) => {
    const {attachments=[],content,_id,sender} = message
    console.log(attachments.length)
    const align = user._id === sender._id
  return (
    <div className={`${align ? 'self-end text-right' :'self-start text-left'} bg-slate-300 p-2 rounded-md`}>
        <div className='flex flex-col items-start justify-start gap-1'>
            <p className='text-blue-800 text-md'>{!align && sender.username}</p>
            <p>{content}</p>
            <div>
              {attachments.length >0 && attachments.map(i=>{
                const url = attachments.url
                const format = fileFormat(url)
                return <div key={url}>
                  <a href='' target='_blank' download>{format}</a>
                </div>
              })}
            </div>
        </div>
    </div>
  )
}

export default MessageComponent