import React from 'react';
import Section from './Section';
import useAlbums from '../hooks/useAlbums';
import GalleryItem from './GalleryItem';

function GalleryList() {
  const { all: albums } = useAlbums();

  return (
    <Section>
      <div className="grid gap-4 grid-cols-3 py-8">
        {albums.map((album) => (
          <GalleryItem
            title={album.title}
            background={
              album.featured
                ? album.pictures[album.featured]
                : album.pictures[0]
            }
            count={album.pictures.length}
            startDate={album.start_date}
            endDate={album.end_date}
            slug={album.slug}
            albumId={album.id}
          />
        ))}
      </div>
    </Section>
  );
}

export default GalleryList;
