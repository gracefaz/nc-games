import { useEffect, useState } from "react";
import { fetchAllReviews } from "../utils.js/apiCalls";

export const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllReviews().then((reviews) => {
      setReviewList(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2 id="reviewsHeading">Reviews</h2>

      <ul>
        {reviewList.map((review) => {
          return (
            <li className="reviewList" key={review.review_id}>
              <h3>Title: {review.title}</h3>
              <img
                className="images"
                src={review.review_img_url}
                alt={review.title}
              ></img>
              <p>
                Votes: <b>{review.votes}</b>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
