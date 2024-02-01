
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Layout from './components/shared/Layout';
import Products from './components/Products';

import React from 'react'

const App = () => {
  return (
    <Router>
      {/* admin routes independed */}
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard/>} />
        <Route path='/products' element={<Products/>} />
      </Route>
       {/* login routes independed */}
      <Route path='/login' element={<div>This is login</div>} />
    </Routes>
    </Router>
    
  )
}

export default App