import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(true); // State to toggle BlogForm visibility

  // Fetch blogs from JSON
  useEffect(() => {
    fetch('/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  // Add a new blog post
  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
  };

  // Delete a blog post
  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  // Toggle between showing the form and blog list
  const toggleView = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      <Navbar showForm={showForm} toggleView={toggleView} />
      <div className="container mt-4">
        {showForm ? <BlogForm addBlog={addBlog} /> : null}
        <hr />
        <BlogList blogs={blogs} deleteBlog={deleteBlog} />
      </div>
    </div>
  );
}

export default App;
