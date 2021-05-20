import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { getBlogDetail } from "../../apis";
import "./blogDetail.style.scss";

const BlogDetail = () => {
  let location = useLocation();
  const id = location.state;
  const [blogDataDetail, setBlogData] = useState([]);
  const {
    username,
    title,
    dayUpload,
    readingTimeNeed,
    content,
    likeCount,
    commentCount,
    imgUrl,
    tag,
  } = blogDataDetail;
  useEffect(() => {
    const getData = async () => {
      try {
        const blogData = await getBlogDetail(id);
        setBlogData(blogData);
      } catch (err) {
        console.log("err: ", err);
      }
    };
    getData();
  }, []);


  return (
    <div className="blog-detail">
      <div className="imgContainer">
        <img src={imgUrl} alt="" />
      </div>
      <h2 className="title center">{title}</h2>
      <div className="blog-detail-header center">
        <h5 className="detail-username">
          <strong>{username}</strong>
        </h5>
        <div>
          <em>{readingTimeNeed}</em>
        </div>
      </div>
      <div className="contentContainer">
        <p className="content">{content}</p>
        <div className="tags">
          <span className="licon icon-like"></span>
          <span className="mr-5">{likeCount}</span>
          <span className="licon icon-com"></span>
          <span className="mr-5">{commentCount}</span>
          <span className="licon icon-dat"></span>
          <span className="mr-5">{dayUpload}</span>
          <span class="licon icon-tag"></span>
          <Link to={{
            pathname: '/blog',
            state: tag
          }}>{tag}<span class="licon icon-arr icon-black"></span></Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
