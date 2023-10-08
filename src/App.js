import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductsDetails from './pages/ProductsDetails'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import ProductProvider from './contexts/ProductContext'


function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductsDetails />} />
        </Routes>
        <SideBar />
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App