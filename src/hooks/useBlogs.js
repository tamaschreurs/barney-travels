const blogSource = require('../demo-content/blogPosts.json');

const useBlogs = () => {
  const blogPosts = blogSource.blogPosts.sort(
    (a, b) => parseInt(b.publication_date) - parseInt(a.publication_date)
  );

  blogPosts.forEach((post) => {
    post.slug = post.title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
  });

  console.log('useblogs refreshed');

  const getPostBySlug = (slug) => {
    const foundPost = blogPosts.find((post) => post.slug === slug);

    return foundPost;
  };

  const getPostsByCountries = (countryArray) => {
    const relevantPosts = blogPosts.filter((post) => {
      for (const country of post.countries) {
        if (countryArray.includes(country)) {
          return true;
        }
      }
      return false;
    });

    return relevantPosts;
  };

  const countriesVisited = blogPosts.reduce((countryArray, post) => {
    let addedCountries = [];
    post.countries.forEach((country) => {
      if (!countryArray.includes(country)) {
        addedCountries.push(country);
      }
    });
    return [...countryArray, ...addedCountries];
  }, []);

  return { blogPosts, countriesVisited, getPostBySlug, getPostsByCountries };
};

export default useBlogs;
