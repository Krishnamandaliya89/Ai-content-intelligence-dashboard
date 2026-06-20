export const MOCK_SOCIAL_POSTS = [
  {
    id: "sp_101",
    author: "Tech Insider",
    handle: "@techinsider",
    content: "The latest developments in AI are moving faster than anyone predicted. What's your take on the new models released this week? #AI #Tech",
    likes: 1240,
    reposts: 340,
    timestamp: new Date().toISOString(),
    tags: ["AI", "Tech"],
  },
  {
    id: "sp_102",
    author: "Movie Buff",
    handle: "@moviebuff",
    content: "Just walked out of the premiere for the new sci-fi epic. Visuals were stunning but the pacing felt off in the second act. Solid 7/10. 🎬",
    likes: 856,
    reposts: 124,
    timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    tags: ["Movies", "Review"],
  },
  {
    id: "sp_103",
    author: "Sports Center",
    handle: "@sportscenter",
    content: "UNBELIEVABLE finish! They pull off the upset of the year in double overtime! 🏀🔥",
    likes: 15420,
    reposts: 4200,
    timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    tags: ["Sports", "Basketball"],
  }
];
