import { useEffect, useState } from "react";
import { fetchAllReviews } from "../utils.js/apiCalls";

export const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllReviews().then((reviews) => {
      console.log(reviews);
      setReviewList(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviewList.map((review) => {
          return (
            <li key={review.review_id}>
              <h3>{review.title}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};
