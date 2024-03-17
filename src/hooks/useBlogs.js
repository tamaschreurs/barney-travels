const blogSource = require('../demo-content/blogPosts.json');

const useBlogs = () => {
  const blogPosts = blogSource.blogPosts;

  const countriesVisited = blogPosts.reduce((countryArray, post) => {
    let addedCountries = [];
    post.countries.forEach((country) => {
      if (!countryArray.includes(country)) {
        addedCountries.push(country);
      }
    });
    return [...countryArray, ...addedCountries];
  }, []);

  return { blogPosts, countriesVisited };

  //Get country information at https://restcountries.com/v3.1/alpha?codes=392&fields=name.
};

export default useBlogs;
