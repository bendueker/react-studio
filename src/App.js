import React from 'react';
import StudioLayout  from './components/StudioLayout';
import StudioLayoutSlides  from './components/StudioLayoutSlides';
import ReportsLayout  from './components/ReportsLayout';
import { Routes, Route, Link } from "react-router-dom";
import './App.less';


const App = () => (
  <>
      <Routes>
        <Route path="/" element={<StudioLayout/>} />
        <Route path="reports" element={<ReportsLayout />} />
        <Route path="slides" element={<StudioLayoutSlides />} />        
      </Routes>
  </>
);

export default App;