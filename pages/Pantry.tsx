import React from 'react';
import Form from '../components/Form';
import { FormContextProvider } from '../components/contextobject';
import Sidebar from '../components/sidebar';

const Pantry: React.FC = () => {
  return (
    <div>
      <FormContextProvider>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <Sidebar />
          </div>
          <div className="w-full md:w-3/4">
            <Form />
          </div>
        </div>
      </FormContextProvider>
    </div>
  );
};

export default Pantry;
