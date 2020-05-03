import React from "react";
import App from "./App";
import { render } from "react-dom";
import ApolloClient , { gql } from "apollo-boost";
import { ApolloProvider,  useQuery} from "@apollo/react-hooks";


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

function CharactersQuery() {
  const { loading, error, data } = useQuery(gql`
    {
      characters {
        results {
          id
          name
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name }) => (
    <div key={id}>
      <p>
        {id}: {name}
      </p>
    </div>
  ));
}




const Appis = () => (
  <ApolloProvider client={client}>
    <div>
    <CharactersQuery />
      <App/>
    </div>
  </ApolloProvider>
);

render(<Appis />, document.getElementById("root"));
