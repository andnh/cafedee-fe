import React, { useEffect, useState } from "react";

import "./blogList.style.scss";

import BlogOverview from "../blogOverview/blogOverview";
import { getBlogList } from "../../apis";



const BlogList = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const blogData = await getBlogList();
        setBlogData(blogData);
      } catch (err) {
        console.log("err: ", err)
      }
    };
    getData();
  }, []);
  console.log(blogData)
  return (
    <div id="blog-preview">
      <h1 className="preview-header">Blog</h1>
      <hr class="center-diamond"></hr>
      <div className="preview">
        {blogData
          .map(({ id, ...props }) => (
            <BlogOverview key={id} {...props} />
          ))}
      </div>
    </div>
  );
};
export default BlogList;
