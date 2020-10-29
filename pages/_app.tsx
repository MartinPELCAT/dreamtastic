import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/tailwind.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div className="min-h-screen bg-main-background">
        <Component {...pageProps} />
      </div>
      <Head>
        <link
          rel="shortcut icon"
          href="/static/favicon.ico"
          type="image/x-icon"
        />
      </Head>
    </ApolloProvider>
  );
}
