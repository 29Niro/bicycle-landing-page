import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { SnackbarProvider } from 'notistack';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </Router>
);
