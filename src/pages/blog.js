import React from 'react';
import Page from '../components/Page';
import BlogList from '../components/BlogList';

function BlogPage() {
  return (
    <Page>
      <BlogList />
    </Page>
  );
}

export default BlogPage;

export const Head = () => <title>Blog - Barney's Travels</title>;
