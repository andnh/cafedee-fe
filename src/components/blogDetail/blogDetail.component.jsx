import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getBlogDetail } from "../../apis";
import "./blogDetail.style.scss";


const BlogDetail = () => {
  let location = useLocation();
  const id = location.state
  const [blogDataDetail, setBlogData] = useState([]);
  const { username, title, dayUpload, readingTimeNeed, content, likeCount, commentCount } = blogDataDetail
  useEffect(() => {
    const getData = async () => {
      try {
        const blogData = await getBlogDetail(id);
        setBlogData(blogData);
      } catch (err) {
        console.log("err: ", err)
      }
    };
    getData();
  }, []);

  console.log(blogDataDetail)

  return (
    <div className="blog-detail">
      <div className="imgContainer">
      </div>
      <h2 className="title center">{title}</h2>
      <div className="blog-detail-header center">
        <h5 className="detail-username"><strong>{username}</strong></h5>
        <div><em>{readingTimeNeed}</em></div>
      </div>
      <div className="contentContainer">
        <p className="content">{content}</p>
        <div className="tags">
          <span class="licon icon-tag"></span>
          <span> Photos, Nice</span>
        </div>
      </div>

    </div>
  );
};

export default BlogDetail;
