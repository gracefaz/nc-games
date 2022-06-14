import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById } from "../utils.js/apiCalls";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

  return (
    <>
      <section className="singleReviewPage">
        <h3 className="title">Title: {review.title}</h3>
        <h4 className="dropDownOptions">Category: {review.category}</h4>
        <img
          className="images"
          src={review.review_img_url}
          alt={review.title}
        ></img>
        <p id="reviewBody">{review.review_body}</p>
        <p>
          Votes: <b>{review.votes}</b>
        </p>
        <p>
          Comments: <b>{review.comment_count}</b>
        </p>
      </section>
      <button className="buttons">Vote</button>
    </>
  );
};
