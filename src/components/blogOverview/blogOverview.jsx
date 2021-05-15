import React from "react";
import "./blogOverview.style.scss";


const BlogOverview = (props) => {
  const { username, title, dayUpload, readingTimeNeed, summary, likeCount, commentCount } = { ...props }
  return (
    <div className="blog-item">
      <div class="blog-card spring-fever" style={{background: `url(https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/116429350_3393766334021452_6255456629195644027_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=UyGdvkqUKOUAX-H3_UV&_nc_ht=scontent.fhan2-3.fna&oh=d92b78b2e8f16d1020af792b005048db&oe=60C50A6D) center no-repeat`}}>
        <div class="title-content">
          <h3><a href="#">{title}</a></h3>
          <div class="intro"> <a href="#">{username}</a> </div>
        </div>
        <div class="card-info">
          {summary}
          <a href="#">Read Article<span class="licon icon-arr icon-black"></span></a>
        </div>
        <div class="utility-info">
          <ul class="utility-list">
            <li><span class="licon icon-like"></span><a href="#">{likeCount}</a></li>
            <li><span class="licon icon-com"></span><a href="#">{commentCount}</a></li>
            <li><span class="licon icon-dat"></span>{dayUpload}</li>
            <li><span class="licon icon-tag"></span><a href="#">Photos</a>, <a href="#">Nice</a></li>
          </ul>
        </div>
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
    </div>
  );
};

export default BlogOverview;
