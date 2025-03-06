// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM.createRoot for React 18+
import App from './App';

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure #root exists in your public/index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

