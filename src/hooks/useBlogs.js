const blogSource = require('../demo-content/blogPosts.json');

const useBlogs = () => {
  return blogSource.blogPosts;

  //Get country information at https://restcountries.com/v3.1/alpha?codes=392&fields=name.
};

export default useBlogs;
