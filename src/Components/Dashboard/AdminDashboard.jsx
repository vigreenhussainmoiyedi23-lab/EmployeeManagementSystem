import React, { useEffect, useState } from 'react'
import Header from '../Others/Header'
import { GetlocalStorage } from '../../Utils/LocalStorage'
import Alltask from '../AdminOthers/Alltask'
import CreateTask from '../AdminOthers/CreateTask'
import DeleteTask from '../AdminOthers/DeleteTask'
import SelectTaskManipulation from '../AdminOthers/SelectTaskManipulation'


const AdminDashboard = () => {
  const [details, setDetails] = useState([])
const [taskManipulation, setTaskManipulation] = useState(`create`)
  useEffect(() => {
    setDetails(GetlocalStorage().employees)
    console.log(`running the update command`)
  }, [])
  function UpdateDetails(emp) {
  setDetails(emp)
  localStorage.setItem(`employees`,JSON.stringify(details))
}

  return (
    <>
      <Header Details={{username:`Hussain`}}  UpdateDetails={UpdateDetails}/>
   <SelectTaskManipulation setTaskManipulation={setTaskManipulation}/>
      {(taskManipulation==`create`)?<CreateTask Details={details || []} UpdateDetails={UpdateDetails}/>:<DeleteTask  Details={details || []} UpdateDetails={UpdateDetails}/>}
      {console.log(`runniong once again`,details)}
      <Alltask Details={details} UpdateDetails={UpdateDetails}/>
    </>
  )
}


export default AdminDashboard
