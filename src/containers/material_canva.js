import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Layer, Rect, Stage, Group} from 'react-konva';
import {pencil_moved, color_changed, brush_changed} from '../actions/index'
import {socket, id} from '../index';

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
        this.manageChange = this.manageChange.bind(this);
        this.drawer = this.drawer.bind(this);
        this.otherClientsLP = {};
        socket.onmessage = this.manageChange;
    }
    manageChange(e){
       var data = JSON.parse(e.data);
       console.log(data);
       if(data.id != id){
          if(!(data.id in this.otherClientsLP) || data.first){
               this.otherClientsLP[data.id] = {x:data.x, y:data.y}
          }
          this.drawer(this.otherClientsLP[data.id], data.x, data.y, data.color, data.brush_type);
           this.otherClientsLP[data.id]  = {x:data.x, y:data.y}
       }else
            console.log('own drawing');
    }
    clicked(event){
        this.setState({draw: !this.state.draw});
        this.lastPointerPosition = {x:event.evt.clientX, y:event.evt.clientY}; 
        this.props.pencil_moved(event.evt.clientX, event.evt.clientY, this.props.color[0], this.props.brush, this.state.draw);
    }
    moved(event){
         if(this.state.draw){
            this.props.pencil_moved(event.evt.clientX, event.evt.clientY, this.props.color[0], this.props.brush);
            this.drawer(this.lastPointerPosition, this.props.pencil[0], this.props.pencil[1], this.props.color[0], this.props.brush);
            this.lastPointerPosition = {x:this.props.pencil[0], y:this.props.pencil[1]};
         }
    }
    drawer(lastPosition, x, y, color, brush_type){
            this._context.globalCompositeOperation = brush_type;
            this._context.strokeStyle = color;
            this._context.beginPath();
            this._context.moveTo(lastPosition.x, lastPosition.y);
            this._context.lineTo(x, y);
            this._context.closePath();
            this._context.stroke();           
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


