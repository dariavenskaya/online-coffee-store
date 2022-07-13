import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Home from './Home'
import Shop from './Shop';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      </Router>
    <Footer />
    </>
  );
}

export default App;
