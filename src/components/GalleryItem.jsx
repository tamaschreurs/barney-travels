import React from 'react';
import useDates from '../hooks/useDates';

function GalleryItem({
  title,
  background,
  count,
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
  };

  if (mini) {
    return (
      <div
        className={`flex flex-col justify-end border-solid border-b-2 p-3 h-40 text-white ${
          className ? className : ''
        }`}
        style={galleryItemStyle}
      >
        <h2 className="text-xl font-light">{title}</h2>
      </div>
    );
  }

  const dateString = ymdToMonthRange(startDate, endDate);

  return (
    <div
      className="flex flex-col justify-end border-solid border-b-4 p-3 h-44 text-white "
      style={galleryItemStyle}
    >
      <h2 className="text-xl ">{title}</h2>
      <span className="text-sm font-medium">
        {count} photo{count > 1 ? 's' : ''} • {dateString}
      </span>
    </div>
  );
}

export default GalleryItem;
