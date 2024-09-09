import React from 'react'
import {Dialog} from '@mui/material'
import { useInputValidation } from '6pp'
import { use } from 'express/lib/router'
const SearchBar = ({open}) => {
  const search = useInputValidation('')
  return (
    <Dialog open>
      <div className='p-4 flex flex-col items-center justify-center gap-4'>
        <p className='text-xl'>Find People</p>
        <input value={search.value} onChange={search.changeHandler} className='w-[70%]' />
      </div>
    </Dialog>
  )

}

export default SearchBar