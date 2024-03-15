import * as React from 'react';
import WorldMap from '../components/WorldMap';
// import '../styles/index.css';
import '../styles/global.css';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <main className="container py-8 mx-auto">
      <Header />
      <WorldMap />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Barney's Travels</title>;
