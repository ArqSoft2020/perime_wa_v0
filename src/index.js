import React from "react";
import App from "./App";
import { render } from "react-dom";
import ApolloClient , { gql } from "apollo-boost";
import { ApolloProvider,  useQuery} from "@apollo/react-hooks";


const client = new ApolloClient({
  uri: "http://3.82.189.202:3000/"
});

function CharactersQuery() {
  const { loading, error, data } = useQuery(gql`
  {
    categorys
    {
      id_category
      name_category
      type_category
    }
  }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categorys.map(({ id_category, name_category, type_category }) => (
    <div key={id_category}>
      <p>
        <li>{id_category}: {name_category} {type_category}</li>
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
