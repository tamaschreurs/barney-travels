const albumSource = require('../demo-content/albums.json');

const useAlbums = () => {
  const sortedAlbums = albumSource.albums.sort((a, b) => {
    const aDate = parseInt(a.start_date);
    const bDate = parseInt(b.start_date);

    return bDate - aDate;
  });

  const getAlbumsById = (albumIds) => {
    const filteredAlbums = sortedAlbums.filter((album) =>
      albumIds.includes(album.id)
    );

    return filteredAlbums;
  };

  return { all: sortedAlbums, getAlbumsById };
};

export default useAlbums;
