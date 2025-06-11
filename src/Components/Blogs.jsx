import React from 'react';
import './Blogs.css';

const Blogs = (props) => {
  return (
    <div className="blog-list">
      {props.blogs.map((blog) => {
        return (
          <div key={blog.id} className="blog-item">
            <h2>{blog.title}</h2>
            <img src={blog.image} alt="Blog-image" style={{ width: '100%' }} />
            <h3>{blog.description}</h3>
            <button onClick={() => props.editButtonHandler(blog)}>
              Edit Blog
            </button>
            <button onClick={() => props.deleteButtonHandler(blog)}>
              Delete Blog
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
