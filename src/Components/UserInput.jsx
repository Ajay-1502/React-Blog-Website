import React, { useState } from 'react';
import Blogs from './Blogs';

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
    <React.Fragment>
      <h2>Total Blogs : {blogs.length}</h2>
      <form onSubmit={postButtonHandler}>
        <label htmlFor="image">Image Url :</label>
        <input
          type="url"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <br />
        <label htmlFor="title">Title :</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label htmlFor="description">Blog Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type="submit">{editingId ? 'Update Blog' : 'Post Blog'}</button>
        <hr />
      </form>
      <Blogs
        blogs={blogs}
        editButtonHandler={editButtonHandler}
        deleteButtonHandler={deleteButtonHandler}
      />
    </React.Fragment>
  );
};

export default UserInput;
