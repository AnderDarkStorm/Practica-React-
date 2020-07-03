import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Curiosidades extends Component{
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        AOS.init();
        return ( 
           <div className="curiosidades">

                <Intro
                    class_intro="intro_curiosidades"
                    mensaje1="Curiosidades"
                />  

                <div className="curiosidades_content">

                    <p data-aos="fade-right" data-aos-duration="1000">✔ Jhin está parcialmente inspirado en Simo Häyhä.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Su nombre artístico Khada Jhin significa "Excelencia Dorada".</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Jhin es el primer campeón en presentar una animación de derribo en su aspecto clásico, a través de Audiencia Cautiva - La Belleza de la Muerte. Sin embargo, debe tenerse en cuenta que el efecto pasivo no es únicamente para fines cosméticos.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ El violín para el tema de Jhin (seguido de un coro) se puede escuchar mientras el jugador está canalizando Llamado a Escena Llamado a Escena.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Ocasionalmente, cuando juegas como Jhin, al comienzo del juego (entre tu equipo apareciendo en la fuente y luego los súbditos haciéndolo en el nexo) puedes escuchar una versión del tema del mapa que se ajusta al estilo del propio Jhin.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Jhin tiene cierto grado de magia innata, ya que es capaz de poner magia en sus balas. El arma en sí, Murmullo Murmullo, ya es mágica debido a que es hextech.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Se ha confirmado que sus balas dan forma a la carne de sus víctimas en su elección o hacen que se mueva, así como otros efectos.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ El filtro de voz de Jhin PROYECTO: Jhin hace que suene similar a 'Ultron' de Marvel Comics.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ De acuerdo con la cinemática de League of Legends de la Temporada 2019: Awaken, Jhin también puede tocar el piano.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Jhin muestra rasgos consistentes con el trastorno obsesivo compulsivo centrado en el número cuatro.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Su tema de inicio de sesión se basa en motivos de 4 notas/escrito con una firma de tiempo 4/4 (cada barra está separada en 4 tiempos distintos)</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Su nombre y título tienen cuatro letras y cuatro sílabas respectivamente.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ En los teclados de computadora comunes (QWERTY, AZERTY, etc.) las teclas que deletrean su nombre hacen el número 4 en diagonal.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ IIII es la escritura alternativa arcaica y poco común, que usa marcas de conteo, para el cuatro romano IV, que usa notación sustractiva. Las marcas de conteo grabadas en Murmullo Murmullo podrían estar haciendo referencia a esta notación..</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Cuando "actúa" en cualquier nación, hace que cuatro personas sean "hermosas y perfectas".</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Murmullo puede contener hasta cuatro balas/disparar hasta cuatro veces antes de que Jhin tenga que recargar, siendo el cuarto disparo el más mortal.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Granada Bailarina puede rebotar hasta cuatro veces.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Brote Mortal marca un objetivo durante cuatro segundos.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Audiencia Cautiva revela unidades durante cuatro segundos.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Llamado a Escena puede disparar hasta cuatro disparos, siendo el cuarto el más mortal.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Durante su broma, Jhin suelta a Murmullo Murmullo y dispara las cuatro balas.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Antes de que las armerías de Kashuri le otorgaran a Murmullo Murmullo Jhin solía 'actuar' con cuchillas impulsadas por técnicas de chi transmitidas por su padre.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Aunque no creó él mismo a Murmullo Murmullo, sí influyó en su diseño y crea sus propias balas con infusión de magia.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ El dispositivo que Jhin lleva en su hombro es un acelerador de masas impulsado por Hextech que a su vez activa y carga Murmullo Murmullo cuando es Llamado a Escena completamente ensamblado.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Jhin parece ser ambidiestro (dispara Murmullo Murmullo regularmente con su mano izquierda pero cuando está en Llamado a  Escena completamente ensamblado dispara con su derecha.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Debajo de la máscara, Jhin tiene una cara completamente normal.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Su comida favorita son las albóndigas.</p>
                    <p data-aos="fade-left" data-aos-duration="1000">✔ Khada Jhin es solo un nombre artístico, y el nombre real de Jhin sigue siendo desconocido.</p>
                    <p data-aos="fade-right" data-aos-duration="1000">✔ Jhin tiene entre 38 y 39 años.</p>
                   
                </div>

           </div>     
        );
    }
}
 
 