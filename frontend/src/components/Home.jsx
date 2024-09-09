import React from 'react'
import AppLayout from '../layout/AppLayout'

const Home = () => {
  return (
    <div className='bg-gray-400 rounded-md flex flex-col items-center justify-center'>
      <p className='text-3xl text-white'>Chat with people</p>
    </div>
  )
}

export default AppLayout()(Home)