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
  console.log(review_id);
  return ncGamesAPI.get(`/reviews/${review_id}`).then((response) => {
    console.log(response.data.review);
    return response.data.review;
  });
};

// export const fetchItemsByCategory = (categoryFilter) => {
//   return ncMarketplaceApi
//     .get(`api/items/?category_name=${categoryFilter}`)
//     .then((response) => response.data.items);
// };
