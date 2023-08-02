import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from './components/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-l7x67zmcfqmsviri.us.auth0.com"
      clientId="FCyrQNSi9Tyhr6tYJ91QP7XvdgO2W6W5"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
