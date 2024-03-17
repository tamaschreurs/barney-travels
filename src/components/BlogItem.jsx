import React from 'react';
import useAlbums from '../hooks/useAlbums';
import GalleryItem from './GalleryItem';
import classNames from 'classnames';
import GalleryOverflow from './GalleryOverflow';
import useDates from '../hooks/useDates';
import useCountries from '../hooks/useCountries';

const BlogItem = ({
  title,
  summary,
  countries,
  albumIds,
  id,
  publicationDate,
}) => {
  const { getAlbumsById } = useAlbums();
  const { ymdToDmy } = useDates();
  const { nameString: countryNames } = useCountries(countries);

  const relatedAlbums = getAlbumsById(albumIds);

  let displayedAlbums = relatedAlbums;
  let hasOverflow = false;

  if (relatedAlbums.length > 2) {
    displayedAlbums = relatedAlbums.slice(0, 1);
    hasOverflow = true;
  }

  const relatedGalleries = displayedAlbums.map((album) => (
    <div className="flex-grow ml-3">
      <GalleryItem
        key={`${album.id}_${id}`}
        title={album.title}
        background={
          album.featured ? album.pictures[album.featured] : album.pictures[0]
        }
        mini
      />
    </div>
  ));

  return (
    <div className="flex flex-row border-solid border-b-2 my-4 py-2">
      <div className={classNames({ 'basis-8/12': relatedAlbums.length > 0 })}>
        <h2 className="text-2xl font-light">{title}</h2>
        <div className="font-medium text-sm pb-1">
          {countryNames} • {ymdToDmy(publicationDate)}
        </div>
        <div dangerouslySetInnerHTML={{ __html: summary }}></div>
      </div>
      {relatedGalleries}
      {hasOverflow && (
        <div className="ml-3">
          <GalleryOverflow count={relatedAlbums.length - 1} />
        </div>
      )}
    </div>
  );
};

export default BlogItem;
