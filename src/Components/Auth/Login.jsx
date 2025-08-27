import React from 'react'
import { useState } from 'react'

const Login = ({Loginhandler}) => {

  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState(``)

  const SubmitHandler = (e) => {
    e.preventDefault()
    Loginhandler(email,password)
    setEmail(``)
    setPassword(``)
  }

  return (
    <>
      <div className='items-center justify-center h-full w-full flex  bg-gradient-to-tr to-[#000c25]   from-[#015f81] '>
        <div className='border-2 border-gray-600 bg-gradient-to-tl from-[#000c25]   to-[#015f81] h-[max(60%,325px)] w-[max(300px,60%)] flex items-center justify-center flex-col'>
          <h1  className='text-center text-5xl font-bold text-yellow-100 text-shadow-red-500 mb-5'>Login</h1>
          <form onSubmit={(e) => { SubmitHandler(e) }}
            className='flex flex-col   items-center justify-center gap-2 text-white px-5 py-5 '>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                
              }}
              required
              className='bg-transparent rounded-full p-2 border-2 border-gray-600' type="email" placeholder='Enter your Email'
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
              className='rounded-full p-2 border-2 bg-transparent border-gray-600'
              type="password" placeholder='Enter Your Password'
            />
            {/* <button className='bg-red-600 rounded-4xl z-20 px-4 py-2 border-[1px] border-t-yellow-200 drop-shadow-white'>Log in</button> */}
            <button className='bg-[#00ffaa] text-gray-800 font-bold rounded-4xl z-20 px-4 py-2 border-[1px] border-t-yellow-200 drop-shadow-white'>Log in</button>
          </form>
        </div>

      </div>
    </>
  )
  
}
export default Login