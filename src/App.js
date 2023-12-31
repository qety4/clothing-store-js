import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Nav from './Routes/Nav/Nav.component'
import Home from './Routes/Home/Home.component'
import LogIn from './Routes/Login/LogIn.component'
import ShopRoute from './Routes/ShopRoute/ShopRoute'
import Checkout from './Routes/Checkout/Checkout'
import PaymentPage from './Routes/PaymentPage/PaymentPage'
import Profile from './Routes/Profile/Profile'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route path='/profile' element={<Profile />} />
        <Route index element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/shop/*' element={<ShopRoute />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/pay' element={<PaymentPage />} />
      </Route>
    </Routes>
  )
}

export default App