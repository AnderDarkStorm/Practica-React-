import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Content from './components/Content/Content';
import Historia from './components/Historia/Historia';
import Jugabilidad from './components/Jugabilidad/Jugabilidad';
import Curiosidades from './components/Curiosidades/Curiosidades';
import Frases from './components/Frases/Frases';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './ScrollToTop';
import music from './assets/music.mp3';


function App() {
  AOS.init();
  return (
    <Router>

       <div className="App">
         
        <Header/> 
      <Switch>
        <Route path="/" exact>
          <ScrollToTop/>
          <Intro
            class_intro="intro"
            mensaje1="Mi genio florece en la masacre"
            mensaje2="como un lirio al amanecer."
          />
          <Content/>
        </Route>

        <Route path="/historia">
        <ScrollToTop/>
          <Historia />

        </Route>
        <Route path="/jugabilidad">
          <ScrollToTop/>
          <Jugabilidad/>

        </Route>
        <Route path="/curiosidades">
          <ScrollToTop/>
          <Curiosidades/>

        </Route>
        <Route path="/frases">
          <ScrollToTop/>
          <Frases/>

        </Route>
      </Switch>
      
      </div>

    </Router>
  );
}

export default App;
