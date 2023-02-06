import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "/Users/michaelclancy/pantry-pal/components/store";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { persistStore } from "redux-persist";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
          <PersistGate persistor={persistStore(store)}>
      <div className="h-full">
        <Component {...pageProps} />
      </div>
      </PersistGate>
    </Provider>
  )
}