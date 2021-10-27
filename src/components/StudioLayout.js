import React from "react";
import { Layout, Tabs, Image, Avatar } from "antd";
import { ReactVideo } from "reactjs-media";
import { Row, Col } from "antd";
import Comments from "./Comments";
import TitleBar from "./TitleBar";
import StudioHeader from "./StudioHeader";
import "../App.less";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;
const StudioLayout = () => (
  <>
    <Layout>
      <Header
        style={{
          background: "#fff",
          padding: "2px",
        }}
      >
        <StudioHeader></StudioHeader>
      </Header>
      <Content
        style={{
          margin: "12px",
/*           minHeight: "calc(100vh - 114px)", */
          background: "#fff",
        }}
      >
        <Row gutter={24}>
          <Col flex="1 auto">
            <ReactVideo
              src="https://qa.onlinexperiences.com/customvts/Prototypes/Lighthouse/lighthouse-rp-v4/speaker.mp4"
              poster="http://placehold.jp/5757f0/ffffff/1600x900.png?text=SLIDES"
              primaryColor="red"
            />

            <TitleBar
              style={{
                height: "calc(100vh - 100px)",
              }}
            ></TitleBar>
          </Col>

          <Col flex="1 1 30vw">
            <Tabs
              style={{
                margin: "0 24px",
                background: "#fff",
                height: "calc(100vh - 100px)",
              }}
            >
              <TabPane tab="Chat" key="1">
                <Comments></Comments>
              </TabPane>
              <TabPane tab="Transcription" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Questions" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </>
);

export default StudioLayout;
