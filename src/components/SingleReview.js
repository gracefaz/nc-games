import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewById, patchReviewById } from "../utils.js/apiCalls";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const [count, setCount] = useState(0);
  // const [click, setClick] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewById(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

  const handleVoteClick = () => {
    setCount((currCount) => currCount + 1);
    patchReviewById(review_id);
  };

  const handleDeductVoteClick = () => {
    setCount((currCount) => currCount - 1);
    patchReviewById(review_id);
  };

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
          Votes: <b>{review.votes + count}</b>
        </p>
        <p>
          Comments: <b>{review.comment_count}</b>
        </p>
      </section>
      <button
        onClick={() => {
          handleVoteClick();
        }}
        className="buttons"
      >
        Add Vote
      </button>
      <button
        onClick={() => {
          handleDeductVoteClick();
        }}
        className="buttons"
      >
        Deduct Vote
      </button>
    </>
  );
};
