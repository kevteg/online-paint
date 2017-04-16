import React, { Component } from 'react';
import MatCanva from '../containers/material_canva';
import Bar from '../containers/bar';

const style = {
    height: 640,
    width: 1400,
};

export default class App extends Component{
    render(){
        return (<div> 

                    <MatCanva style={style}/>
                    <Bar />

                </div>);
    }
}

