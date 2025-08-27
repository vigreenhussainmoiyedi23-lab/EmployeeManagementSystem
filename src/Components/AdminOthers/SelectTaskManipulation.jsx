import React from 'react'

const SelectTaskManipulation = ({setTaskManipulation}) => {
  return (
       <div className='w-full flex items-center justify-center'>
      <div className='w-[max(80%,300px)] h-[50px] bg-gray-400 text-white text-3xl flex justify-evenly items-center rounded-full overflow-hidden'>
        <button
         onClick={(e)=>{
          e.target.style.backgroundColor=`#222`;
          document.querySelector(`#delete`).style.backgroundColor=`#9CA3AF`;
          setTaskManipulation(`create`)
        }}
         id='create'
          className='create border-r-[3px] hover:bg-gray-500 active:bg-gray-950 border-r-black w-[50%] h-[100%]'
          >Create Task</button>
        <button 
        onClick={(e)=>{
          e.target.style.backgroundColor=`#222`;
          document.querySelector(`#create`).style.backgroundColor=`#9CA3AF`;
          setTaskManipulation(`delete`)
        }} 
        id='delete'
        className=' border-l-[3px] hover:bg-gray-500 active:bg-gray-950 border-l-black w-[50%] h-[100%]'
        >Delete Task</button>
        </div>
      </div>
  )
}

export default SelectTaskManipulation
