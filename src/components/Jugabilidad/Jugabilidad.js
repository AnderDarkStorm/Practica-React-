import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import jhin_p from '../../assets/img/Jhin_P.jpg';
import jhin_q from '../../assets/img/Jhin_Q.jpg';
import jhin_w from '../../assets/img/Jhin_W.jpg';
import jhin_e from '../../assets/img/Jhin_E.jpg';
import jhin_r from '../../assets/img/Jhin_R.jpg';
import hab_p from  '../../assets/hab_p.webm';
import hab_q from  '../../assets/hab_q.webm';
import hab_w from  '../../assets/hab_w.webm';
import hab_e from  '../../assets/hab_e.webm';
import hab_r from  '../../assets/hab_r.webm';


export default class Jugabilidad extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    description(valor){

        var p = document.getElementById("hab_p");
        var q = document.getElementById("hab_q");
        var w = document.getElementById("hab_w");
        var e = document.getElementById("hab_e");
        var r = document.getElementById("hab_r");

        switch(valor){

            case 1:

                if(p.classList.item(0)==='hab_oculto'){
                p.classList.toggle("hab_mostrar");
                p.classList.remove("hab_oculto");

                q.classList.remove("hab_mostrar");
                w.classList.remove("hab_mostrar");
                e.classList.remove("hab_mostrar");
                r.classList.remove("hab_mostrar");

                q.classList.add("hab_oculto");
                w.classList.add("hab_oculto");
                e.classList.add("hab_oculto");
                r.classList.add("hab_oculto");
                }else{

                    p.classList.toggle("hab_oculto");
                    p.classList.remove("hab_mostrar");
                }

            break;
            case 2:
                if(q.classList.item(0)==='hab_oculto'){
                    q.classList.toggle("hab_mostrar");
                    q.classList.remove("hab_oculto");
    
                    p.classList.remove("hab_mostrar");
                    w.classList.remove("hab_mostrar");
                    e.classList.remove("hab_mostrar");
                    r.classList.remove("hab_mostrar");
    
                    p.classList.add("hab_oculto");
                    w.classList.add("hab_oculto");
                    e.classList.add("hab_oculto");
                    r.classList.add("hab_oculto");
                    }else{
    
                        q.classList.toggle("hab_oculto");
                        q.classList.remove("hab_mostrar");
                    }
            break;
            case 3:
                if(w.classList.item(0)==='hab_oculto'){
                    w.classList.toggle("hab_mostrar");
                    w.classList.remove("hab_oculto");
    
                    p.classList.remove("hab_mostrar");
                    q.classList.remove("hab_mostrar");
                    e.classList.remove("hab_mostrar");
                    r.classList.remove("hab_mostrar");
    
                    p.classList.add("hab_oculto");
                    q.classList.add("hab_oculto");
                    e.classList.add("hab_oculto");
                    r.classList.add("hab_oculto");
                    }else{
    
                        w.classList.toggle("hab_oculto");
                        w.classList.remove("hab_mostrar");
                    }
            break;
            case 4:
                if(e.classList.item(0)==='hab_oculto'){
                    e.classList.toggle("hab_mostrar");
                    e.classList.remove("hab_oculto");
    
                    p.classList.remove("hab_mostrar");
                    w.classList.remove("hab_mostrar");
                    q.classList.remove("hab_mostrar");
                    r.classList.remove("hab_mostrar");
    
                    p.classList.add("hab_oculto");
                    w.classList.add("hab_oculto");
                    q.classList.add("hab_oculto");
                    r.classList.add("hab_oculto");
                    }else{
    
                        e.classList.toggle("hab_oculto");
                        e.classList.remove("hab_mostrar");
                    }
            break;
            case 5:
                if(r.classList.item(0)==='hab_oculto'){
                    r.classList.toggle("hab_mostrar");
                    r.classList.remove("hab_oculto");
    
                    p.classList.remove("hab_mostrar");
                    w.classList.remove("hab_mostrar");
                    e.classList.remove("hab_mostrar");
                    q.classList.remove("hab_mostrar");
    
                    p.classList.add("hab_oculto");
                    w.classList.add("hab_oculto");
                    e.classList.add("hab_oculto");
                    q.classList.add("hab_oculto");
                    }else{
    
                        r.classList.toggle("hab_oculto");
                        r.classList.remove("hab_mostrar");
                    }
            break;


        }

    }


    render() { 
        return ( 
            <div className="jugabilidad">

                <Intro
                    class_intro="intro_jugabilidad"
                    mensaje1="Jugabilidad"
                />  

            <div className="resumen">

                <h3>Rol: Tirador</h3>

                <div>
                <h3>Dificultad:</h3>
                <div className="dificultad"></div>
                <div className="dificultad"></div>
                <div className="dificultad0"></div>
                </div>


            </div>


            <div className="habilidades">

                <h2>Habilidades</h2>

                <div className="habs_img">
                    <div>
                    <img src={jhin_p} onClick={() =>this.description(1)} id="jhin_p" className="jhin_hab" width="100" alt=""/>
                    </div>
                    <div>
                    <img src={jhin_q} onClick={() =>this.description(2)} id="jhin_q" className="jhin_hab"  width="100" alt=""/>
                    </div>
                    <div>
                    <img src={jhin_w} onClick={() =>this.description(3)} id="jhin_w" className="jhin_hab" width="100" alt=""/>
                    </div>
                    <div>
                    <img src={jhin_e} onClick={() =>this.description(4)} id="jhin_e" className="jhin_hab"  width="100" alt=""/>
                    </div>
                    <div>
                    <img src={jhin_r} onClick={() =>this.description(5)} id="jhin_r"className="jhin_hab"  width="100" alt=""/>
                    </div>
                </div>

                <div className="habs_video">

                    <div id="hab_p" class="hab_oculto">
                        <h2>P - Murmullo</h2>
                        <div>
                        <p>El cañón de mano de Jhin, Murmullo, es un preciso instrumento diseñado para infligir daño superior. Dispara a un ritmo establecido y porta solo cuatro balas. Jhin imbuye a la última bala con magia oscura para asestar golpes críticos e infligir daño de ejecución adicional. Siempre que Murmullo asesta golpes críticos, le otorga a Jhin un estallido de velocidad de movimiento.</p> 
                        <video src={hab_p} controls width="300" />
                        </div>
                    </div>

                    <div id="hab_q" class="hab_oculto">
                        <h2>Q - Granada Bailarina</h2>
                        <div>
                        <p>Jhin lanza un cartucho mágico contra el enemigo. Puede golpear hasta cuatro objetivos y obtiene daño cada vez que mata.</p> 
                        <video src={hab_q} controls width="300" />
                        </div>
                    </div>

                    <div id="hab_w" class="hab_oculto">
                        <h2>W - Brote Mortal</h2>
                        <div>
                        <p>Jhin esgrime su bastón y dispara una sola bala con un enorme alcance. Atraviesa a los súbditos y monstruos, pero se detiene en el primer campeón impactado. El objetivo queda inmovilizado si fue alcanzado recientemente por ataques de aliados de Jhin, Trampas de Loto, o si recibió daño de Jhin.</p> 
                        <video src={hab_w} controls width="300" />
                        </div>
                    </div>
                        
                    <div id="hab_e" class="hab_oculto">
                        <h2>E - Audiencia Cautiva</h2>
                        <div>
                        <p>Jhin coloca una trampa de loto invisible que florece cuando se camina por encima de ella y ralentiza a los enemigos cercanos antes de infligir daño con una explosión de pétalos. La Belleza de la Muerte: Cuando Jhin mata a un campeón enemigo, una trampa florecerá cerca del cadáver.</p> 
                        <video src={hab_e} controls width="300" />
                        </div>
                    </div>

                    <div id="hab_r" class="hab_oculto">
                        <h2>R - Llamado a Escena</h2>
                        <div>
                        <p>Jhin canaliza, lo que transforma a Murmullo en un mega cañón montado al hombro. Puede disparar 4 superbalas desde distancias extremas que atraviesan a los súbditos y a los monstruos, pero se detienen en el primer campeón que impacta. Murmullo incapacita a los enemigos que golpea, lo que los ralentiza y retrasa el daño de ejecución. El cuarto disparo está perfectamente diseñado, es épicamente poderoso, y garantiza un golpe crítico.</p> 
                        <video src={hab_r} controls width="300" />
                        </div>
                    </div>

                </div>


            </div>
            </div>
        );
    }
}
 
 