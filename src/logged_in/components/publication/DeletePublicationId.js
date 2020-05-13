
import * as React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';




const DELETE_ID = gql`
  mutation DeleteId($id: ID) {
    deletePublication(id: $id) {
      _id
      title
    }
  }
`;

function DeleteId() {
  let input;
  const [deletePublication, { data }] = useMutation(DELETE_ID);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          deletePublication({ variables: { id: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Delete By ID</button>
      </form>
    </div>
  );
}
export default DeleteId;