import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import audio1 from '../../assets/audio1.ogg';
import audio2 from '../../assets/audio2.ogg';
import audio3 from '../../assets/audio3.ogg';
import audio4 from '../../assets/audio4.ogg';
import audio5 from '../../assets/audio5.ogg';
import audio6 from '../../assets/audio6.ogg';
import audio7 from '../../assets/audio7.ogg';
import audio8 from '../../assets/sublime.ogg';

export default class Frases extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  

            <div className="frases">

                <Intro
                    class_intro="intro_frases"
                    mensaje1="Frases"
                />  

                <div className="contenedor_audio">

                <div>
                <audio  data-aos="flip-left" data-aos-duration="1000" controls preload>
                    <source src={audio1} type="audio/ogg" />  
                </audio>
                <audio  data-aos="flip-left" data-aos-duration="1000" controls preload>
                    <source src={audio2} type="audio/ogg" />  
                </audio>
                <audio  data-aos="flip-left" data-aos-duration="1000" controls preload>
                    <source src={audio3} type="audio/ogg" />  
                </audio>
                <audio  data-aos="flip-left" data-aos-duration="1000" controls preload>
                    <source src={audio4} type="audio/ogg" />  
                </audio>
                </div>
                <div>
                <audio data-aos="flip-right" data-aos-duration="1000" controls preload>
                    <source src={audio5} type="audio/ogg" />  
                </audio>
                <audio data-aos="flip-right" data-aos-duration="1000" controls preload>
                    <source src={audio6} type="audio/ogg" />  
                </audio>
                <audio data-aos="flip-right" data-aos-duration="1000" controls preload>
                    <source src={audio7} type="audio/ogg" />  
                </audio>
                <audio data-aos="flip-right" data-aos-duration="1000" controls preload>
                    <source src={audio8} type="audio/ogg" />  
                </audio>
                </div>

                </div>

            </div>

        );
    }
}
 
 