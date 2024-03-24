import React from 'react';
import Page from '../../components/Page';
import BlogList from '../../components/BlogList';
import useBlogs from '../../hooks/useBlogs';
import useCountries from '../../hooks/useCountries';

function BlogPage({ location }) {
  const { blogPosts, getPostsByCountries } = useBlogs();

  const searchParams = new URLSearchParams(location.search);
  const countryParam = searchParams.get('country');

  let filteredPosts = blogPosts;
  let countryArray = [];

  if (countryParam) {
    countryArray = countryParam.split(',');
    filteredPosts = getPostsByCountries(countryArray);
  }

  const { nameString: countryNames } = useCountries(countryArray);

  return (
    <Page
      title={
        countryArray.length > 0 ? `Posts from: ${countryNames}` : 'Recent Posts'
      }
    >
      <BlogList blogPosts={filteredPosts} />
    </Page>
  );
}

export default BlogPage;

export const Head = () => <title>Blog - Barney's Travels</title>;
