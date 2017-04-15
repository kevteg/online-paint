import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Layer, Rect, Stage, Group} from 'react-konva';
import {pencil_moved} from '../actions/index'

class MatCanva extends Component{
    componentDidMount(){
        this.context = this.refs.mycanva.getContext('2d');
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;
        this.context.globalCompositeOperation = 'source-over';
    }

    constructor(props){
        super(props);
        this.clicked = this.clicked.bind(this);
        this.moved = this.moved.bind(this);
        this.state = {draw: false};
        this.lastPointerPosition = {x:0,y:0};
    }
    clicked(event){
        this.setState({draw: !this.state.draw});
        this.lastPointerPosition = {x:event.evt.clientX, y:event.evt.clientY};    
    }
    moved(event){
        var x = event.evt.clientX;
        var y = event.evt.clientY; 
         if(this.state.draw){
             this.props.pencil_moved(x, y);
            this.context.beginPath();
            this.context.moveTo(this.lastPointerPosition.x, this.lastPointerPosition.y);
            this.context.lineTo(x, y);
            this.context.closePath();
            this.context.stroke();
            this.lastPointerPosition = {x:x, y:y};
         }
    }

    render(){
        return (
            <div>
            <MuiThemeProvider>
              <Paper style={this.props.style} zDepth={2} rounded={false} >
                <Stage oncontentMousemove={this.moved} oncontentClick={this.clicked} width={this.props.style.width} height={this.props.style.height}>

      <Layer ref="mycanva"/>             

              </Stage>
              </Paper>
</MuiThemeProvider>
            </div>
                );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({pencil_moved}, dispatch)
}

export default connect(null, mapDispatchToProps)(MatCanva)


