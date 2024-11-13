import React from "react";
import "../css/About.css";
import mern from "../assets/mern.jpg";

export default function About() {
  return (
    <div className="container mt-4">
      <div className="card p-4 mb-4 shadow-sm about-card">
        <div className="banner bg-primary text-white text-center py-4">
          <h1>Welcome to WordIt!</h1>
          <p>Your go-to MERN-based blogging platform.</p>
        </div>
        
        <div className="d-flex align-items-center justify-content-between flex-wrap mt-4">
          <img src={mern} className="mern-image mb-3" alt="MERN stack" />
          <div className="mern-description">
            <p>
              <strong>WordIt</strong> is built using the <strong>MERN</strong> stack, a powerful set of technologies that make web development faster and more efficient.
            </p>
            <ul className="mern-list">
              <li><strong>MongoDB:</strong> NoSQL document database for storing data.</li>
              <li><strong>Express.js:</strong> Fast and flexible Node.js web framework for backend logic.</li>
              <li><strong>React.js:</strong> Dynamic front-end library for building modern user interfaces.</li>
              <li><strong>Node.js:</strong> JavaScript runtime for building scalable server-side applications.</li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h5>React.js – The Front-End Powerhouse</h5>
          <p>
            At the heart of WordIt is <strong>React.js</strong>, a declarative, efficient, and flexible JavaScript library for building dynamic user interfaces. With React, we can create reusable components, manage state seamlessly, and deliver a smooth user experience. It integrates effortlessly with the backend to serve dynamic content in real-time.
          </p>
        </div>

        <div className="mt-4">
          <h5>Express.js and Node.js – The Server Backbone</h5>
          <p>
            The backend runs on <strong>Express.js</strong>, a minimal and flexible web application framework for Node.js. Express simplifies routing, request handling, and server-side logic. Paired with <strong>Node.js</strong>, a JavaScript runtime that allows us to run JavaScript on the server, we can build scalable and efficient backend services.
          </p>
        </div>

        <div className="mt-4 mb-4">
          <h5>MongoDB – The Database of Choice</h5>
          <p>
            <strong>MongoDB</strong> is a NoSQL database that stores data in JSON-like format, making it highly flexible and scalable. In WordIt, we use MongoDB to store blog posts, user data, and comments, enabling seamless data retrieval and manipulation. For cloud-based solutions, we recommend using <strong>MongoDB Atlas</strong> for secure and scalable database hosting.
          </p>
        </div>
      </div>
    </div>
  );
}
