import { FC } from 'react';
import Head from 'next/head';
import Header from '../components/Header'; // adjust the path according to your file structure

const HomePage: FC = () => (
  <div>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="This is the home page of the website" />
    </Head>
    <Header />
    {/* rest of your page components */}
  </div>
);

export default HomePage;
