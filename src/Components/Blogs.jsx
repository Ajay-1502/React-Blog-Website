import React from 'react';

const Blogs = (props) => {
  return (
    <React.Fragment>
      {props.blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <img src={blog.image} alt="Blog-image" style={{ width: '300px' }} />
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
    </React.Fragment>
  );
};

export default Blogs;
