import React, { useState } from "react";
import { createBlogPost } from "../../apis";
import { months, monthsShort } from "../../common/common";
import "./writeBlog.scss"


const timeDisplay = new Date()
const monthName = months[timeDisplay.getMonth()]
const dateName = timeDisplay.getDate()
const year = timeDisplay.getFullYear()

const WriteBlog = () => {
  const [newPostData, setNewPostData] = useState({
    title: "",
    content: "",
    imgUrl: "",
    tag: "",
    username: "",
    readingTimeNeed: "",
    dayUpload: `${monthName} ${dateName}, ${year}`,
  });

  const handleChange = (field, value) => {
    setNewPostData(prevValue => { return { ...prevValue, [field]: value } });
  };

  const handleSubmit = (e) => {
    createBlogPost(newPostData)
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <fieldset>
        <legend>What do you want to write about?</legend>

        <label htmlFor="title">
          Title
        </label>
        <input id="title" name="title" onChange={(e) => handleChange(e.target.name, e.target.value)} />

        <label htmlFor="content">
          Express your words
        </label>
        <textarea id="content" name="content" onChange={(e) => handleChange(e.target.name, e.target.value)} />

        <label htmlFor="igmUrl">
          Image link
        </label>
        <input id="imgUrl" name="imgUrl" onChange={(e) => handleChange(e.target.name, e.target.value)} />

        <label htmlFor="username">
          Username
        </label>
        <input id="username" name="username" onChange={(e) => handleChange(e.target.name, e.target.value)} />

        <label htmlFor="tag">
          Tag
        </label>
        <input id="tag" name="tag" onChange={(e) => handleChange(e.target.name, e.target.value)} />

        <label htmlFor="readingTimeNeed">
          ReadingTimeNeed
        </label>
        <input id="readingTimeNeed" name="readingTimeNeed" onChange={(e) => handleChange(e.target.name, `${e.target.value} mins`)} />

        <input type="submit" value="Submit" id="submit" />
      </fieldset>
    </form>
  );
};

export default WriteBlog;
