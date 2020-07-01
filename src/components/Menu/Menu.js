import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div id="menu1" className="menu">

                <h3 id="menu2">Articles</h3>

                <div  className="articles">

                    <h4 id="menu3"><a href="/">Historia</a></h4>
                    <h4 id="menu4"><a href="/">Jugabilidad</a></h4>
                    <h4 id="menu5"><a href="/">Curiosidades</a></h4>
                    <h4 id="menu6"><a href="/">Frase</a></h4>

                </div>


            </div>



        );
    }
}
 
export default Menu;