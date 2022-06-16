import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils.js/apiCalls";

export const AddComment = ({ setNewComment }) => {
  const { review_id } = useParams();
  const [addedComment, setAddedComment] = useState("");

  const handleChange = (event) => {
    setAddedComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(review_id, addedComment)
      .then((commentObject) => {
        setNewComment(commentObject);
      })
      .catch((err) => {
        console.log(err);
      });
    setAddedComment({
      comment_id: 0,
      body: "",
      votes: 0,
      author: "",
      review_id: 0,
      created_at: "",
    });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          name="body"
          value={addedComment.body}
          onChange={handleChange}
          placeholder="What are your thoughts?"
          required
        ></textarea>
        <p></p>
        <button className="buttons">Add your comment!</button>
      </form>
    </>
  );
};
