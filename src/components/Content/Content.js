import React, { Component }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Content extends Component{



    render(){
                 AOS.init();
        

        return(
         
            <div class="content">
                <div class="contenedor">
                    <div class="fila">
                        <div data-aos="zoom-out-right" data-aos-delay="50" data-aos-duration="1000" class="link jhin1"><Link className="router-styles" to="/historia" >Historia</Link></div>
                        <div data-aos="zoom-out-left"data-aos-delay="50" data-aos-duration="1000" class="link jhin2"><Link className="router-styles" to="/jugabilidad" >Jugabilidad</Link></div>
                    </div>
                    <div class="fila">
                        <div data-aos="zoom-in-right" data-aos-delay="50" data-aos-duration="1000" class="link jhin3"><Link className="router-styles" to="/curiosidades" >Curiosidades</Link></div>
                        <div data-aos="zoom-in-left"data-aos-delay="50" data-aos-duration="1000" class="link jhin4"><Link className="router-styles" to="/frases" >Frases</Link></div>
                    </div>
                </div>

         
            </div>
        );

    }
  
}