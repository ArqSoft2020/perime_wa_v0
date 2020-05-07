import React, { Component } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";


const GET_DOGS = gql`
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
`;

function Publications({ onPublicationSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <select name="Publication" onChange={onPublicationSelected}>
      {data.publications.map(publications => (
        <option key={publications._id} value={publications._id}>
          {publications.title}
        </option>
      ))}
    </select>
  );
}

const GET_DOG_PHOTO = gql`
query publicacion($id: ID){
  getPublication(id : $id){
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
`;

function PublicationPhoto({ id }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true
      // pollInterval: 500
    }
  );

  if (networkStatus === 4) return "Refetching!";
  if (loading) return null;
  if (error) return `Error!: ${error}`;

  return (
    <div>
      <p>id: {data.getPublication._id}</p>     
      <p>title: {data.getPublication.title}</p>      
      <p>Contact: {data.getPublication.contact_information}</p>
      <p>id imagen: {data.getPublication.id_image}</p>
      <p>expiration date: {data.getPublication.expiration_date}</p>
      <p>price: {data.getPublication.price}</p>
      <p>category: {data.getPublication.categories}</p>
      <button onClick={() => refetch()}>Refetch plus!</button>

    </div>
  );
}

class App extends Component {
  state = { selectedPublication: null };

  onPublicationSelected = ({ target }) => {
    this.setState(() => ({ selectedPublication: target.value }));
  };

  render() {
    return (
      
        <div>
          
          {this.state.selectedPublication && (
            <PublicationPhoto id={this.state.selectedPublication} />
          )}
          <Publications onPublicationSelected={this.onPublicationSelected} />
        </div>
      
    );
  }
}


export default App;