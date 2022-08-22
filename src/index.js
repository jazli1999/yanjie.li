import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';

import client from './utils/apolloClient';

import './index.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root)
  .render(
      <ApolloProvider client={client}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ApolloProvider>
  );

