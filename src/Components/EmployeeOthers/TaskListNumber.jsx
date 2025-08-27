import React from 'react';

const TaskListNumber = ({ Details }) => {
  // fallback in case Details is missing
  const { 
    active: ActiveTask = 0, 
    new: NewTask = 0, 
    completed: CompletedTask = 0, 
    failed: FailedTask = 0 
  } = Details?.taskCounter || {};

  return (
    <div className='flex w-full px-4 py-2 flex-wrap justify-center items-center gap-5 text-white'>
      <div className='w-[300px] bg-yellow-400 px-4 py-4 rounded-3xl'>
        <h1 className='text-5xl font-bold'>{NewTask}</h1>
        <h2 className='text-2xl font-semibold'>New Task</h2>
      </div>
      <div className='w-[300px] bg-blue-600 px-4 py-4 rounded-3xl'>
        <h1 className='text-5xl font-bold'>{ActiveTask}</h1>
        <h2 className='text-2xl font-semibold'>Active Task</h2>
      </div>
      <div className='w-[300px] bg-red-600 px-4 py-4 rounded-3xl'>
        <h1 className='text-5xl font-bold'>{FailedTask}</h1>
        <h2 className='text-2xl font-semibold'>Failed Task</h2>
      </div>
      <div className='w-[300px] bg-green-600 px-4 py-4 rounded-3xl'>
        <h1 className='text-5xl font-bold'>{CompletedTask}</h1>
        <h2 className='text-2xl font-semibold'>Completed Task</h2>
      </div>
    </div>
  );
};

export default TaskListNumber;
