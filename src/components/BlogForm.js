import React, { useState } from 'react';

function BlogForm({ addBlog }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newBlog = {
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleString(),
      };
      addBlog(newBlog);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8" >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label" >
              Blog Title
            </label>
            <input
              type="text"
              className="form-control"
              style={{backgroundColor : "floralwhite"}}
              id="title"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3" >
            <label htmlFor="description" className="form-label">
              Blog Description
            </label>
            <textarea
              className="form-control"
              style={{backgroundColor : "floralwhite"}}
              id="description"
              rows="4"
              placeholder="Enter blog description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
}


export default BlogForm;
