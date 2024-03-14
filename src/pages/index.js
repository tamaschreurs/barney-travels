import * as React from 'react';
import HeadingOne from '../components/HeadingOne';
import TopMenu from '../components/TopMenu';
import WorldMap from '../components/WorldMap';
import '../styles/index.css';

const IndexPage = () => {
  return (
    <main>
      <HeadingOne content="Barney's Travels" />
      <TopMenu />
      <WorldMap />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Barney's Travels</title>;
