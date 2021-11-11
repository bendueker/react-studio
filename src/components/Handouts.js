import React from "react";
import { List, Avatar } from "antd";
import { FilePdfOutlined } from "@ant-design/icons";
import "../App.less";
import moment from "moment";

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const Handouts = () => (
  <>
    <h2
      style={{
        margin: "12px",
      }}
    >
      Handouts
    </h2>
    <List
      style={{
        margin: "12px",
      }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <FilePdfOutlined
                style={{
                  fontSize: "40px",
                }}
              />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  </>
);

export default Handouts;
