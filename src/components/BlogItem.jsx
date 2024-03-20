import React, { useState } from 'react';
import useAlbums from '../hooks/useAlbums';
import GalleryItem from './GalleryItem';
import classNames from 'classnames';
import useDates from '../hooks/useDates';
import useCountries from '../hooks/useCountries';
import Markdown from 'react-markdown';
import { Link } from 'gatsby';

const BlogItem = ({
  title,
  slug,
  summary,
  countries,
  albumIds,
  id,
  publicationDate,
}) => {
  const [showOverflow, setShowOverflow] = useState(false);

  const { getAlbumsById } = useAlbums();
  const { ymdToDmy } = useDates();
  const { nameString: countryNames } = useCountries(countries);

  const relatedAlbums = getAlbumsById(albumIds);

  let displayedAlbums = relatedAlbums;
  let hasOverflow = false;

  if (relatedAlbums.length > 2) {
    hasOverflow = true;
    if (!showOverflow) {
      displayedAlbums = relatedAlbums.slice(0, 1);
    }
  }

  const relatedGalleries = displayedAlbums.map((album) => (
    <div className="flex-grow basis-5/12" key={`${album.id}_${id}`}>
      <GalleryItem
        title={album.title}
        background={
          album.featured ? album.pictures[album.featured] : album.pictures[0]
        }
        slug={album.slug}
        albumId={album.id}
        mini
      />
    </div>
  ));

  return (
    <div className="flex flex-row space-between border-solid border-b-2 mb-6 py-2">
      <div
        className={classNames(
          { 'basis-8/12': relatedAlbums.length > 0 },
          'pr-4'
        )}
      >
        <Link to={slug}>
          <h2 className="text-2xl mb-2 underline">{title}</h2>
        </Link>
        <div className="font-medium text-sm pb-1">
          {countryNames} • {ymdToDmy(publicationDate)}
        </div>
        <Markdown className="line-clamp-4">{summary}</Markdown>
      </div>
      <div className="flex flex-row flex-wrap flex-grow gap-2">
        {relatedGalleries}
        {hasOverflow && !showOverflow && (
          <button
            type="button"
            className="flex flex-col justify-center h-40 bg-gray-200 p-6"
            onClick={() => {
              setShowOverflow(!showOverflow);
            }}
          >
            <div className="bg-gray-400 p-3 rounded-full text-white text-2xl font-light text-center min-w-14 min-h-14 flex flex-col justify-center align-middle">
              <div>+{relatedAlbums.length - 1}</div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
