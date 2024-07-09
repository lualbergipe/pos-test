import React, {useState} from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform } from "react-native";
import { styles } from "./AuthScreen.styles";
import { Button, TextInput, useTheme } from "react-native-paper";
import {useNavigation} from '@react-navigation/native';
import logo from '../../../../assets/img/logo_black.png';
import white from '../../../../assets/img/logo_white.png';

import gradient_light from '../../../../assets/img/background_auth_light.png';
import gradient_dark from '../../../../assets/img/gradient_dark.png';

import PermissionModal from '../../../components/PermissionModal';
import { useStore } from '../../../state/ui/ui-store';


export function StoreScreen() {
    const navigation = useNavigation();
    const [storeSelected, setStoreSelected] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const store = useStore((state) => state.store);
    const isDarkTheme = useStore(state => state.isDarkTheme);
    const { colors } = useTheme();


   

    const handleEmailChange = (text) => {
        setStoreSelected(text);
    };
const loginApi = (storeSelected) => {
    console.log(storeSelected, 'tienda');
    store(storeSelected.toLowerCase())
    navigation.navigate('login')
}
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
    <View style={styles.container}>
    <Image style={styles.background_welcome} source={isDarkTheme ? gradient_dark : gradient_light} />
        <Image style={styles.screen} source={isDarkTheme ? white : logo} />
      <Text style={[styles.title__login, { color: colors.text }]} >Ingresa el usuario de la tienda</Text>
      <View style={styles.container__form}>
      <Text style={[styles.label__login, { color: colors.text }]} >Tienda</Text>
        <TextInput
        style={[styles.input_login, { color: colors.text }]}
        mode="outlined"
        placeholder="Tienda"
        value={storeSelected}
        placeholderTextColor={colors.text}
        onChangeText={handleEmailChange}
        />
      </View>
      <Button 
        style={[styles.button_next, {backgroundColor: colors.primary}]} 
        labelStyle={styles.button_next_Label}
        mode="contained" 
        onPress={() => loginApi(storeSelected)}
        >
        Continuar  </Button>
    </View>
    </KeyboardAvoidingView>
  );
}