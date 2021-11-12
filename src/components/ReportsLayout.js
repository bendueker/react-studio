import React, { useState, useEffect } from "react";
import { Layout, Image, Avatar } from "antd";
import { ReactVideo } from "reactjs-media";
import { Row, Col, Affix } from "antd";
import TitleBar from "./TitleBar";
import StudioHeader from "./StudioHeader";
import LineGraph from "./reports/LineGraph";
import "../App.less";

const { Header, Footer, Content } = Layout;

const ReportsLayout = (props) => {
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
        <LineGraph></LineGraph>
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

export default ReportsLayout;
