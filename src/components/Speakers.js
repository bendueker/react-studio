import React from "react";
import { List, Avatar } from "antd";
import "../App.less";
import moment from "moment";

function Speakers(props) {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const data = [
    {
      title: "Ben Chodor",
      avatar:
        "https://files.onlinexperiences.com/FileLibrary/5948/6/Ben_Chodor_Studio.jpg",
      description: "President",
    },
    {
      title: "Dan Lotzof",
      avatar:
        "https://files.onlinexperiences.com/FileLibrary/5948/6/speaker-dlotzof.jpg",
      description: "SVP, Revenue & Chief of Staff",
    },
    {
      title: "Erik Carlson",
      avatar:
        "https://files.onlinexperiences.com/FileLibrary/5948/6/Erik_Carlson.png",
      description: "Chief Financial Officer",
    },
  ];

  return (
    <div>
      <h2
        style={{
          margin: "24px 12px 0 12px",
        }}
      >
        Speakers
      </h2>
      <List
        style={{
          margin: "24px 12px 0 12px",
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.avatar}
                  size={{
                    xs: 40,
                    sm: 40,
                    md: 40,
                    lg: 64,
                    xl: 80,
                    xxl: 100,
                  }}
                  alt={item.title}
                />
              }
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
}

export default Speakers;
