import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hoc';


import App from './App';
import Prueba from './Prueba';


const client = new ApolloClient({
  uri: "http://104.198.185.230:3000/"
});

const WrappedApp = (
  <ApolloProvider client={client}>
    <Prueba/>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));