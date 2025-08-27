import React, { createContext, useEffect, useState } from 'react'
import { GetlocalStorage, SetlocalStorage } from '../Utils/LocalStorage'
export const AuthContext=createContext()


const AuthProvider = ({children}) => {
  const [data, setdata] = useState(null)
  useEffect( () => {
    if (!localStorage.getItem(`employees`)){SetlocalStorage();console.log(`data was not available`) }
setdata(GetlocalStorage())
  }, [])
//  console.log(data)
  return (
  <>
  <AuthContext.Provider value={data}>
  {children}
  </AuthContext.Provider>
  </>
  )
}

export default AuthProvider

