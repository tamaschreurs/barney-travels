import React from 'react';
import Page from '../components/Page';
import GalleryList from '../components/GalleryList';

function GalleryPage() {
  return (
    <Page>
      <GalleryList />
    </Page>
  );
}

export default GalleryPage;

export const Head = () => <title>Gallery - Barney's Travels</title>;
