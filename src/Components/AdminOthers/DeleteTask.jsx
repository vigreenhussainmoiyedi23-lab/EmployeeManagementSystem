import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'



const CreateTask = ({ Details, UpdateDetails }) => {
  const [employees, setEmployees] = useState(Details)
  const submitHandler = (e) => {
    e.preventDefault()
    if (!title) return
    const targettedEmp = employees.find(m => m.username == empNAME)
    const targettedTask = targettedEmp.task.find(e => e.TaskTitle == title)
    const TaskName=(targettedTask)=>{for (const key in targettedTask) {
      if (Object.prototype.hasOwnProperty.call(targettedTask, key)) {
        const element = targettedTask[key];
        console.log(element,key)
        if (element==true) {
          return (key==`NewTask`) ?`new`:(key==`active`)?`active`:(key==`CompletedTask`)?`completed`:`failed`
        }
      }
    }}
    const TaskCounterPropertyToBeChanged=TaskName(targettedTask)
    const newTaskCounter = {
      // 1. Spread all properties from the original TaskCounter
      ...targettedEmp.taskCounter, 
      
      // 2. Use computed property syntax with the variable name
      [TaskCounterPropertyToBeChanged]:targettedEmp.taskCounter[TaskCounterPropertyToBeChanged] -1 // Your desired update
    };
    setMessage(`Deleting the task`)
    const Taskindex = targettedEmp.task.findIndex(n => n == targettedTask)
    targettedEmp.task.splice(Taskindex, 1)
    targettedEmp.taskCounter=newTaskCounter
    const empindex = employees.findIndex(n => n.username == empNAME)
    const employeesCopy = [...employees]
    employeesCopy.splice(empindex, 1, targettedEmp)
    setEmployees(employeesCopy)
    UpdateDetails([...employees])
    setTimeout(() => {
      setMessage(null)
    }, 2000);
  }
  const [message, setMessage] = useState(null)
  const [empNAME, setEmpNAME] = useState(`Alice`)
  const [title, setTitle] = useState(null)

  return (
    <>

      {(message) ? <div className='absolute top-0 z-90 text-3xl bg-red-600 text-white font-bold w-[50%] h-[max(50px,10%)] capitalize text-center left-[45%] translate-x-[-45%] rounded-b-full'>{message}</div> : ``}
      <form onSubmit={submitHandler}
        className='w-full flex items-center justify-center text-white relative'>
        <div className='w-[90%] flex items-center flex-col justify-center border-[1px] bg-[url(../../../public/pexels-ahmedadly-1270184.jpg)] rounded-2xl bg-center bg-cover border-amber-300 py-2 z-10 gap-5'>
          <h1 className='bg-transparent w-[100%] text-center [-webkit-text-stroke:1px_black] font-bold text-2xl text-yellow-200'>Select The Employee</h1>
          <select
            name="employee" id="employees"
            className='bg-transparent rounded-full px-5 py-2 text-center [-webkit-text-stroke:1px_black] font-bold text-2xl text-amber-300'
            value={empNAME} onChange={(e) => { setEmpNAME(e.target.value); console.log(empNAME) }}
          >
            {employees.map((m, idx) =>
              <option key={`Emp-option-${idx}`} className='odd:bg-gray-300 even:bg-gray-500 bg-gray-700' value={m.username}>{m.username}</option>
            )}
          </select>

          {(employees.find(n => n.username == empNAME)) ?
            (employees.find(n => n.username == empNAME).task.length > 0) ?
              <>
                <h1 className='bg-transparent w-[100%] text-center [-webkit-text-stroke:1px_black] font-bold text-2xl text-yellow-200'>Select The Employee's Task</h1>


                <select name="employee" id="employees"
                  className='bg-transparent rounded-full px-5  text-center [-webkit-text-stroke:1px_black] font-bold text-2xl text-amber-300'
                  onChange={(e) => { setTitle(e.target.value); }}
                >
                  <option
                    className='odd:bg-gray-300 even:bg-gray-500 bg-gray-700'
                    value={null}>Select a task from below</option>
                  {employees.find(n => n.username == empNAME).task.map((m, idx) =>
                    <option key={`Emp-option-${idx}`}
                      className='odd:bg-gray-300 even:bg-gray-500 bg-gray-700'
                      value={m.TaskTitle}>
                      {m.TaskTitle}</option>)}
                </select>
                <button className='bg-red-600 text-2xl text-center py-2 px-3 m-3 rounded-full'>Delete Task</button>
              </>


              : `No Tasks Found` : ``}

        </div>
      </form>
    </>
  )
}

export default CreateTask
