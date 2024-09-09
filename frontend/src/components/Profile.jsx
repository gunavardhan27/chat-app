import React from 'react'

const Profile = () => {
  return (
    <div className='bg-black flex flex-col items-center justify-start p-4 gap-3'>
        <p className='bg-white w-[180px] h-[180px] rounded-full'>
        </p>    
        <ProfileCard text={'dgivna'} heading={'bio'} />
    <ProfileCard text={'gunaV'} heading={'username'} />
    <ProfileCard text={'Guna Vardhan'} heading={'Name'} />
    <ProfileCard text={'3 months ago'} heading={'joined'} />
    </div>
  )
}



const ProfileCard = ({text,heading}) => <div className='flex flex-col items-center justify-center gap-1'>
    <p className='text-xl text-white'>{text}</p>
    <p className='text-md text-gray-500'>{heading}</p>
</div>


export default Profile
