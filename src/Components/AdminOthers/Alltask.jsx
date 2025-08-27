import React, { useEffect, useState } from 'react'
import { GetlocalStorage, SetlocalStorage } from '../../Utils/LocalStorage'

const Alltask = ({Details,UpdateDetails}) => {
const [employees, setEmployees] = useState(Details)
useEffect(() => {
  setEmployees(Details||[])
}, [Details])
console.log(`all task at`,employees)
  return (
  <table className="overflow-auto mt-5 h-max min-h-[40%] w-full min-w-max border border-gray-300">
  <thead className="bg-gray-700 text-black">
    <tr>
      <th className="px-4 py-2 text-center border">Employees</th>
      <th className="px-4 py-2 text-center border">New Task</th>
      <th className="px-4 py-2 text-center border">Active Task</th>
      <th className="px-4 py-2 text-center border">Completed Tasks</th>
      <th className="px-4 py-2 text-center border">Failed Tasks</th>
    </tr>
  </thead>
  <tbody>
    {employees.map((n, idx) => (
      <tr key={idx} className="odd:bg-white even:bg-gray-100">
        <td className="px-4 py-2 text-center border">{n.username}</td>
        <td className="px-4 py-2 text-center border">{n.taskCounter.new}</td>
        <td className="px-4 py-2 text-center border">{n.taskCounter.active}</td>
        <td className="px-4 py-2 text-center border">{n.taskCounter.completed}</td>
        <td className="px-4 py-2 text-center border">{n.taskCounter.failed}</td>
      </tr>
    ))}
  </tbody>
</table>
)
}

export default Alltask
