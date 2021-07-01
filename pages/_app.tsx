import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ReactElement } from 'react';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
