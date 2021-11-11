import React from 'react';
import 'antd/dist/antd.css';
import "../App.less";
import { Timeline } from 'antd';



function Transcript(props) {

  const ExampleItem = ({ children }) => (
  <Timeline.Item
    //actions={[<span key="comment-nested-delete">Delete</span>]}
    color={"blue"}
    content={<p>Create a services site Create a services site Create a services</p>}
  >Create a services site 2015-09-01
    {children}
  </Timeline.Item>
);


  return (
  <Timeline>
    <ExampleItem></ExampleItem>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Create a services site 2015-09-01</Timeline.Item>
  </Timeline>
  );
}

export default Transcript;
