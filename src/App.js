import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'



function App() {
  return (
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductsDetails />} />
      </Routes>
      <SideBar />
      <Footer />
    </Router>
  )
}

export default App