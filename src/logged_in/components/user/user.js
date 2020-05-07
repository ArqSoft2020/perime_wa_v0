import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";



const GET_USER_QUERY = gql`
query usurio($id: ID){
  getUser(id : $id){
    id_user
    username_user
    passhash_user
    address_user
    cellphone_user
    email_user 
  }
}
`;

function PublicationPhoto({ id }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_USER_QUERY,
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
      <p>id: {data.getUser.id_user}</p>     
      <p>title: {data.getUser.username_user}</p>      
    
    </div>
  );
}

class App extends Component {

  render() {
    return (
      
        <div>
          <h1>ID del usuario</h1>  
           
            <PublicationPhoto id="1" />        
          
        </div>
      
    );
  }
}


export default App;