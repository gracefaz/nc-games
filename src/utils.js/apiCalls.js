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
