import { useEffect, useState } from "react";
import { fetchAllReviews, fetchReviewsByCategory } from "../utils.js/apiCalls";
import { CategoryDropdown } from "./CategoryDropdown";
import { Link } from "react-router-dom";

export const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("");

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

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <p id="greeting">Hello, user! 👋 </p>
      <h2 id="reviewsHeading">Reviews</h2>
      <CategoryDropdown setCategoryFilter={setCategoryFilter} />

      <ul>
        {reviewList.map((review) => {
          return (
            <section className="reviewCards">
              <li className="reviewList" key={review.review_id}>
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
