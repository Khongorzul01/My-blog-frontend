import { createContext, useState, useContext, useEffect } from "react";
import { dataServices } from "../services/dataServices";

export const BlogContext = createContext({});

export function useBlog() {
  return useContext(BlogContext);
}

export const BlogProvider = (props) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    dataServices
      .getBlogsData()
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
      });
  }, []);

  return (
    <BlogContext.Provider value={[blog, setBlog]}>
      {props.children}
    </BlogContext.Provider>
  );
};
