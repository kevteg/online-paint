import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Layer, Rect, Stage, Group} from 'react-konva';
import {pencil_moved, color_changed, brush_changed} from '../actions/index'

class MatCanva extends Component{
    componentDidMount(){
        this._context = this.refs.mycanva.getContext('2d'); 
        this._context.lineJoin = "round";
        this._context.lineWidth = 5;
    }
    constructor(props){
        super(props);
        this.props.color_changed(Konva.Util.getRandomColor());
        this.props.brush_changed('source-over');
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
         if(this.state.draw){
            //this._context.strokeStyle(this.props.color)
            console.log(this.props.brush);
            this._context.globalCompositeOperation = this.props.brush;
            this.props.pencil_moved(event.evt.clientX, event.evt.clientY);
            this._context.strokeStyle = this.props.color[0];
            this._context.beginPath();
            this._context.moveTo(this.lastPointerPosition.x, this.lastPointerPosition.y);
            this._context.lineTo(this.props.pencil[0], this.props.pencil[1]);
            this._context.closePath();
            this._context.stroke();
            this.lastPointerPosition = {x:this.props.pencil[0], y:this.props.pencil[1]};
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
function mapStateToProps(state){
    return {
        pencil:state.pencil,
        color:state.color,
        brush:state.brush
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({pencil_moved, color_changed, brush_changed}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatCanva)


