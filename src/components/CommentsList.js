import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentsByReviewId, deleteComment } from "../utils.js/apiCalls";
import { AddComment } from "./AddComment";

export const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [viewComments, setViewComments] = useState(false);
  const [newComment, setNewComment] = useState({});

  const { review_id } = useParams();

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, [review_id, newComment]);

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

      <ul>
        {viewComments
          ? comments.map((comment) => {
              return (
                <li key={comment.body} className="commentsList">
                  <p id="commentBody">{comment.body}</p>
                  <button
                    onClick={() => {
                      deleteComment(comment.comment_id);
                      // setComments(comments);
                    }}
                    className="buttons"
                  >
                    Delete Comment
                  </button>
                </li>
              );
            })
          : null}
      </ul>

      {viewComments ? <AddComment setNewComment={setNewComment} /> : null}
    </>
  );
};
