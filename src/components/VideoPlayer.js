import React from "react";
import "antd/dist/antd.css";
import "../App.less";
import "react-player/";
import ReactPlayer from "react-player";


function VideoPlayer(props) {
  return (
    <ReactPlayer
      poster={props.poster}
      url={props.src}
      /*       poster="http://placehold.jp/5757f0/ffffff/1600x900.png?text=SLIDES" */
      controls={true}
      width="100%"
      height="100%"
      style={{
        width: "100%",
        height: "auto",
      }}
    ></ReactPlayer>
  );
}

export default VideoPlayer;
