import React, { useState } from "react";
import axios from "axios";
import './CreatePost.css'; // Custom CSS file for styling
import { FaFilm, FaStar } from "react-icons/fa"; // Icons for better UI

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [message, setMessage] = useState("");

  const submitTheData = (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      paragraph: paragraph,
      email: sessionStorage.getItem("id"),
      author: sessionStorage.getItem("username"),
    };
    setTitle("");
    setParagraph("");
    axios
      .post("http://localhost:5000/posts/create", newPost)
      .then((res) => {
        console.log(res.data);
        setMessage("🎬 Review Posted Successfully!");
      })
      .catch((err) => {
        console.log(err);
        setMessage("⚠️ Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="create-post-container">
      <div className="background"></div>
      
      <div className="create-post-card">
        <h2 className="create-post-title">
          <FaFilm /> Create a New Movie/Series Review <FaStar />
        </h2>
        <p className="create-post-description">
          Share your thoughts, reviews, and ratings with the CinemaVerse community!
        </p>
        <form onSubmit={submitTheData} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="title" className="form-label">🎬 Movie/Series Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Enter the title of the movie/series"
            />
          </div>
          <div className="form-group">
            <label htmlFor="paragraph" className="form-label">✍️ Review Content</label>
            <textarea
              value={paragraph}
              required
              onChange={(e) => setParagraph(e.target.value)}
              className="form-control"
              placeholder="Write your review, thoughts, or ratings here..."
            />
          </div>
          <div className="message-container">
            {message && <h4 className="feedback-message">{message}</h4>}
          </div>
          <button
            type="submit"
            className="btn btn-post-article mt-4"
          >
            🎥 Post Review
          </button>
        </form>
      </div>
    </div>
  );
}
