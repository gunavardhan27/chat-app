import {React,Suspense} from 'react'
import SearchBar from '../components/SearchBar' 
import {Notifications,GroupAdd} from '@mui/icons-material'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import Notification from '../components/Notifications';
import NewGroup from '../components/NewGroup';
const Header = () => {
  const [isSearch,setSearch] = useState(false)
  const handleSearch = ()=>{
    setSearch(!isSearch)
    console.log(isSearch)
  }
  return (
    <div className='h-[50px] bg-red-500 text-white shadow-black shadow-md z-50 flex flex-row items-center justify-between relative'>
        <p className='basis-2/3 text-3xl font-bold'>Chatio</p>
        <div className='basis-1/3 flex flex-row items-center justify-start gap-8'>
          <FaSearch className='' onClick={handleSearch} />
          <Notifications className='' />
          <GroupAdd />
          {isSearch &&
          <Suspense fallback={<div>wait...</div>}>
            <SearchBar />
          </Suspense>
          }
        </div>
    </div>
  )
}

export default Header