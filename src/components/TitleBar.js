import React from "react";
import { Tooltip, Button } from "antd";
import Handouts from "./Handouts";
import Speakers from "./Speakers";
import { EyeOutlined, UserOutlined } from "@ant-design/icons";
import "../App.less";

const TitleBar = () => (
  <>
    <h2
      style={{
        margin: "24px 12px 0 12px",
      }}
    >
      Welcome to the GTM Show - November 2021
    </h2>
    <div
      style={{
        margin: "12px",
        display: "inline-block",
      }}
    >
      <span
        style={{
          margin: "0 12px",
        }}
      >
        <EyeOutlined /> 405
      </span>
      <span
        style={{
          margin: "0 12px",
        }}
      >
        <UserOutlined /> 23
      </span>
    </div>
    <div
      style={{
        width: "calc(60vw)",
        margin: "24px 12px 0 12px",
      }}
    >
      Hey there, <em>Notifiends</em>! Are you ready for a positively <em>terrifying</em> episode of the Go to Market Show? We're live on <strong>November 5th at 11AM EST</strong>, and you won't want to miss our spookiest episode yet!<br/><br/>
      <ul>
      <li>Dan Lotzof is in <strong>The Hot Seat</strong> to talk about the EventAB Campaign!</li>
      <li>Come watch as we dive into <strong>A Day in the Life of Public Relations</strong>!</li>
      <li>James Devor and Terri Lester talk about Investor Days on <strong>What Is It?</strong></li>
      <li>A special spotlight on <strong>Matchmaking</strong> for Events!</li>
      <li>The quintessential <strong>Update from Up North</strong>!</li>
      <li>An absolutely frightening <strong>Word of the Month</strong>!</li>
      <li>...and so much more!</li>
      </ul>
    </div>

    <Speakers></Speakers>
    <Handouts></Handouts>

  </>
);

export default TitleBar;
