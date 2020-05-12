
import * as React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';




const CREATE_PUBLICATION = gql`
  mutation CreatePublication($datos: PublicationInput) {
    createPublication(input: $datos) {
      title
    }
  }
`;

function CreatePublication(props) {
  let input;
  const [createPublication, { data }] = useMutation(CREATE_PUBLICATION);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createPublication({ variables: { datos : { title : props.title  } } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Create Publication</button>
      </form>
    </div>
  );
}
export default CreatePublication;