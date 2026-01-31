import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Pages/home/Home'
import Layout from './component/Nav/Layout'
import About from './component/Pages/about/About'
import Therapies from './component/Pages/therapies/Therapies'
import Contact from './component/Pages/Contact/Contact'
import BookOnline from './component/Pages/bookonline/BookOnline'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/therapies' element={<Therapies/>}></Route>
          <Route path='/bookonline' element={<BookOnline/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
