import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserInfo from './pages/UserInfo';
import TemplateSelection from './pages/TemplateSelection';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/template-selection" element={<TemplateSelection />} />
      </Routes>
    </Router>
  );
}

export default App;