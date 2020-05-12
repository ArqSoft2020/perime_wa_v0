
import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery} from "@apollo/react-hooks";

export function CharactersQuery() {
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


};



export const GetPublications = () => (
  <div>
    <CharactersQuery/>
  </div>
);
export default GetPublications;