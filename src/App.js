import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'; // Import the Router component
import Home from './Component/Home/Home';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router >
  
  );
};
  


export default App;
