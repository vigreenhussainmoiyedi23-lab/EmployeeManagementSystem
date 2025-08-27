import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = ({ Details, UpdateDetails }) => {
  const employees = Details;
  const formatted = d => `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
 
 
  const submitHandler = (e) => {
    e.preventDefault()

    if (!employees.length) return;
    
    const GiveTaskTo = employees.find(n => n.username == assignTo)
    const tasksDate = new Date(date)
    const duedate = new Date(tasksDate.setDate(tasksDate.getDate() + 10))

    const Task = {
      "active": false,
      "NewTask": true,
      "FailedTask": false,
      "CompletedTask": false,
      "TaskTitle": title,
      "TaskDescription": TaskDescription,
      "TaskCategory": categoury,
      "TaskDate": date,
      "DueDate": formatted(duedate)
    }

    GiveTaskTo.taskCounter = {
      ...GiveTaskTo.taskCounter,
      new: GiveTaskTo.taskCounter.new + 1
    }

    GiveTaskTo.task.push(Task)

    const index = Number(GiveTaskTo.id) - 1

    employees.splice(index, 1, GiveTaskTo)

    localStorage.setItem(`employees`, JSON.stringify(employees))
    UpdateDetails([...employees])
    setAssignTo(`Alice`); setDate(``); setTaskDescription(``); setTitle(``); setCategoury(``)
  }

  const [title, setTitle] = useState(``)
  const [date, setDate] = useState(``)
  const [assignTo, setAssignTo] = useState(`Alice`)
  const [categoury, setCategoury] = useState(``)
  const [TaskDescription, setTaskDescription] = useState(``)

  return (
    <form onSubmit={submitHandler}
      className='w-full flex items-center justify-center text-white'>
      <div className='border-[1px] flex gap-20 w-[90%] h-full bg-[#222] justify-between items-start px-5 py-4'>
        <div className='w-[40%] flex flex-col items-center justify-start'>
          <h1 className='font-semibold text-xl '>Title</h1>
          <input required value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} type="text" placeholder='Create a ... || Make a...' className='px-3 py-2 border-[1px] rounded-2xl text-white border-gray-300' />
          <h1 className='font-semibold text-xl '>Date</h1>
          <input required value={date} onChange={(e) => {
            setDate(e.target.value)
          }} type="date" className='px-3 py-2 border-[1px] rounded-2xl text-white border-gray-300' />
          <h1 className='font-semibold text-xl '>Assign TO</h1>
          <select required value={assignTo} onChange={(e) => {
            setAssignTo(e.target.value)
          }} id="myDropdown" name="dropdownOptions" placeholder='Employees name' className='px-3 py-2 rounded-3xl  border-[1px] overflow-hidden border-gray-300'>
            {employees.map((element, idx) => {
              return <option value={element.username} key={`option-${idx}`} className='bg-gray-700 font-medium w-1/2'>{element.username}</option>
            })}
          </select>
          <h1 className='font-semibold text-xl '>Category</h1>
          <input required value={categoury} onChange={(e) => {
            setCategoury(e.target.value)
          }} type="text" placeholder='Dev,Design,ETC' className='px-3 py-2 border-[1px] rounded-2xl text-white border-gray-300' />

        </div>
        <div className='flex items-start justify-start flex-col w-[60%] h-full'>
          <div className='flex items-center justify-center flex-col w-full h-full'>
            <h1 className='text-2xl font-bold'>Description</h1>
            <textarea required value={TaskDescription} onChange={(e) => {
              setTaskDescription(e.target.value)
            }} className='w-[100%] h-[100px] resize-none bg-transparent border-[1px] border-gray-400 text-gray-300 ' name="description" id="description" placeholder='task description what to do and how to do it'></textarea>
          </div>
          <button disabled={!employees.length} className='rounded-3xl w-[50%] h-[20%] px-4 py-2 bg-emerald-400 text-xl font-semibold text-center disabled:opacity-50 disabled:cursor-not-allowed'>Create Task</button>
        </div>
      </div>
    </form>
  )
}

export default CreateTask
