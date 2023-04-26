

import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './pages/RootLayOut'
import AddForm from './Components/AddForm'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import UpdateForm from './Components/UpdateForm'


const App = () => {

  return (
    <>

      <Routes>
        <Route path='/' element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path='add' element={<AddForm />} />
          <Route path='update/:id' element={<UpdateForm />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
