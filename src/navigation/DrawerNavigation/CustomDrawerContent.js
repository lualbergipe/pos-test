import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useTheme, Switch } from 'react-native-paper';
import logo_black from '../../../assets/img/logo_black.png';
import logo_white from '../../../assets/img/logo_white_ajustado.png';
import settings from '../../../assets/img/settings.png';
import turno from '../../../assets/img/meeting_room.png';
import CustomDrawerItem from './CustomDrawerItem';
import CustomDrawerBackground from '../../components/CustomDrawerBackground/CustomDrawerbackground';
import CustomDrawerButton from '../../components/CustomDrawerButton/CustomDrawerButton';
import { useStore } from '../../state/ui/ui-store';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CustomDrawerContent = (props) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const isDarkTheme = useStore(state => state.isDarkTheme);
  const toggleTheme = useStore(state => state.toggleTheme);
  const { logout } = useStore.getState();

  return (
    <CustomDrawerBackground>
    <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollViewContent}>
      <View style={[styles.header]}>
        <CustomDrawerButton  icon= 'close' />
        <View style={[styles.container_name, { backgroundColor: colors.primary }]}>
          <Text style={[styles.text_name, { color: colors.textInvert, }]}>LG</Text>
        </View>
        <View>
          <Text style={[styles.header_name, {color: colors.text}]}>Gabriel Andrade</Text>
          <View style={[styles.header_rol, {backgroundColor: colors.primary, }]}>
          <Text style={[styles.header_rol_text]}>Vendedor</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawerItemsContainer}>
        <CustomDrawerItem
          label="Inicio"
          iconName="home"
          focused={props.state.index === 0}
          onPress={() => props.navigation.navigate('home')}
        />
        <CustomDrawerItem
          label="Pedidos"
          iconName="cubes"
          focused={props.state.index === 2}
          onPress={() => props.navigation.navigate('orders')}
        />
        <View style={styles.logout_button}>
          <TouchableOpacity style={styles.logout_button_content} onPress={() => logout()}>
          <AwesomeIcon
                name='sign-out'
                size={20}
                color={colors.iconColor}
              />
          <Text style={{color: colors.text}}>Cerrar sesión</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
      <View style={{ flexDirection: 'row',gap: 10, justifyContent: 'flex-start', alignItems: 'center', marginTop: 20 }}>
          <Switch
            value={isDarkTheme}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.primary, true: colors.secondary }}
            thumbColor={colors.primary}
          />
          <Text style={{color: colors.text}}>Modo Noche</Text>
        </View>
      <Image style={styles.logo_black} source={isDarkTheme ? logo_white : logo_black} />
      </View>
    </DrawerContentScrollView>
    </CustomDrawerBackground>
  );
};

const styles = StyleSheet.create({
    scrollViewContent: {
      flex: 1,
      justifyContent: "space-between",
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    header_name: {
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 29.05,
    }, 
    header_rol: {
      width: 100,
      
      marginLeft: 5,
      borderRadius: 10
    },
    header_rol_text: {
      fontSize: 14,
      fontWeight: '700',
      lineHeight: 24,
      textAlign: 'center',
    },
    drawerItemsContainer: {
      flex: 1,
      marginTop: 20,
      width: "100%",
      justifyContent: "center",
      alignContent: "center",
    },
    container_name: {
      width: "100%",
      padding: 10,
      borderRadius: 200,
      height: 58,
      width: 58,
      textAlign: "center",
    },
    text_name: {
      fontSize: 24,
      fontWeight: '500',
      lineHeight: 36,
      textAlign: "center",
     
    },

    footer: {
      padding: 16,
      alignItems: 'center',
      gap: 20,
    },
    customButton: {
      alignItems: 'center',
    },
    buttonImage: {
      marginBottom: 8, // Espacio entre la imagen y el texto
    },
    buttonText: {
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 16.94
    },
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 16,
      margin: 32,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    logout_button:{
      padding: 20,
      borderBottomWidth: 1,
      borderColor: '#B4BAD8',
      borderTopWidth: 1,
      marginTop: 20,
    },
    logout_button_content: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center'
    }
  });

export default CustomDrawerContent;
