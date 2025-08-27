import React from 'react'

const Header = ({Details}) => {


const clickHandler=()=>{
localStorage.removeItem(`UserDetails`)
window.location.reload();
}

  return (
    <div className='flex justify-between px-4 py-3 items-center w-full h-[25%] text-white'>
      <h1 className='text-2xl font-medium'>  HELLO <br /><span className='text-3xl font-semibold'>{Details?.username}👋</span></h1>
      <button onClick={clickHandler} className='bg-red-600 font-bold rounded-full text-white py-4 px-8 '>LOG OUT</button>
    </div>
  )
}

export default Header
