import React from 'react';

function BlogList({ blogs, deleteBlog }) {
  // Array of colors to cycle through
  const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFE0B2', '#D1C4E9', '#F0F4C3', '#B2EBF2', '#FFCCBC', '#D7CCC8', '#C5CAE9'];

  return (
    <div className="row">
      {blogs.length === 0 ? (
        <p className="text-center mt-4">No blogs available. Start creating one!</p>
      ) : (
        blogs.map((blog, index) => (
          <div key={blog.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div
                className="card-body"
                style={{
                  backgroundColor: colors[index % colors.length], // Cycle through colors
                }}
              >
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  {blog.date}
                </p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBlog(blog.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BlogList;
