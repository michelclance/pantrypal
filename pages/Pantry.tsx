import React from 'react';
import Form from '../components/Form';
import { FormContextProvider } from '../components/contextobject';
import Sidebar from '../components/sidebar';

const Pantry: React.FC = () => {
  return (
    <div>
      
      <FormContextProvider>
      <div className="flex flex-wrap" >
      <Sidebar />
      <Form />
    </div>
      </FormContextProvider>
    </div>
  );
};

export default Pantry;