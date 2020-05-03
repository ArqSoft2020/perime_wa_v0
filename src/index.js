import React from "react";
import App from "./App";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider} from "@apollo/react-hooks";


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});


const Appis = () => (
  <ApolloProvider client={client}>
    <div>
      <App/>
    </div>
  </ApolloProvider>
);

render(<Appis />, document.getElementById("root"));
