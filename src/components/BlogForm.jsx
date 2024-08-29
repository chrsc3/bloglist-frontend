import { useState } from "react";
const BlogForm = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const addBlog = (event) => {
    event.preventDefault();
    const blogObject = {
      title: title,
      author: author,
      url: url,
    };
    createBlog(blogObject);
    setAuthor("");
    setTitle("");
    setUrl("");
  };
  return (
    <div>
      <h2>create new Blog</h2>

      <form onSubmit={addBlog} className="blog-form">
        <div>
          title
          <input
            className="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          author
          <input
            className="author"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div>
          url
          <input
            className="url"
            type="text"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </div>
        <button className="save" type="submit">
          save
        </button>
      </form>
    </div>
  );
};
export default BlogForm;
