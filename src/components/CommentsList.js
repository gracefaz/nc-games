import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId } from "../utils.js/apiCalls";

export const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [viewComments, setViewComments] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, [review_id]);

  const handleClickViewComments = () => {
    setViewComments((currState) => {
      return !currState;
    });
  };

  return (
    <>
      <button
        onClick={() => {
          handleClickViewComments();
        }}
        className="buttons"
      >
        {viewComments ? "Hide Comments" : "View Comments"}
      </button>
      {viewComments
        ? comments.map((comment) => {
            return (
              <>
                <ul>
                  <li key={comment.comment_id} className="commentsList">
                    <p>{comment.body}</p>
                  </li>
                </ul>
              </>
            );
          })
        : null}
    </>
  );
};
