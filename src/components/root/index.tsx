import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/join';
import Main from '../strimplex';
import Profile from '../streamer/Profile';

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='join' element={<Register />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}