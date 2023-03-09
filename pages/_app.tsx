
import { RecipeProvider } from '../components/RecipeProvider';
import { FormContextProvider } from '../components/contextobject';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    
      <FormContextProvider>
        <RecipeProvider>
        <Component {...pageProps} />
        </RecipeProvider>
      </FormContextProvider>
  );
};