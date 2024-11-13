import React, { useEffect, useState } from "react";
import axios from "axios";
import PostsList from "../component/PostsList";
import spinner from "../assets/spinner.gif";
import "../css/homeStyle.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [ownPost, setOwnPost] = useState([]);
  const [count, setCount] = useState(2);
  const [count2, setCount2] = useState(2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://wordit-p7q2.onrender.com/posts");
        setPosts(res.data.reverse());
      } catch (err) {
        setError("Error fetching posts. Please try again later.");
        console.log(err);
      }
    };

    const fetchOwnPosts = async () => {
      if (sessionStorage.getItem("isLogged")) {
        try {
          const res = await axios.get(
            "https://wordit-p7q2.onrender.com/posts/own/" + sessionStorage.getItem("id")
          );
          setOwnPost(res.data.reverse());
        } catch (err) {
          setError("Error fetching your posts. Please try again later.");
          console.log(err);
        }
      }
    };

    fetchPosts();
    fetchOwnPosts();

    setLoading(false);
  }, []);

  return (
    <div className="container card home-container">
      <div className="card-header mt-2 mb-3 hollywood-header">Latest Posts</div>
      {loading ? (
        <div className="spinner-parent">
          <img className="img-fluid spinner" src={spinner} alt="Loading..." />
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : posts.length === 0 ? (
        <div className="d-flex justify-content-center">No posts available</div>
      ) : (
        posts.slice(0, count).map((post, key) => (
          <PostsList own={false} key={key} article={post} />
        ))
      )}
      <div className="d-flex justify-content-center">
        {posts.length > count && !loading && (
          <button
            className="btn hollywood-btn mt-3 mb-3"
            onClick={() => setCount(count + 3)}
          >
            Show More
          </button>
        )}
      </div>

      <div className="card-header mt-4 mb-3 hollywood-header">Your Posts</div>
      {ownPost.length === 0 ? (
        <div className="d-flex justify-content-center pb-3">None to Show</div>
      ) : (
        ownPost.slice(0, count2).map((post, key) => (
          <PostsList own={true} key={key} article={post} />
        ))
      )}
      {ownPost.length > count2 && !loading && (
        <div className="d-flex justify-content-center">
          <button
            className="btn hollywood-btn mt-3 mb-3"
            onClick={() => setCount2(count2 + 3)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
