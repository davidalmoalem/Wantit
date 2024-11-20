import React, { useState } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Profile from './pages/Profile';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes>
      </Router>


    </div>
  );
};

export default App;