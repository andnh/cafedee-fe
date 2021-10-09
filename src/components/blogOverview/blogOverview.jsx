import React from "react";
import { Link } from "react-router-dom";
import "./blogOverview.style.scss";

const BlogOverview = (props) => {
  console.log(props)
  const { _id, username, title, dayUpload, summary, likeCount, commentCount, imgUrl, tag, setIsTag } = { ...props }

  const handleClick = () => {
    setIsTag(true)
  }
  return (
    <div className="blog-item">
      <div className="blog-card spring-fever" style={{ background: `url(${imgUrl}) no-repeat` }}>
        <div className="title-content">
          <h3>{title}</h3>
          <div className="intro"> {username}</div>
        </div>
        <div className="card-info">
          {summary}
          <Link to={{
            pathname: '/blog/detail',
            state: _id
          }}>Read Article<span className="licon icon-arr icon-black"></span></Link>
        </div>
        <div className="utility-info">
          <ul className="utility-list">
            <li><span className="licon icon-like"></span>{likeCount}</li>
            <li><span className="licon icon-com"></span>{commentCount}</li>
            <li><span className="licon icon-dat"></span>{dayUpload}</li>
            <li><span className="licon icon-tag"></span><Link to={{
              pathname: '/blog',
              state: tag
            }} onClick={handleClick}>{tag}<span className="licon icon-arr icon-black">

              </span></Link></li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
    </div>
  );
};

export default BlogOverview;
