import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import spinner from "../assets/spinner.gif";
import "../css/homeStyle.css"; // Assuming this is where all the styles are located

export default function Post() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [date, setDate] = useState("");
  const [postId, setPostId] = useState("");
  const [author, setAuthor] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://wordit-p7q2.onrender.com/posts/" + id)
      .then((res) => {
        setTitle(res.data.title);
        setParagraph(res.data.paragraph);
        setDate(res.data.createdAt);
        setPostId(res.data._id);
        setComments(res.data.comment);
        setAuthor(res.data.author);
        setCommentAuthor(sessionStorage.getItem("username"));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const commentAdd = (e) => {
    e.preventDefault();
    setCommentAuthor(sessionStorage.getItem("username"));
    alert("Comment Added by " + commentAuthor);
    const sendComment = { comment: message, author: commentAuthor };
    axios
      .put("https://wordit-p7q2.onrender.com/posts/comment-add/" + postId, sendComment)
      .then(() => {
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="post-container">
      {!title && !paragraph && !date ? (
        <div className="spinner-parent">
          <img className="spinner" src={spinner} alt="Loading..." />
        </div>
      ) : (
        <div className="post-card">
          <h1 className="post-title">{title}</h1>
          <div className="post-header">
            <span className="author">{author}</span>
            <span className="date">{date}</span>
          </div>
          <div className="post-content">
            <p>{paragraph}</p>
          </div>

          {/* Floating Back Button */}
          <Link to="/" className="btn back-btn">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>

          <div className="comments-section">
            <h3>Comments</h3>
            <div className="comments-list">
              {comments.map((comment, key) => (
                <div className="comment" key={key}>
                  <div className="comment-author-avatar">
                    {/* Assuming you have user avatars */}
                    <img
                      className="avatar"
                      src={`https://www.gravatar.com/avatar/${comment.author}`}
                      alt="avatar"
                    />
                  </div>
                  <div className="comment-details">
                    <h5 className="comment-author">{comment.author}</h5>
                    <p>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>

            {!sessionStorage.getItem("isLogged") ? (
              <div className="login-prompt">
                <p>Please login to comment.</p>
              </div>
            ) : (
              <form onSubmit={commentAdd} className="comment-form">
                <textarea
                  className="form-control"
                  value={message}
                  required
                  placeholder="Add your comment..."
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn btn-primary comment-btn" type="submit">
                  Post Comment
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
