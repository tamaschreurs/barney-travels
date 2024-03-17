import React from 'react';

const GalleryOverflow = ({ count }) => {
  return (
    <div className="flex flex-col justify-center h-40 bg-gray-200 p-6">
      <div className="bg-gray-400 p-3 rounded-full text-white text-2xl font-light text-center  min-w-14 min-h-14 flex flex-col justify-center align-middle">
        <div>+{count}</div>
      </div>
    </div>
  );
};

export default GalleryOverflow;
