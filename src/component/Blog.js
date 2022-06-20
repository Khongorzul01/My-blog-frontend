import React, { useEffect, useState } from "react";
import "../../src/App.css";
import { useBlog } from "../context/BlogContext";

export default function Blog(props) {
  const [blog, setBLog] = useBlog();
  console.log(blog.data[0].name);
  return (
    <div className="blogs">
      <div className="header">
        <h1>MY BLOG POSTS</h1>
        <button className="button">+ Add Post</button>
      </div>
      <div>
        <img className="zurag" src="#" />
        <p className="date">date</p>
        <h2>{blog.data[0].name}</h2>
        <p>{blog.data[0].description}</p>
      </div>
    </div>
  );
}
