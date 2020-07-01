import React, { Component } from 'react';
import './header.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Header extends Component{
    
    newClass(){

        var menu1 = document.getElementById("menu1");
        var menu2 = document.getElementById("menu2");
        var menu3 = document.getElementById("menu3");
        var menu4 = document.getElementById("menu4");
        var menu5 = document.getElementById("menu5");
        var menu6 = document.getElementById("menu6");
        var icono = document.getElementById("nav-icon3");

        icono.classList.toggle('open');

        

        if(menu1.classList.item(0) == 'oculto'){
            menu1.classList.remove("oculto"); 
            menu1.classList.toggle("menu");

            menu2.classList.remove("oculto2"); 
            menu3.classList.remove("oculto2"); 
            menu4.classList.remove("oculto2"); 
            menu5.classList.remove("oculto2"); 
            menu6.classList.remove("oculto2"); 

            
        
        }else{
            menu1.classList.remove("menu"); 
            menu1.classList.toggle("oculto");
            
            menu2.classList.toggle("oculto2"); 
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
            
            <a href="/"><h1 class="titulo" >Khada Jhin</h1></a>
            
        
            <div onClick={this.newClass} id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div id="menu" className="content-menu">
                
                <div id="menu1" class="oculto">

                    <h3 id="menu2" class="oculto2">Articles</h3>

                    <div>

                        <h4 id="menu3" class="oculto2"><a href="/">Historia</a></h4>
                        <h4 id="menu4" class="oculto2"><a href="/">Jugabilidad</a></h4>
                        <h4 id="menu5" class="oculto2"><a href="/">Curiosidades</a></h4>
                        <h4 id="menu6" class="oculto2"><a href="/">Frase</a></h4>

                    </div>


                </div>
            </div>

        </header>

       
    
        </React.Fragment>
            
       
        );

        
    }
    
}

