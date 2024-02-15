import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import SuspenseLoader from './components/loader/SuspenseLoader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Suspense fallback={<SuspenseLoader />}>
         <App />
      </Suspense>
   </React.StrictMode>
);
