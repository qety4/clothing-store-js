import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Nav from './Routes/Nav/Nav.component'
import Home from './Routes/Home/Home.component'
import LogIn from './Routes/Login/LogIn.component'
import Shop from './Routes/Shop/Shop.component'
import Register from './Routes/Register/Register.component'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<LogIn />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
    </Routes>
  )
}

export default App