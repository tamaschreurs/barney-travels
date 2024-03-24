import React from 'react';
import Page from '../../components/Page';
import useAlbums from '../../hooks/useAlbums';
import Section from '../../components/Section';
import { navigate } from 'gatsby';

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgZoom from 'lightgallery/plugins/zoom';

// import lightgallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import '../../styles/customLightGallery.css';

import '../../styles/imageGallery.css';

const thumbnailSizes = ['600/400', '400/600'];

function GalleryItemPage({ params }) {
  const { getAlbumBySlug } = useAlbums();

  const foundAlbum = getAlbumBySlug(params.slug);

  if (!foundAlbum) {
    navigate('/404', { replace: true });
    return;
  }

  return (
    <Page title={`Album: ${foundAlbum.title}`}>
      <Section className="py-6">
        <LightGallery
          elementClassNames="gallery"
          download={false}
          progressBar={false}
          plugins={[lgThumbnail, lgAutoplay, lgZoom]}
        >
          {foundAlbum.pictures.map((picture) => (
            <a
              href={`${picture}/2100/1500`}
              className="gallery-item"
              key={picture}
            >
              <img
                src={`${picture}/${
                  thumbnailSizes[Math.floor(Math.random() * 2)]
                }`}
                alt=""
              />
            </a>
          ))}
        </LightGallery>
      </Section>
    </Page>
  );
}

export default GalleryItemPage;

export const Head = ({ params }) => {
  const { getAlbumBySlug } = useAlbums();

  const foundAlbum = getAlbumBySlug(params.slug);

  return <title>{foundAlbum.title} - Barney's Travels</title>;
};
