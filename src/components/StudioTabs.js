import React, { useState, useEffect } from "react";
import { Layout, Tabs, Image, Avatar } from "antd";
import { Row, Col, Affix } from "antd";
import Comments from "./Comments";
import TitleBar from "./TitleBar";
import Transcript from "./Transcript";
import "../App.less";

const { TabPane } = Tabs;

const StudioTabs = (props) => {
  const [top, setTop] = useState(10);
  const [activeTab, setActiveTab] = useState(1);
  const size = props.size;

  function changeTab(activeKey) {
    console.log(activeKey);
    setActiveTab({
      activeTab: activeKey,
    });
  }

  return (
    <>
      <Tabs
        style={{
          margin: "0 24px",
          background: "#fff",
          height: size.height + "px",
        }}
      >
        {size.width < 1182 && (
          <TabPane tab="Information" key="0" forceRender={true}>
            <TitleBar></TitleBar>
          </TabPane>
        )}
        {/* {changeTab(1)} */}
        <TabPane tab="Chat" key="1">
          <Comments size={size}></Comments>
        </TabPane>
        <TabPane tab="Transcription" key="2">
          <Transcript></Transcript>
        </TabPane>
        <TabPane tab="Questions" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};

export default StudioTabs;
