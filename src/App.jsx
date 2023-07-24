import { useState } from 'react'
import Router from './Router'
import './App.css'
import { MainContext } from '../utils/MainContext';

function App() {
 const [username, setusername] = useState()
 const [email, setemail] = useState()

  return (
 
    <MainContext.Provider value={{
      username, setusername,
      email, setemail
    }}>
    <Router/>
    </MainContext.Provider>
  )
}

export default App
