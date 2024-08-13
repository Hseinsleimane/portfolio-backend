import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import your global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this ID matches the one in your index.html
);
