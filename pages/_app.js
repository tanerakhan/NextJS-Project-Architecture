import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
//import withRedux from "next-redux-wrapper";
//import { makeStore } from "../store";
import { useStore } from '../store/store'

/* class DktPlatformApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;

    return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    );
  }
} */

export default function DktPlatformApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

//export default withRedux(makeStore)(DktPlatformApp);
