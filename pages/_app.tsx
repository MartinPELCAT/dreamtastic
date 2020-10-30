import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";
import { AppContext } from "contexts/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppContext>
        <div className="min-h-screen bg-main-gradient">
          <Component {...pageProps} />
        </div>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
      </AppContext>
    </ApolloProvider>
  );
}
