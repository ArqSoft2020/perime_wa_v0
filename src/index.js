import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hoc';


import App from './App';



const client = new ApolloClient({
  uri: "http://104.198.185.230:3000/"
});

const WrappedApp = (
  <ApolloProvider client={client}>    
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));