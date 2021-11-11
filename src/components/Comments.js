import React from "react";
import { useState } from "react";
import { Comment, Avatar, Input, Tooltip, Button } from "antd";
import "../App.less";
import moment from "moment";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const ExampleComment = ({ children }) => (
  <Comment
    //actions={[<span key="comment-nested-delete">Delete</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <Avatar
        src="https://content.onlinexperiences.com/FileLibrary/6458/6/Arnav.png"
        alt="Han Solo"
      />
    }
    content={<p>Hello from the great state of Wyoming!!</p>}
    datetime={
      <Tooltip
        title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(2, "days").fromNow()}</span>
      </Tooltip>
    }
  >
    {children}
  </Comment>
);

function Comments(props) {
  const [emojiShowHide, setEmojiShowHide] = useState(false);
  const size = props.size;

  const onEmoClick = (e) => {
    console.log("111");
    setEmojiShowHide(true);
  };

/*   const styles = {
      .comment-wrapper{

      }

  }; */

  return (
    <div className={"comment-wrapper-panel"}>
      <div className={"comment-wrapper"}>
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
        <ExampleComment />
      </div>
      <TextArea
        alt={"Type Message Here"}
        showCount
        maxLength={100}
        onChange={onChange}
      />
      <Button
        htmlType="submit"
        type="primary"
        style={{
          margin: "12px",
        }}
      >
        Add Comment
      </Button>
      <Button onClick={onEmoClick} alt={"Emoji"}>
        Emoji
      </Button>
      {emojiShowHide ? <Picker></Picker> : <div></div>}
    </div>
  );
}

export default Comments;
