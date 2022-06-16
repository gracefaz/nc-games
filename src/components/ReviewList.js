import { useEffect, useState } from "react";
import { fetchAllReviews, fetchReviewsByCategory } from "../utils.js/apiCalls";
import { CategoryDropdown } from "./CategoryDropdown";
import { Link } from "react-router-dom";
import { SortBy } from "./SortBy";

export const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortByFilter, setSortByFilter] = useState("");

  useEffect(() => {
    if (categoryFilter === "" || categoryFilter === "All") {
      fetchAllReviews().then((reviews) => {
        setReviewList(reviews);
        setIsLoading(false);
      });
    } else {
      fetchReviewsByCategory(categoryFilter).then((reviews) => {
        setReviewList(reviews);
        setIsLoading(false);
      });
    }
  }, [categoryFilter]);

  useEffect(() => {
    if (sortByFilter === "" || sortByFilter === "None") {
      fetchAllReviews().then((reviews) => {
        setReviewList(reviews);
        setIsLoading(false);
      });
    } else {
      fetchAllReviews(sortByFilter).then((reviews) => {
        setReviewList(reviews);
        setIsLoading(false);
      });
    }
  }, [sortByFilter]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <p id="greeting">Hello, user! 👋 </p>
      <h2 id="reviewsHeading">Reviews</h2>
      <CategoryDropdown setCategoryFilter={setCategoryFilter} />
      <br></br>
      <SortBy setSortByFilter={setSortByFilter} />
      <ul>
        {reviewList.map((review) => {
          return (
            <section className="reviewCards" key={review.review_id}>
              <li className="reviewList">
                <h3 className="title">Title: {review.title}</h3>
                <img
                  className="images"
                  src={review.review_img_url}
                  alt={review.title}
                ></img>
                <p>
                  Votes: <b>{review.votes}</b>
                </p>
                <Link to={`/review/${review.review_id}`}>
                  <button className="buttons">View</button>
                </Link>
              </li>
            </section>
          );
        })}
      </ul>
    </>
  );
};
