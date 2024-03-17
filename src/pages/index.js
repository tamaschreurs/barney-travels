import * as React from 'react';
import WorldMap from '../components/WorldMap';
// import '../styles/index.css';
import '../styles/global.css';
import Page from '../components/Page';

const IndexPage = () => {
  return (
    <Page>
      <WorldMap />
    </Page>
  );
};

export default IndexPage;

export const Head = () => <title>Barney's Travels</title>;
