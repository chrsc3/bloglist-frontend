import React, { useState } from "react";
const Blog = ({ blog, updateBlogLikes, deleteBlog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const addLike = (event) => {
    event.preventDefault();
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    updateBlogLikes(blog.id, updatedBlog);
  };
  const removeBlog = (event) => {
    event.preventDefault();
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      deleteBlog(blog.id);
    }
  };
  return (
    <div className="blog">
      <h2>
        {blog.title}
        <button onClick={toggleDetails}>
          {" "}
          {showDetails ? "hide" : "show"}{" "}
        </button>
      </h2>
      <p>Author: {blog.author}</p>
      {showDetails && (
        <div>
          <p>URL: {blog.url}</p>
          <p>
            Likes: {blog.likes} <button onClick={addLike}>Like</button>
          </p>
          <button onClick={removeBlog}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default Blog;
