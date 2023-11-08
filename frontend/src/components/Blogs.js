import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/blog");
      return res.data;
    } catch (error) {
      console.log("Error:", error);
      return [];
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      if (data && data.blogs) {
        setBlogs(data.blogs);
      }
    });
  }, []);

  console.log(blogs);

  return (
    <div>
      {blogs &&
        blogs.map((blog, index) => {
          // Check if blog and _id are defined before accessing
          const blogId = blog && blog._id ? blog._id : null;

          return (
            <Blog
              key={index}
              id={blogId}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              title={blog?.title}
              description={blog?.description}
              imageURL={blog?.image}
              userName={blog?.user?.name}
            />
          );
        })}
    </div>
  );
};

export default Blogs;
