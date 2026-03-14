import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';

// ✅ Removed Suspense wrapper — App handles its own loading
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);