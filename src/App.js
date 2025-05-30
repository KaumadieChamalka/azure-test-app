import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MSLicensingProjectView from './pages/MSLicensingProjectView';
import NextScreen from './screens/NextScreen';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' for older versions
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MSLicensingProjectView />} />
        <Route path="/next-screen" element={<NextScreen />} />
      </Routes>
    </Router>
  );
}

export default App;