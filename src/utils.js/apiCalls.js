import axios from "axios";

const ncGamesAPI = axios.create({
  baseURL: "https://games-of-grace.herokuapp.com/api",
});

export const fetchAllReviews = () => {
  return ncGamesAPI
    .get("/reviews")
    .then((response) => response.data.reviews)
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCategoryNames = () => {
  return ncGamesAPI
    .get("/categories")
    .then((response) => response.data.categories);
};

export const fetchReviewsByCategory = (categoryFilter) => {
  return ncGamesAPI
    .get(`/reviews/?category=${categoryFilter}`)
    .then((response) => response.data.reviews);
};

export const fetchReviewById = (review_id) => {
  return ncGamesAPI.get(`/reviews/${review_id}`).then((response) => {
    return response.data.review;
  });
};

export const patchReviewById = (review_id) => {
  const body = { inc_votes: 1 };
  return ncGamesAPI.patch(`/reviews/${review_id}`, body).then((response) => {
    console.log(response.data);
    return response.data.review;
  });
};
