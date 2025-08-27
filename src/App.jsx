import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { GetlocalStorage, SetlocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'


const App = () => {

  const UserDetails = JSON.parse(localStorage.getItem(`UserDetails`))
  const data = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    if (UserDetails) {
      (UserDetails.role) ? setUser(`admin`) : setUser(`employee`)
      setDetails(UserDetails)
    }
  }, [])


  const Loginhandler = (email, password) => {
    if (!data) return;
    const { admin = [], employees = [] } = data || {};
    const found = [...admin, ...employees].find(u => u.email === email && u.password === password)
    if (found) {
      (found.role === `admin`) ?  setUser(`admin`):setUser(`employee`)
      setDetails(found)
      localStorage.setItem(`UserDetails`, JSON.stringify(found))
      return
    }
    if(!found){alert(`incorrect credentials👎❌`)}
  }


  return (
    <>
      {(!user) ? <Login Loginhandler={Loginhandler} /> : ``}
      {(user) ? (user == `employee`) ?  <EmployeeDashboard Details={details}/>:<AdminDashboard Details={details} />  : ``}
    </>
  )
}

export default App
