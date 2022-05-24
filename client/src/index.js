import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='robertalice.us.auth0.com'
    clientId='7G3DiTLKoeeNI1R2L1q2siHXbU1qupBz'
    redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

 