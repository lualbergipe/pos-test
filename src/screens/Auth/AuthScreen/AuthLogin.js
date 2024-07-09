import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import * as Crypto from 'expo-crypto';
import jwtDecode from 'jwt-decode';

const generateRandomState = async () => {
  const array = await Crypto.getRandomBytesAsync(16);
  return array.join('');
};

const generateRandomNonce = async () => {
  const array = await Crypto.getRandomBytesAsync(16);
  return array.join('');
};

const discovery = {
  authorizationEndpoint: 'https://tmgrocery.myvtex.com/_v/oauth2/auth',
  tokenEndpoint: 'https://tmgrocery.myvtex.com/_v/oauth2/token',
  userInfoEndpoint: 'https://tmgrocery.myvtex.com/_v/oauth2/userinfo', 
  revocationEndpoint: 'https://tmgrocery.myvtex.com/_v/oauth2/revoke'
};

export default function AuthLogin() {
  const [authState, setAuthState] = useState(null);
  const clientId = 'TMGROCERY_ad4d7aab-1269-4dde-975b-f69f969a8da2'
  const clientSecret = '443e9216-d63e-40d4-b3fa-69e43adc80b9'
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (authState && authState.access_token) {
      const decodedToken = jwtDecode(authState.access_token);
      console.log(decodedToken);
      setUserInfo(decodedToken);
    }
  }, [authState]);

  const handleLogin = async () => {
    const state = await generateRandomState();
    const nonce = await generateRandomNonce();
    const redirectUri = AuthSession.makeRedirectUri({
      scheme: 'vtexpos',
    });
  
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
      console.log('Authorization code:', code);
  
      try {
        const tokenResponse = await fetch(discovery.tokenEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURIComponent(redirectUri)}&client_id=${clientId}&client_secret=${clientSecret}`,
        });
  
        const tokenResult = await tokenResponse.json();
        setAuthState(tokenResult);
        console.log('Token result:', tokenResult);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    } else {
      console.error('Authentication failed', result);
      alert(`Authentication failed: ${JSON.stringify(result)}`);
    }
  };

  const handleLogout = async () => {
    if (authState && authState.access_token) {
      try {
        await fetch(discovery.revocationEndpoint, {
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
  
  return (
    <View style={styles.container}>
      {authState ? (
        <>
          <Text>Logged in as: {authState.access_token}</Text>
          <Text>Logged in as: {userInfo?.email}</Text>
          <Button title="Log out" onPress={handleLogout} />
        </>
      ) : (
        <Button title="Log in with VTEX" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
