import React, { useState } from 'react'
import Header from '../Others/Header'
import TaskList from '../EmployeeOthers/TaskList'
import TaskListNumber from '../EmployeeOthers/TaskListNumber'

const EmployeeDashboard = (props) => {
  const [username] = useState(props.Details.username);

  const employees = JSON.parse(localStorage.getItem(`employees`)) || [];
  const [details, setDetails] = useState(
    employees.find(n => n.username === username)
  );

  function updateDetails(dets) {
    // 1. update React state
    setDetails(dets);

    // 2. update employees array in localStorage
    const empindex = employees.findIndex(n => n.username === dets.username);
    if (empindex !== -1) {
      employees.splice(empindex, 1, dets);
      localStorage.setItem(`employees`, JSON.stringify(employees));
    }
  }

  return (
    <>
      <Header Details={details}/>
      <TaskListNumber Details={details} updateDets={updateDetails}/>
      <TaskList Details={details} updateDets={updateDetails}/>
    </>
  )
}

export default EmployeeDashboard
