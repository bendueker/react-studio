import React, { useState, useEffect } from "react";
import { Layout, Image, Avatar } from "antd";
import { ReactVideo } from "reactjs-media";
import { Row, Col, Affix } from "antd";
import Comments from "./Comments";
import TitleBar from "./TitleBar";
import StudioHeader from "./StudioHeader";
import StudioTabs from "./StudioTabs";
import VideoPlayer from "./VideoPlayer";
import "../App.less";

const { Header, Footer, Content } = Layout;

const StudioLayout = (props) => {
  const [top, setTop] = useState(10);
  const size = useWindowSize();

  return (
    <>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "2px",
          }}
        >
          {/*           <Affix offsetTop={top}> */}
          <StudioHeader></StudioHeader>
          {/*           </Affix> */}
        </Header>
        <Content
          style={{
            margin: "12px",
            background: "#fff",
          }}
        >
          <Row>
            <Col xs={24} xl={16}>
              <div>
                {/*                 <Affix offsetTop={74}> */}
                <VideoPlayer
                  src={
                    "http://placehold.jp/5757f0/ffffff/1600x900.png?text=SLIDES"
                  }
                  poster={
                    "http://placehold.jp/5757f0/ffffff/1600x900.png?text=SLIDES"
                  }
                ></VideoPlayer>
                {/*                 </Affix> */}
              </div>
              {size.width > 1024 && <TitleBar></TitleBar>}
            </Col>

            <Col
              xs={24}
              xl={8}
              /*               style={{
                background: "#dedede",
              }} */
            >
              <div
                style={{
                  height: "230px",
                  margin: "0 12px",
                  background: "#fff",
                }}
              >
                <VideoPlayer
                  src={
                    "https://qa.onlinexperiences.com/customvts/Prototypes/Lighthouse/lighthouse-rp-v3/speaker.mp4"
                  }
                ></VideoPlayer>
              </div>
              <StudioTabs size={size}></StudioTabs>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default StudioLayout;
