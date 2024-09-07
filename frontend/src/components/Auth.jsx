import React, { useState } from 'react'
import { useInputValidation,useStrongPassword } from '6pp'
import { usernameValidator } from '../utils/validator'
const Auth = () => {
  const [Login,setLogin] = useState(false)
  const handle = ()=>{
    setLogin(!Login)
  }
  const email = useInputValidation("")
  const username = useInputValidation("",usernameValidator)
  const bio = useInputValidation("")
  const password = useStrongPassword()

  return (
    <div className='flex flex-row align-middle h-screen'>
        <div className='  mx-auto shadow-black shadow-md w-[60%] md:w-[30%] my-auto p-3 rounded-lg'>
          {!Login ? <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-3xl font-bold'>Login</p>
            <form className='flex flex-col items-center justify-center gap-6 w-full'>
            <input type='text' className=' w-[80%] flex flex-row items-center justify-center h-[40px]' 
            placeholder='Enter username'
            value={username.value}
            onChange={username.changeHandler} />
            {
              username.error && 
              <p className='text-red-600' variant='caption'>{username.error}</p>
            }
            <input type='password' className='w-[80%] flex flex-row items-center justify-center h-[40px]' placeholder='passcode' 
            value={password.value}
            onChange={password.changeHandler} />
            {
              password.error && 
              <p className='text-red-600' variant='caption'>{password.error}</p>
            }
            <button className='p-2 text-xl rounded-md bg-orange-500'>Sign In</button>
            </form>
            <div className='flex flex-row gap-1'>
            <p>Not signed in yet?</p>
            <p className='font-bold' onClick={handle}>Sign Up</p>
            </div>
            </div>
            
            :
            <div className='flex flex-col items-center justify-center gap-6'>
            <p className='text-3xl font-bold'>Register</p>
            <form className='flex flex-col items-center justify-center gap-6 w-full'>
            <input type='email' className=' w-[80%] flex flex-row items-center justify-center h-[40px]' placeholder='Enter Email'
            value={email.value}
            onChange={email.changeHandler} />
            <input type='text' className=' w-[80%] flex flex-row items-center justify-center h-[40px]' placeholder='Enter Username'
            value={username.value}
            onChange={username.changeHandler} />
            <input tpye='text' className=' w-[80%] flex flex-row items-center justify-center h-[40px]' placeholder='Enter Bio' 
            value={bio.value}
            onChange={bio.changeHandler} />
            <input type='password' className='w-[80%] flex flex-row items-center justify-center h-[40px]' placeholder='passcode'
            value={password.value}
            onChange={password.changeHandler} />
            <button className='p-2 text-xl rounded-md bg-orange-500'>Sign In</button>
            </form>
            <div className='flex flex-row gap-1'>
            <p>have an account?</p>
            <p className='font-bold' onClick={handle}>Login</p>
            </div>
            </div>
            }
    </div>
    </div>
  )
}

export default Auth