import { useInputValidation } from '6pp'
import { Dialog } from '@mui/material'
import React from 'react'

const NewGroup = () => {
    const groupName = useInputValidation('')
    const [groupMembers,setGroupMembers] = useState([])
    const addMembers = (member_id)=>{
        setGroupMembers(prev=>(
            [...prev,member_id]
        ))
    }
  return (
    <Dialog open>
        <div className='p-4 flex flex-col items-center justify-center gap-3'>
            <p>GroupName</p>
            <input value={groupName.value} onChange={groupName.changeHandler} />
            <p>Add members</p>
            avatar name add-button 
            <div className='flex flex-row gap-2'>
                <button className='bg-gray-500'>Cancel</button>
                <button className='bg-green-500'>Create</button>
            </div>
        </div>
    </Dialog>
  )
}

export default NewGroup