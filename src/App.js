import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import IPWhitelist from './Pages/IP-Whitelist';
import Homepage from './Pages/Homepage';
import HUL from './Pages/HUL';
import Error from './Pages/Error';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/IPWhitelist' element={<IPWhitelist />} />
        <Route path='/Servers_1-25' element={<HUL from='1' till='25' />} />
        <Route path='/Servers_25-50' element={<HUL from='25' till='26' />} />
        <Route path='/Servers_50-75' element={<HUL from='50' till='26' />} />
        <Route path='/Servers_75-100' element={<HUL from='75' till='26' />} />
        <Route path='/Servers_100-127' element={<HUL from='100' till='28' />} />
        <Route path='/All_127' element={<HUL from='1' till='127' />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}
