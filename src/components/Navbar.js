import React from 'react';

function Navbar({ showForm, toggleView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="/">
          <strong>Blog</strong>
        </a>

        {/* Toggle Button for Smaller Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-outline-light my-2 w-100" onClick={toggleView}>
                {showForm ? 'Show All Blogs' : 'Create Blog'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
