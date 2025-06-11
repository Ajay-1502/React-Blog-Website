const Blogs = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Blogs;
