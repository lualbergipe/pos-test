import React, {useState, useEffect} from 'react';
import { View, Text, Image, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { styles } from "./AuthScreen.styles";
import { Button, TextInput, useTheme } from "react-native-paper";
import {useNavigation} from '@react-navigation/native';
import logo from '../../../../assets/img/logo_black.png';
import logo_white from '../../../../assets/img/logo_white.png';

import gradient_light from '../../../../assets/img/background_auth_light.png';
import gradient_dark from '../../../../assets/img/gradient_dark.png';

import PermissionModal from '../../../components/PermissionModal';
import * as AuthSession from 'expo-auth-session';
import * as Crypto from 'expo-crypto';
import {jwtDecode} from 'jwt-decode';
import { useStore } from '../../../state/ui/ui-store';
import { getUserRoles } from '../../../api/auth';
import { getPermissionStorage } from '../../../api/storage';

// Generar un estado aleatorio
const generateRandomState = async () => {
  const array = await Crypto.getRandomBytesAsync(16);
  return array.join('');
};

// Generar un nonce aleatorio
const generateRandomNonce = async () => {
  const array = await Crypto.getRandomBytesAsync(16);
  return array.join('');
};



export function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [authState, setAuthState] = useState(null);
    const clientId = 'TMGROCERY_ad4d7aab-1269-4dde-975b-f69f969a8da2'
    const clientSecret = '443e9216-d63e-40d4-b3fa-69e43adc80b9'
    const [userInfo, setUserInfo] = useState(null);
    const store = useStore(state => state.vendor);
    const login = useStore((state) => state.login);
    const isDarkTheme = useStore(state => state.isDarkTheme);
    const { colors } = useTheme();


    const discovery = {
      authorizationEndpoint: `https://${store}.myvtex.com/_v/oauth2/auth`,
      tokenEndpoint: `https://${store}.myvtex.com/_v/oauth2/token`,
      userInfoEndpoint: `https://${store}.myvtex.com/_v/oauth2/userinfo`, 
      revocationEndpoint: `https://${store}.myvtex.com/_v/oauth2/logout`
    };
    
    useEffect(() => {
      loginProccess()
        }, [authState])

        const loginProccess = async () => {
          if(authState && authState.access_token){
            const decodedToken = jwtDecode(authState.access_token);
            setUserInfo(decodedToken);
            setEmail(decodedToken?.email)
            //const roles = getUserRoles(store, authState.access_toke)
            //console.log(roles, 'roles========');
            const permisos  = await getPermissionStorage()
            if(permisos === 'true'){
              if(decodedToken && decodedToken.email){
                login(decodedToken.email)
              }
            }else{
              setModalVisible(true);
            }
          }
        }
      
        const handleLogin = async () => {
          setAuthState({"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imx1aXNnaXJhbGRvQHRpdGFtZWRpYS5jb20iLCJlbWFpbCI6Imx1aXNnaXJhbGRvQHRpdGFtZWRpYS5jb20iLCJuYmYiOjE3MjAwMzcwNjQsImV4cCI6MTcyMDAzNzM2NCwiaWF0IjoxNzIwMDM3MDY0LCJzY29wZXMiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImNsaWVudF9pZCI6IlRNR1JPQ0VSWV9hZDRkN2FhYi0xMjY5LTRkZGUtOTc1Yi1mNjlmOTY5YThkYTIiLCJ1c2VyX2lkIjoiZDJmNzllMTEtMzdkZC00YmVmLWFjNDYtZmZkMGZiNzA1NjI0In0.SDrdESObKIqe6csBeZkpu30yPnE7SdDxfcCm1x2JMkQ", "token_type": "bearer"})

          /* const state = await generateRandomState();
          const nonce = await generateRandomNonce();
          const redirectUri = 'vtexpos://oauthredirect';
          const request = new AuthSession.AuthRequest({
            clientId: clientId,
            redirectUri,
            scopes: ['openid', 'profile', 'email'],
            responseType: AuthSession.ResponseType.Code,
            extraParams: {
              response_mode: 'form_post',
              state,
              nonce,
            },
          });
          console.log('Requesting auth with:', request, redirectUri);
          const result = await request.promptAsync(discovery);
          console.log('Auth result:', result);
          if (result.type === 'success') {
            const code = result.params.code;
            const tokenResponse = await fetch(discovery.tokenEndpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}&client_id=${clientId}&client_secret=${clientSecret}`
            });
            const tokenResult = await tokenResponse.json();
            console.log(tokenResult, '=========');
           setAuthState(tokenResult);
          } else {
            console.error('Authentication failed', result);
          } */
        };
        const handleLogout = async () => {
          if (authState && authState.access_token) {
            try {
              const res = await fetch(discovery.revocationEndpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `token=${authState.access_token}&client_id=${clientId}&client_secret=${clientSecret}`
              });
            } catch (error) {
              console.error('Error revoking token:', error);
            }
          }
      
          // Limpiar el estado de autenticación y la información del usuario
          setAuthState(null);
          setUserInfo(null);
        };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValid(validateEmail(text));
    };
const loginApi = (email) => {
    setModalVisible(true);
}

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View  style={styles.container} >
          <Image style={styles.background_welcome} source={isDarkTheme ? gradient_dark : gradient_light} />
       <Image style={styles.screen} source={isDarkTheme ? logo_white : logo} />
      <Text style={[styles.title__login, {color: colors.text}]} >Iniciar sesión</Text>
      <Text style={[styles.subtitle__login, {color: colors.text}]} >Ingresa correo electrónico para envío de código de acceso, recuerda revisar tu carpeta de spam</Text>
    {authState ? (
      <>
        <Text>Logged in as: {authState.access_token}</Text>
        
        <Text>Logged in as: {userInfo?.email}</Text>

        <Button style={styles.button_next} title="Log out" onPress={handleLogout} />
        <Button 
      style={styles.button_next} 
      labelStyle={styles.button_next_Label}
      mode="contained" 
      onPress={handleLogout}
      >
      Loogout  </Button>
      </>
    ) : (
      <View>
        <Button 
      style={styles.button_next} 
      labelStyle={styles.button_next_Label}
      mode="contained" 
      onPress={handleLogin}
      >
      Login vtex  </Button>
      <Button 
      style={styles.button_retro} 
      labelStyle={[styles.button_next_Label_retro, {color: colors.text}]}
      mode="contained" 
      onPress={() => navigation.navigate('store')}
      >
      Atrás  </Button>
      </View>
    )}
     <PermissionModal visible={modalVisible} onClose={closeModal} email={email} />
  </View>
   /*  <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
    <View style={styles.container}>
        <Image style={styles.screen} source={logo} />
      <Text style={styles.title__login} >Iniciar sesión</Text>
      <Text style={styles.subtitle__login} >Ingresa correo electrónico para envío de código de acceso, recuerda revisar tu carpeta de spam</Text>
      <View style={styles.container__form}>
      <Text style={styles.label__login} >Dirección de correo electrónico</Text>
        <TextInput
        style={styles.input_login}
        mode="outlined"
        placeholder="Ingresa tu correo"
        value={email}
        onChangeText={handleEmailChange}
        />
      </View>
      <Button 
        style={isValid ? styles.button_next : styles.button_next_disabled} 
        labelStyle={styles.button_next_Label}
        mode="contained" 
        onPress={() => loginApi(email)}
        disabled={!isValid}
        >
        Enviar código  </Button>
    </View>
    <PermissionModal visible={modalVisible} onClose={closeModal} email={email} />
    </KeyboardAvoidingView> */
  );
}