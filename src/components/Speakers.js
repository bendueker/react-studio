import React from "react";
import { List, Avatar } from "antd";
import "../App.less";
import moment from "moment";

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const data = [
  {
    title: "Joe Johnson",
  },
  {
    title: "Jack Smith",
  },
  {
    title: "Dirk Johannson",
  },
  {
    title: "Ant Design Title 4",
  },
];

const Speakers = () => (
  <>
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
            avatar={<Avatar src="https://files.onlinexperiences.com/FileLibrary/3645/6/Dan_Lotzof_.jpg" size="large"/>}
            title={<a href="https://ant.design">{item.title}</a>}
            description="SVP, Global Revenue & Sales and Chief of Staff"
          />
        </List.Item>
      )}
    />
  </>
);

export default Speakers;
