import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = props => {
  return (
    <div className="post">
      <div className="postHeader">
        <img src={props.post.profilePic} alt="Profile" />
        <div className="headerName">
          <h1>{props.post.name}</h1>
          <span>{props.post.time}</span>
        </div>
        <i>
          <FontAwesomeIcon icon="ellipsis-h" color="#90949C" />
        </i>
      </div>
      <div className="postContent">
        {props.post.paragraph ? <p>{props.post.paragraph}</p> : null}
        {props.post.img ? <img src={props.post.img} alt="Somethin" /> : null}
        {props.post.paragraph2 ? <p>{props.post.paragraph2}</p> : null}
      </div>
      <div className="postFooter">
        <div className="likesCounter">
          <span>{props.post.comments} comments</span>
          <span>{props.post.shares} shares</span>
        </div>
        <div className="postActions">
          <div className="postActionIcon">
            <i>
              <FontAwesomeIcon icon="thumbs-up" color="grey" />
            </i>
            <span>Like</span>
          </div>
          <div className="postActionIcon">
            <i>
              <FontAwesomeIcon icon="comment" color="grey" />
            </i>
            <span>Comment</span>
          </div>
          <div className="postActionIcon">
            <i>
              <FontAwesomeIcon icon="share" color="grey" />
            </i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
