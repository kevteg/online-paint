import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import {red500, green500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {color_changed, brush_changed} from '../actions/index'
import ActionEdit from 'material-ui/svg-icons/image/edit';
import {Layer} from 'react-konva';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
};

class Bar extends Component{
  constructor(props){
      super(props);
      this.changeColor = this.changeColor.bind(this);
      this.changePencilType = this.changePencilType.bind(this);
  }
  changePencilType(){
      console.log(this.props.brush);
      this.props.brush_changed((this.props.brush == 'source-over')?'destination-out':'source-over');
  }
  changeColor(){
      this.props.color_changed(Konva.Util.getRandomColor());
      console.log(this.props.color);
  }
  render() {
    return (
    <MuiThemeProvider>
      <Paper zDepth={4}>
    <IconButton  iconStyle={styles.smallIcon}style={styles.small} tooltip="Borrador">
      <ActionDelete onClick={this.changePencilType} color={red500} />
    </IconButton>
    <IconButton iconStyle={styles.smallIcon} style={styles.small} tooltip="Color">
      <ActionEdit onClick={this.changeColor} color={green500} />
    </IconButton>
      </Paper>
    </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state){
    return {
        pencil:state.pencil,
        color:state.color,
        brush:state.brush
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({color_changed, brush_changed}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
