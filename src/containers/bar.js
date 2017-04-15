import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const iconStyles = {
  marginRight: 24,
};
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

const favoritesIcon = <FontIcon className="material-icons">delete</FontIcon>;
const nearbyIcon = <IconLocationOn />;
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pencil_moved} from '../actions/index'

const eraseIcon = <FontIcon className="material-icons" style={iconStyles} color={red500}>home</FontIcon>

class Bar extends Component{
state = {
    selectedIndex: 0,
  };

  render() {
    return (
                     <MuiThemeProvider>
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Borrar todo"
            icon={eraseIcon} 
          />
          <BottomNavigationItem
            label="Borrador"
            icon={favoritesIcon}
       
          />
          <BottomNavigationItem
            label="Cambiar color"
            icon={nearbyIcon}
      
          />
        </BottomNavigation>
      </Paper>
                     </MuiThemeProvider>
    );
  }
}
/*
function mapDispatchToProps(dispatch){
    return bindActionCreators({pencil_moved}, dispatch)
}

export default connect(null, mapDispatchToProps)(MatCanva)
*/
export default Bar;

