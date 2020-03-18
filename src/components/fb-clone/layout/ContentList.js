import React, { useState } from "react";
import CreatePost from "../content/CreatePost";
import "./ContentList.css";
import Stories from "../content/Stories";
import Post from "../content/Post";
import profilePic from "../../../img/default-avatar.png";

const ContentList = () => {
  const [posts, setPosts] = useState([
    {
      profilePic: profilePic,
      name: "Imie Nazwisko",
      time: "10 hrs",
      paragraph: (
        <span>
          Greetings from North Pole! <br />
          Enjoy the view guys
        </span>
      ),
      img:
        "data:image/jpeg;base64,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 ",
      paragraph2: "",
      comments: "1.8K",
      shares: "4985"
    },
    {
      profilePic: profilePic,
      name: "Jan Nowak",
      time: "2 days ago",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dui erat. Duis finibus orci ex, vel interdum diam consequat nec. Nunc quis risus aliquam, aliquet arcu ac, rutrum augue. Cras et egestas nibh, at sagittis nisi. Sed molestie velit tortor, id porttitor neque vehicula a. Duis vel turpis non purus porttitor suscipit nec ac dui. Aenean congue nisl libero, at efficitur dolor placerat id. Praesent iaculis vitae quam sit amet aliquam.",
      paragraph2: "",
      comments: "13",
      shares: "3"
    },
    {
      profilePic: profilePic,
      name: "Dino Facts",
      time: "about 70 milion years ago",
      paragraph: "Fact #10",
      img:
        "https://assets.entrepreneur.com/content/3x2/2000/20150407140840-brontosaurus-comeback-dinosaur-extinct-prehistoric.jpeg?width=700&crop=2:1",
      paragraph2:
        "Some of the biggest plant eaters had to eat as much as a ton of food a day. This is similar to eating a bus-sized pile of vegetation every day.",
      comments: "13",
      shares: "3"
    }
  ]);

  const PostCreator = () => {
    return posts.map((post, index) => {
      return <Post post={post} key={index} />;
    });
  };

  return (
    <div className="floatLeft">
      <CreatePost />
      <Stories />
      {PostCreator()}
    </div>
  );
};

export default ContentList;
