import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./blogOverview.style.scss";


const BlogOverview = (props) => {
  const { _id, username, title, dayUpload, summary, likeCount, commentCount } = { ...props }
  const [dataDetail, setDataDetail] = useState({})

  return (
    <div className="blog-item">
      <div class="blog-card spring-fever" style={{ background: `url(https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/116429350_3393766334021452_6255456629195644027_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UyGdvkqUKOUAX-H3_UV&_nc_ht=scontent.fhan2-3.fna&oh=d92b78b2e8f16d1020af792b005048db&oe=60C50A6D) center no-repeat` }}>
        <div class="title-content">
          <h3>{title}</h3>
          <div class="intro"> {username}</div>
        </div>
        <div class="card-info">
          {summary}
          <Link to={{
            pathname: '/blog/detail',
            state: _id
          }}>Read Article<span class="licon icon-arr icon-black"></span></Link>
        </div>
        <div class="utility-info">
          <ul class="utility-list">
            <li><span class="licon icon-like"></span>{likeCount}</li>
            <li><span class="licon icon-com"></span>{commentCount}</li>
            <li><span class="licon icon-dat"></span>{dayUpload}</li>
            <li><span class="licon icon-tag"></span>Photos, Nice</li>
          </ul>
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
    </div>
  );
};

export default BlogOverview;
