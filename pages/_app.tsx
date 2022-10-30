import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter";
import { AnimationRevealPage } from "helpers";
import Header from "layout/Header";
import { AppProps } from "next/app";
import React from "react";
import GlobalStyles from "../src/styles/GlobalStyles";
import SimpleFiveColumnFooter from "components/footers/SimpleFiveColumn";
import ErrorBoundary from "../src/components/error";
import { Provider } from "react-redux";
import store from "../src/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const App = ({ Component, pageProps }: AppProps) => {
  
  let persistor = persistStore(store);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AnimationRevealPage>
            <Header />
            <GlobalStyles />
            <Component {...pageProps} />
            <SimpleSubscribeNewsletter />
            <SimpleFiveColumnFooter />
            <div id="modal" />
          </AnimationRevealPage>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
