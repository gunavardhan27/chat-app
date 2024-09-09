import { Dialog } from '@mui/material'
import React from 'react'

const Notification = () => {
  return (
    <Dialog open>
        <div className='flex flex-col items-center justify-center p-4'>
            <p className='text-xl'>Notifications
            </p>
            <p>0 Notifications</p>
        </div>
    </Dialog>
  )
}

export default Notification