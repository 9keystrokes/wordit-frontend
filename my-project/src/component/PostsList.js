import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import spinner from "../assets/spinner.gif"; // Make sure you have a spinner gif

export default function PostsList(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the list of posts
    axios
      .get("https://wordit-p7q2.onrender.com/posts")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const deletePost = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete("https://wordit-p7q2.onrender.com/posts/delete/" + id)
        .then((res) => {
          alert(res.data);
          setArticles(articles.filter((article) => article._id !== id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <img src={spinner} alt="Loading..." className="spinner" />
      </div>
    );
  }

  return (
    <div className="posts-list-container">
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        articles.map((article) => (
          <div className="card post-card" key={article._id}>
            <Link
              to={{ pathname: "/post/" + article._id }}
              className="text-dark post-link"
            >
              <h2 className="post-title">{article.title}</h2>
            </Link>
            <p className="post-summary">
              {article.paragraph.length > 150
                ? article.paragraph.slice(0, 150) + "..."
                : article.paragraph}
              <Link
                to={{ pathname: "/post/" + article._id }}
                className="read-more"
              >
                Read more
              </Link>
            </p>
            <div className="post-info">
              <span className="post-author">{article.author}</span>
              <span className="post-date">{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>

            {props.own && (
              <div className="post-actions">
                <Link
                  to={{ pathname: "/edit/" + article._id }}
                  className="btn btn-outline-warning"
                >
                  Edit Article
                </Link>
                <button
                  onClick={() => deletePost(article._id)}
                  className="btn btn-outline-danger"
                >
                  Delete Article
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}
