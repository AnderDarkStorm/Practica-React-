import React, { Component } from 'react';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    BrowserRouter,
    Link,
    NavLink
  } from "react-router-dom";
import music from '../../assets/music.mp3';

export default class Header extends Component{
    
    newClass(){

        var menu1 = document.getElementById("menu1");
        
        var menu3 = document.getElementById("menu3");
        var menu4 = document.getElementById("menu4");
        var menu5 = document.getElementById("menu5");
        var menu6 = document.getElementById("menu6");
        var icono = document.getElementById("nav-icon3");

        icono.classList.toggle('open');

        if(menu1.classList.item(0) === 'oculto'){
            menu1.classList.remove("oculto"); 
            menu1.classList.toggle("menu");

            menu3.classList.remove("oculto2"); 
            menu4.classList.remove("oculto2"); 
            menu5.classList.remove("oculto2"); 
            menu6.classList.remove("oculto2"); 

            menu3.classList.toggle("item-menu"); 
            menu4.classList.toggle("item-menu"); 
            menu5.classList.toggle("item-menu"); 
            menu6.classList.toggle("item-menu"); 

        }else{
            menu1.classList.remove("menu"); 
            menu1.classList.toggle("oculto");
        
            menu3.classList.remove("item-menu"); 
            menu4.classList.remove("item-menu"); 
            menu5.classList.remove("item-menu"); 
            menu6.classList.remove("item-menu"); 

            menu3.classList.toggle("oculto2"); 
            menu4.classList.toggle("oculto2"); 
            menu5.classList.toggle("oculto2"); 
            menu6.classList.toggle("oculto2"); 
           
        }
    }

    render(){   
        AOS.init();
        return(
        
         <React.Fragment>

        <header className="App-header">
            
            <Link to="/"><h1 class="titulo" >Khada Jhin</h1></Link>
            <audio preload autoPlay loop controls >
            <source src={music}  type="audio/mpeg" />
            </audio>
            <div onClick={this.newClass} id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div id="menu" className="content-menu">
                
                <div id="menu1" class="oculto">

        

                    <div className="div_aux_menu">

                        <h4 id="menu3" class="oculto2"><NavLink activeClassName="active" to="/historia">Historia</NavLink></h4>
                        <h4 id="menu4" class="oculto2"><NavLink activeClassName="active" to="/jugabilidad">Jugabilidad</NavLink></h4>
                        <h4 id="menu5" class="oculto2"><NavLink activeClassName="active" to="/curiosidades">Curiosidades</NavLink></h4>
                        <h4 id="menu6" class="oculto2"><NavLink activeClassName="active" to="/frases">Frases</NavLink></h4>

                    </div>

                </div>
            </div>

        </header>
        <div className="div_aux"></div>

        </React.Fragment>
            
        );

        
    }
    
}

