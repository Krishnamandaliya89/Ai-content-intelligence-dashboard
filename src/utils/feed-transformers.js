/**
 * Transformers to normalize raw API responses into the unified FeedItem type.
 */

export function transformNewsToFeedItems(articles) {
  return articles.map((article, index) => ({
    id: `news-${article.url}-${index}`, // articles often lack unique IDs
    type: "news",
    title: article.title,
    description: article.description || "",
    image: article.urlToImage || undefined,
    author: article.author || undefined,
    publishedAt: article.publishedAt,
    source: article.source.name,
    externalUrl: article.url,
  }));
}

export function transformMoviesToFeedItems(movies) {
  return movies.map((movie) => ({
    id: `movie-${movie.id}`,
    type: "movie",
    title: movie.title,
    description: movie.overview,
    image: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : undefined,
    publishedAt: movie.release_date,
    rating: movie.vote_average,
  }));
}

export function transformSocialToFeedItems(posts) {
  return posts.map((post) => ({
    id: `social-${post.id}`,
    type: "social",
    title: `Post by ${post.author}`,
    description: post.content,
    author: post.author,
    source: post.handle,
    publishedAt: post.timestamp,
    image: post.avatar, // In a real app we might put this in an author object, but sticking to FeedItem
  }));
}
