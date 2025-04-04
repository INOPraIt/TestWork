import { Routes, Route } from 'react-router';
import React from 'react';
import './style.scss';

import HomePage from '../../pages/Home';
import Navbar from '../Navbar';

export default () => {

  return (
    <>
      <Routes>
        <Route path={'/'} element={
          <div className='styleLayout'>
            <Navbar />
            <HomePage />
          </div>
          } />
      </Routes>
    </>
  );
}
