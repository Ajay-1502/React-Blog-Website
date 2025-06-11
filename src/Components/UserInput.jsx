import React, { useState } from 'react';

const UserInput = () => {
  const [image, setImage] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const editButtonHandler = (blog) => {
    setEditingId(blog.id);
    setTitle(blog.title);
    setDescription(blog.description);
    setImage(blog.image);
  };

  const deleteButtonHandler = (blog) => {
    setBlogs((prev) => {
      return prev.filter((b) => {
        return b.id != blog.id;
      });
    });
  };

  const postButtonHandler = (event) => {
    event.preventDefault();

    if (editingId) {
      setBlogs((prev) => {
        return prev.map((b) => {
          return b.id === editingId ? { ...b, title, image, description } : b;
        });
      });
    } else {
      const newBlog = {
        id: Date.now(),
        title,
        image,
        description,
      };

      setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
    }
    setEditingId(null);
    setImage('');
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Total Blogs : {blogs.length}</h2>
      <form onSubmit={postButtonHandler}>
        <label htmlFor="image">Image Url :</label>
        <input
          type="url"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="description">Blog Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">{editingId ? 'Update Blog' : 'Post Blog'}</button>
        <hr />
      </form>

      <div>
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <img
                src={blog.image}
                alt="Blog-image"
                style={{ width: '300px' }}
              />
              <h3>{blog.description}</h3>
              <button onClick={() => editButtonHandler(blog)}>Edit Blog</button>
              <button onClick={() => deleteButtonHandler(blog)}>
                Delete Blog
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInput;
