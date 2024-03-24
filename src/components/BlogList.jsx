import React from 'react';
import Section from './Section';
import BlogItem from './BlogItem';

function BlogList({ blogPosts }) {
  return (
    <Section>
      <div className="flex flex-col py-8">
        {blogPosts.map((post) => {
          console.log(post.id);
          return (
            <BlogItem
              key={post.id}
              id={post.id}
              title={post.title}
              slug={post.slug}
              summary={post.content}
              albumIds={post.albums}
              countries={post.countries}
              publicationDate={post.publication_date}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default BlogList;
