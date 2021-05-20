import React, { useEffect, useState } from "react";

import "./blogList.style.scss";

import BlogOverview from "../blogOverview/blogOverview";
import { getBlogList, getBlogDetailByTag } from "../../apis";
import { useLocation } from "react-router";

const BlogList = () => {
  const [blogData, setBlogData] = useState([]);
  const [isTag, setIsTag] = useState(false)

  let location = useLocation();
  const tag = location.state;

  useEffect(() => {
    const getData = async () => {
      try {
        const blogData = await getBlogList();
        const blogTag = await getBlogDetailByTag(tag)
        !isTag ? setBlogData(blogData) : setBlogData(blogTag);
      } catch (err) {
        console.log("err: ", err)
      }
    };
    getData();
  }, [isTag]);

  return (
    <div id="blog-preview">
      <h1 className="preview-header">Blog</h1>
      <hr className="center-diamond"></hr>
      {isTag ? <div className="is-tag">View by "{tag}"</div> : null}
      <div className="preview">
        {blogData ? blogData
          .map(({ ...props }) => (
            <BlogOverview {...props} isTag={isTag} setIsTag={setIsTag} />
          )) : null}
      </div>
    </div>
  );
};

export default BlogList;
