import React, { Component } from 'react';
import MatCanva from '../containers/material_canva';
import Bar from '../containers/bar';

const style = {
    height: 550,
    width: 1200,
};

export default class App extends Component{
    render(){
        console.log("%cCreado por: Kevin Hernández y Estefany Salas. Sistemas distribuidos 2017-1 Unet.", "background: red; color: yellow; font-size: x-large");
        return (<div> 

                    <MatCanva style={style}/>
            <br/>
                    <Bar />

                </div>);
    }
}

