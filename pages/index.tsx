import Head from 'next/head';
import { getApi } from '../lib/getApi';
import React from 'react';

export default function Home() {
  const getData = async (keyword: string) => {
    const data = await getApi(keyword);
    console.log('나와라 얍', data);
  };
  React.useEffect(() => {
    getData('주식');
  }, []);

  return (
    <>
      <Head>
        <title>main</title>
      </Head>
      <div>
        <h1>Main Page</h1>
      </div>
    </>
  );
}
