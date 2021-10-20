import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    <>
      <div className="card card-post p-2">
        <div className="card-topic">{post.topic}</div>
        <div className="card-title-name">
          <span className="card-topic-name">{post.userName}</span>
          <i className="fa fa-check-circle mt-1"></i>
          <span className="dot-className">&#x2022;</span>
          {post.time}
        </div>
        <div className="post-card-body">
          <p className="card-text post-card-text">{post.title}</p>
          <img className="post-logo" src={post.image} alt="" />
        </div>
      </div>
    </>
  );
};

export default PostSummaryItem;
