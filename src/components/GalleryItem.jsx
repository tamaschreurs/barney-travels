import React from 'react';
import useDates from '../hooks/useDates';
import { Link } from 'gatsby';
import classNames from 'classnames';

function GalleryItem({
  title,
  background,
  count,
  slug,
  albumId,
  startDate,
  endDate,
  mini,
  className,
}) {
  const { ymdToMonthRange } = useDates();

  const galleryItemStyle = {
    backgroundImage: `url(${background}/600/400)`,
    backgroundColor: '#444',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundBlendMode: 'overlay',
    backgroundPosition: 'center',
  };

  let galleryItem;

  if (mini) {
    galleryItem = (
      <div
        className={`flex flex-col justify-end border-solid border-b-2 p-3 h-40 text-white`}
        style={galleryItemStyle}
      >
        <h3 className="text-xl font-light">{title}</h3>
      </div>
    );
  } else {
    const dateString = ymdToMonthRange(startDate, endDate);

    galleryItem = (
      <div
        className="flex flex-col justify-end border-solid border-b-8 p-3 h-44 text-white "
        style={galleryItemStyle}
      >
        <h2 className="text-xl ">{title}</h2>
        <span className="text-sm font-medium">
          {count} photo{count > 1 ? 's' : ''}
          {dateString ? ` • ${dateString}` : ''}
        </span>
      </div>
    );
  }

  return (
    <Link
      className={classNames('transition hover:scale-105', className)}
      to={`/gallery/${slug}`}
      key={albumId}
    >
      {galleryItem}
    </Link>
  );
}

export default GalleryItem;
