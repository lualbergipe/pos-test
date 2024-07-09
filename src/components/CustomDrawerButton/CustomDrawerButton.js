// CustomDrawerButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import close from '../../../assets/img/Button-Icon-Large_close.png';
import menu from '../../../assets/img/Button-menu.png'
import close_light from '../../../assets/img/Button-Icon-Large_close_white.png';
import menu_light from '../../../assets/img/Button-Icon-Large_white.png'
import { useStore } from '../../state/ui/ui-store';
const CustomDrawerButton = (props) => {
  const {icon} = props
  const navigation = useNavigation();
  const isDarkTheme = useStore(state => state.isDarkTheme);


  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    >
      {
        isDarkTheme ? (
          <Image 
              source={icon === 'menu' ? menu_light : close_light} 
              style={styles.buttonImage} 
            />
        ):
        (
          <Image 
              source={icon === 'menu' ? menu : close} 
              style={styles.buttonImage} 
            />
        )
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonImage:{
    
  }
});

export default CustomDrawerButton;
