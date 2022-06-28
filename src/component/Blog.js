import React, { useEffect, useState } from "react";
import { Button, Modal, InputGroup, Form } from "react-bootstrap";
import "../../src/App.css";
import { useBlog } from "../context/BlogContext";

export default function Blog(props) {
  const [blog, setBlog] = useBlog([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const createPost = async (e) => {
    e.preventDefault();
    return await fetch("http://localhost:5000/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // "postdate":"2020/01/12",
        topic: `${e.target[0].value}`,
        text: `${e.target[1].value}`,
        // "image": `${e.target[0].value}`
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "success") {
          handleClose();
        }
      });
  };

  return (
    <div>
      <div className="modalSee">
        {show == true ? (
          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add post</Modal.Title>
              </Modal.Header>
              <form action="" onSubmit={createPost}>
                <Modal.Body>
                  <div className="titles">
                    <Form.Control
                      placeholder="Title"
                      aria-label="Title"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div>
                    <Form.Control
                      className="desc"
                      placeholder="Description"
                      aria-label="Description"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer className="buttons">
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    + Create Post
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          </div>
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
