import React, {useEffect} from 'react';
import { View, Text, Image, Dimensions } from "react-native";
import { styles } from "./AuthScreen.styles";
import { Button, useTheme } from "react-native-paper";
import {useNavigation} from '@react-navigation/native';
import logo from '../../../../assets/img/logo_black.png';
import back from '../../../../assets/img/background_welcome.png';
import white from '../../../../assets/img/logo_white.png';
import { useStore } from "../../../state/ui/ui-store";


export function WellcomeScreen() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const isDarkTheme = useStore(state => state.isDarkTheme);
    const divice = useStore((state) => state.divice)
    const isTablet = useStore((state) => state.isTablet);

    const isTabletFunction = () => {
      const { width, height } = Dimensions.get('window');
      const aspectRatio = height / width;
      const tablet = width >= 768 && aspectRatio < 1.6
       divice(tablet)
      };
      useEffect(() => {
        isTabletFunction();
      }, [])
      console.log(isTablet, 'el estado si es tablet');
  //const [showLogin, setShowLogin] = useState(true);

  //const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <Image style={styles.background_welcome} source={back} />
        <Image style={styles.screen} source={isDarkTheme ? white : logo} />
      <Text style={[styles.title__wellcome, { color: colors.text }]} >Tu mejor aliado en puntos de ventas</Text>
      <Button 
        style={[styles.button_next, {backgroundColor: colors.primary}]} 
        labelStyle={[styles.button_next_Label, {color: colors.tetx}]}
        mode="contained" 
        onPress={() => navigation.navigate('store')}>
        Iniciar sesión  </Button>
    </View>
  );
}