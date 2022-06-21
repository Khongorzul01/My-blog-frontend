import React, { useEffect, useState } from "react";
import "../../src/App.css";
import { useBlog } from "../context/BlogContext";
import BlogModal from "../component/modal";

export default function Blog(props) {
  const [blog, setBlog] = useBlog([]);

  const handleShow = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  console.log(blog);
  return (
    <div>
      <div className="modalSee">
        {show == true ? (
          <BlogModal show={show} handleClose={handleClose} data={blog} />
        ) : null}
      </div>
      <div className="blogs">
        <div className="header">
          <h1>MY BLOG POSTS</h1>
          <button className="button" onClick={handleShow}>
            + Add Post
          </button>
        </div>
        {blog
          ? blog.map((e) => {
              return (
                <div>
                  <img className="zurag" src="nn.jpeg" />
                  <p className="date">date</p>
                  <h2>{e.name}</h2>
                  <p>{e.description}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
