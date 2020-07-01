import React, { Component }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Content extends Component{



    render(){
                 AOS.init();
        

        return(
         
            <div class="content">
                <div class="contenedor">
                    <div class="fila">
                        <div data-aos="zoom-out-right" data-aos-delay="50" data-aos-duration="1000" class="link jhin1"><a href="/" >Historia</a></div>
                        <div data-aos="zoom-out-left"data-aos-delay="50" data-aos-duration="1000" class="link jhin2"><a href="/" >Jugabilidad</a></div>
                    </div>
                    <div class="fila">
                        <div data-aos="zoom-in-right" data-aos-delay="50" data-aos-duration="1000" class="link jhin3"><a href="/" >Curiosidades</a></div>
                        <div data-aos="zoom-in-left"data-aos-delay="50" data-aos-duration="1000" class="link jhin4"><a href="/" >Frases</a></div>
                    </div>
                </div>

         
            </div>
        );

    }
  
}