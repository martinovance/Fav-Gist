import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import { Layout } from '../Components';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      Component {...pageProps}
    />
  );
}

export default MyApp;