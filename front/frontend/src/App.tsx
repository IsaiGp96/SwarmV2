import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import BA from './pages/ba';

const App: React.FC = () => {

  return (
    <Router>
    <Header />
    <div className="content">
      <Routes>
        <Route path="/ba" element={<BA />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
