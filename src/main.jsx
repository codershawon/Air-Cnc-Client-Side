import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { RouterProvider } from 'react-router-dom';
import AuthProviders from './Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProviders> <RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>
);
