import React from "react";
import App from "./App";
import { render } from "react-dom";
import ApolloClient , { gql } from "apollo-boost";
import { ApolloProvider,  useQuery} from "@apollo/react-hooks";


const client = new ApolloClient({
  uri: "http://104.198.185.230:3000/"
});

function CharactersQuery() {
  const { loading, error, data } = useQuery(gql`
  {
    publications
    {
      _id
      title
      description
      state_publication
      contact_information
      id_image
      stock
      expiration_date
      price
      categories
    }
  }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.publications.map(({_id, title, description}) => (
    <div key={_id}>
      <p>
        <li>{_id}: {title} {description}</li>
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
