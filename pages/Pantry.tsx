import React from 'react';
import Form from '../components/Form';
import { FormContextProvider } from '../components/contextobject';

const Pantry: React.FC = () => {
  return (
    <div>
      
      <FormContextProvider>
        <Form />
      </FormContextProvider>
    </div>
  );
};

export default Pantry;