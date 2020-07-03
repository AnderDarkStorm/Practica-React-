import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Intro extends Component{

    render(){
        AOS.init();
    return(
        <div className={this.props.class_intro}>
            
            <div data-aos="zoom-in" data-aos-duration="2000">
             <h2  class="mensaje no_seleccion">{this.props.mensaje1}<br/>{this.props.mensaje2}</h2>
            </div>

        </div>
        

    );
}

}
