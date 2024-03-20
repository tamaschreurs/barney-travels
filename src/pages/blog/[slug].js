import React from 'react';
import Page from '../../components/Page';
import Section from '../../components/Section';
import useBlogs from '../../hooks/useBlogs';
import Markdown from 'react-markdown';
import useCountries from '../../hooks/useCountries';
import useDates from '../../hooks/useDates';
import useAlbums from '../../hooks/useAlbums';
import GalleryItem from '../../components/GalleryItem';
import { navigate } from 'gatsby';

function BlogPost({ params }) {
  const { getAlbumsById } = useAlbums();
  const { ymdToDmy } = useDates();
  const { getPostBySlug } = useBlogs();

  const foundPost = getPostBySlug(params.slug);

  const { nameString: countryNames } = useCountries(foundPost?.countries);

  if (!foundPost) {
    navigate('/404', { replace: true });
    return;
  }

  const relatedAlbums = getAlbumsById(foundPost.albums);
  const hasRelatedAlbums = relatedAlbums.length > 0;

  const markdownFormatting = {
    h2(props) {
      const { node, ...rest } = props;
      return <h2 className="font-bold text-lg mb-1" {...rest} />; // eslint-disable-line
    },
    p(props) {
      const { node, ...rest } = props;
      return <p className="mb-4" {...rest} />;
    },
    li(props) {
      const { node, ...rest } = props;
      return <li className="list-decimal" {...rest} />;
    },
  };

  return (
    <Page
      title={foundPost.title}
      subtitle={`${countryNames}  • ${ymdToDmy(foundPost.publication_date)}`}
    >
      <Section className="py-6 max-w-screen-lg">
        <div className="flex flex-row gap-8">
          <div className={hasRelatedAlbums && 'basis-2/3'}>
            <Markdown components={markdownFormatting}>
              {foundPost.content}
            </Markdown>
          </div>
          {hasRelatedAlbums && (
            <div className="flex flex-col flex-grow">
              <h2 className="text-2xl font-light bg-slate-50 border-solid border-b-4 px-3 py-2 text-center">
                Related albums
              </h2>
              {relatedAlbums.map((album) => (
                <GalleryItem
                  key={`${album.id}_${foundPost.id}`}
                  title={album.title}
                  count={album.pictures.length}
                  background={
                    album.featured
                      ? album.pictures[album.featured]
                      : album.pictures[0]
                  }
                  slug={album.slug}
                  albumId={album.id}
                />
              ))}
            </div>
          )}
        </div>
      </Section>
    </Page>
  );
}

export default BlogPost;

export const Head = ({ params }) => {
  const { getPostBySlug } = useBlogs();

  const foundPost = getPostBySlug(params.slug);

  return <title>{foundPost?.title} - Barney's Travels</title>;
};
