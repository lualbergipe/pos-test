// CustomDrawerBackground.js
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import background_menu_light from '../../../assets/img/drawerBackground.png'
import background_menu_dark from '../../../assets/img/background_menu_dark.png'
import { useStore } from '../../state/ui/ui-store';

const CustomDrawerBackground = ({ children }) => {
  const isDarkTheme = useStore(state => state.isDarkTheme);

  return (
    <ImageBackground 
      source={isDarkTheme ? background_menu_dark : background_menu_light}
      style={styles.background}
    >
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
});

export default CustomDrawerBackground;
