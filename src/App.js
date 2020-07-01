import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
        <Header/> 
        <Intro/>
        <Content/>
    </div>
  );
}

export default App;
