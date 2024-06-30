# Barney's Travels

React website where you can read about all of Barney's adventures, see his photos and get an overview of all the places he has visited.

# Demo Data Documentation

This documentation provides a detailed overview of the data structure and content that needs to be included in the final database for a project involving albums and blog posts. The data is organized into two primary JSON files: `albums.json` and `blogPosts.json`.

## 1. Albums Data (`albums.json`)

The `albums.json` file contains information about various photo albums. Each album has a unique ID, a collection of picture URLs, a title, and start and end dates. The data structure is as follows:

### Data Structure

- `albums`: An array of album objects.
  - `id`: An integer representing the unique identifier for the album.
  - `pictures`: An array of strings, each containing a URL to a picture in the album.
  - `title`: A string representing the title of the album.
  - `start_date`: A string representing the start date of the album.
  - `end_date`: A string representing the end date of the album.

### Example

```json
{
  "albums": [
    {
      "id": 1,
      "pictures": [
        "https://picsum.photos/id/444",
        "https://picsum.photos/id/359",
        "https://picsum.photos/id/357",
        "https://picsum.photos/id/772"
      ],
      "title": "Mountain Adventure",
      "start_date": "20191026",
      "end_date": "20191203"
    },
    {
      "id": 2,
      "pictures": [
        "https://picsum.photos/id/360",
        "https://picsum.photos/id/250",
        "https://picsum.photos/id/458",
        "https://picsum.photos/id/12"
      ],
      "title": "Urban Exploration",
      "start_date": "20201101",
      "end_date": "20201207"
    }
    // Additional album objects...
  ]
}
```

## 2. Blog Posts Data (`blogPosts.json`)

The `blogPosts.json` file contains information about various blog posts. Each blog post has a unique ID, a list of associated countries, a title, content, associated albums, a publication date, a start date, and an end date. The data structure is as follows:

### Data Structure

- `blogPosts`: An array of blog post objects.
  - `id`: An integer representing the unique identifier for the blog post.
  - `countries`: An array of strings, each representing a country code associated with the blog post.
  - `title`: A string representing the title of the blog post.
  - `content`: A string representing the content of the blog post.
  - `albums`: An array of integers, each representing an album ID associated with the blog post.
  - `publication_date`: A string representing the publication date of the blog post.
  - `start_date`: A string representing the start date of the event or journey described in the blog post.
  - `end_date`: A string representing the end date of the event or journey described in the blog post.

### Example

```json
{
  "blogPosts": [
    {
      "id": 1,
      "countries": ["840"],
      "title": "Exploring the Grand Canyon",
      "content": "The Grand Canyon, a colossal chasm carved by the Colorado River...",
      "albums": [7],
      "publication_date": "20160518",
      "start_date": "20190930",
      "end_date": "20191121"
    },
    {
      "id": 2,
      "countries": ["392"],
      "title": "A Journey Through Tokyo",
      "content": "In the heart of Japan, Tokyo stands as a beacon of modernity fused with age-old traditions...",
      "albums": [1, 9, 3],
      "publication_date": "20210615",
      "start_date": "20160830",
      "end_date": "20161101"
    }
    // Additional blog post objects...
  ]
}
```

## Summary

The final database should include two tables or collections to store the data from the `albums.json` and `blogPosts.json` files. The `albums` table/collection will store information about photo albums, including their IDs, picture URLs, titles, and date ranges. The `blogPosts` table/collection will store information about blog posts, including their IDs, associated countries, titles, content, associated albums, publication dates, and date ranges for the events or journeys described.

By following this structure, developers can ensure the data is organized and easily accessible for any application or website that utilizes this information.
